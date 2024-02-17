// src/data-source.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv'
dotenv.config()
import { User } from './models/user';

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.POSTGRES_URL, // Use the environment variable
    ssl: { rejectUnauthorized: false },
    entities: [User],
    migrations: ['src/migration/**/*.ts'],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((error) => console.error("Error during Data Source initialization:", error));
