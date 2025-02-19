import { LoginEntry } from '../entities/LoginEntry';
import { encrypt, decrypt } from '../utils/encryption';
import { initializeDatabase } from '../utils/database';

export const getLoginEntries = async () => {
    const repository = await initializeDatabase();
    const entries = await repository.find();
    return entries.map((entry: LoginEntry) => ({
        ...entry,
        password: decrypt(entry.password), // 解密密码
    }));
};

export const addLoginEntry = async (entry: Omit<LoginEntry, 'id'>) => {
    const repository = await initializeDatabase();
    const newEntry = repository.create({
        ...entry,
        password: encrypt(entry.password), // 加密密码
    });
    await repository.save(newEntry);
};

export const updateLoginEntry = async (id: number, updatedEntry: Partial<LoginEntry>) => {
    const repository = await initializeDatabase();
    const entry = await repository.findOne({ where: { id } });
    if (entry) {
        Object.assign(entry, updatedEntry);
        if (updatedEntry.password) {
            entry.password = encrypt(updatedEntry.password); // 加密密码
        }
        await repository.save(entry);
    }
};

export const deleteLoginEntry = async (id: number) => {
    const repository = await initializeDatabase();
    await repository.delete(id);
};