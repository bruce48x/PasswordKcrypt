import { LoginEntry } from '../entities/LoginEntry';
import { encrypt, decrypt } from '../utils/encryption';
import { initializeDatabase } from '../main/database';
import { ipcRenderer } from 'electron';

export const getLoginEntries = async () => {
    // const dataSource = await initializeDatabase();
    // const entries = await dataSource.getRepository(LoginEntry).find();
    // return entries.map((entry: LoginEntry) => ({
    //     ...entry,
    //     password: decrypt(entry.password), // 解密密码
    // }));
    return await ipcRenderer.invoke('getLoginEntries');
};

export const addLoginEntry = async (entry: Omit<LoginEntry, 'id'>) => {
    // const dataSource = await initializeDatabase();
    // const newEntry = dataSource.getRepository(LoginEntry).create({
    //     ...entry,
    //     password: encrypt(entry.password), // 加密密码
    // });
    // await dataSource.getRepository(LoginEntry).save(newEntry);
    await ipcRenderer.invoke('addLoginEntry', entry);
};

export const updateLoginEntry = async (id: number, updatedEntry: Partial<LoginEntry>) => {
    // const dataSource = await initializeDatabase();
    // const entry = await dataSource.getRepository(LoginEntry).findOne({ where: { id } });
    // if (entry) {
    //     Object.assign(entry, updatedEntry);
    //     if (updatedEntry.password) {
    //         entry.password = encrypt(updatedEntry.password); // 加密密码
    //     }
    //     await dataSource.getRepository(LoginEntry).save(entry);
    // }
    await ipcRenderer.invoke('updateLoginEntry', id, updatedEntry);
};

export const deleteLoginEntry = async (id: number) => {
    // const dataSource = await initializeDatabase();
    // await dataSource.getRepository(LoginEntry).delete(id);
    await ipcRenderer.invoke('deleteLoginEntry', id);
};