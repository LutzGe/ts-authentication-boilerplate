import { createConnection } from "typeorm";
import connectionOptions from './ormconfig'

createConnection(connectionOptions).then(() => console.log("Connected to database."))