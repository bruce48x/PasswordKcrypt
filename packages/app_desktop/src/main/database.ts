import { DataSource } from 'typeorm';
import * as entities from '../entities';

const AppDataSource = new DataSource({
    type: 'sqlite',
    driver: require('sqlite3'), // 明确指定驱动
    database: 'database.sqlite',
    entities,
    synchronize: true,
    logging: true,
});

export const initializeDatabase = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return AppDataSource;
};