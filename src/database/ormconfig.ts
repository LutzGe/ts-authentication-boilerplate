import { ConnectionOptions } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config({ path: __dirname + '/../../.env'}) 

const connectionOptions: ConnectionOptions = {
    "type":"postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "entities": [
        "src/app/models/*.ts"
    ],
    "migrations": [
        "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir":"src/database/migrations"
    }
}

export default connectionOptions