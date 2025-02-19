import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { initializeDatabase } from './database';
import { LoginEntry } from '../entities/LoginEntry';

let mainWindow: BrowserWindow;

async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

    // 初始化数据库
    const dataSource = await initializeDatabase();
    const repository = dataSource.getRepository(LoginEntry);

    // 暴露数据库操作 API
    ipcMain.handle('getLoginEntries', async () => {
        const entries = await repository.find();
        return entries;
    });

    ipcMain.handle('addLoginEntry', async (_, entry: Omit<LoginEntry, 'id'>) => {
        const newEntry = repository.create(entry);
        await repository.save(newEntry);
    });

    ipcMain.handle('updateLoginEntry', async (_, id: number, updatedEntry: Partial<LoginEntry>) => {
        const entry = await repository.findOneBy({ id });
        if (entry) {
            Object.assign(entry, updatedEntry);
            await repository.save(entry);
        }
    });

    ipcMain.handle('deleteLoginEntry', async (_, id: number) => {
        await repository.delete(id);
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});