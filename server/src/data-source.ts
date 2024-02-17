// src/data-source.ts
import { DataSource } from 'typeorm';
import 'dotenv/config'; // Make sure to load environment variables
import { User } from './models/user';

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://default:dLK2TmeH7ciq@ep-withered-tooth-a2gw2h8z-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require", // Use the environment variable
    ssl: { rejectUnauthorized: false },
    entities: [User],
    migrations: ['src/migration/**/*.ts'],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((error) => console.error("Error during Data Source initialization:", error));
