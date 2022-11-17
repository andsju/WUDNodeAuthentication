import { MongoClient } from 'mongodb';
import { MONGODB_URL, MONGODB_NAME } from "../configs.js";

const client = new MongoClient(MONGODB_URL);

async function connectDatabase() {

    try {
        await client.connect();
        console.log("Database connection done");
        return client.db(MONGODB_NAME);
    } catch (error) {
        console.log("Database connection error", error);
    }
    
}

export default connectDatabase;