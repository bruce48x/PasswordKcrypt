import { createConnection } from 'typeorm';
import { LoginEntry } from '../entities/LoginEntry';

export const initializeDatabase = async () => {
    const connection = await createConnection();
    return connection.getRepository(LoginEntry);
};