// import database
import connectDatabase from '../configurations/mongodb.js';
let db = await connectDatabase();

// models | Schemas
import { UserSchema } from '../models/UserSchema.js';


async function listUsers() {
    let users = await db.collection("users").find({}).toArray();

    return users;
}

async function addUser() {

    // check if obj passes schema validation
    // https://www.npmjs.com/package/validate
    // .validate() function returns an array of validation errors.
    let obj = {firstName: "Flisa", lastName: "Hedenhös"};
    const errors = UserSchema.validate(obj);

    // if no errors - save to database...
}



export { listUsers };