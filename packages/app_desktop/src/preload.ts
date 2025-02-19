// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { LoginEntry } from './entities';

contextBridge.exposeInMainWorld('electronAPI', {
    getLoginEntries: () => ipcRenderer.invoke('getLoginEntries'),
    addLoginEntry: (entry: Omit<LoginEntry, 'id'>) => ipcRenderer.invoke('addLoginEntry', entry),
    updateLoginEntry: (id: number, updatedEntry: Partial<LoginEntry>) =>
        ipcRenderer.invoke('updateLoginEntry', id, updatedEntry),
    deleteLoginEntry: (id: number) => ipcRenderer.invoke('deleteLoginEntry', id),
});