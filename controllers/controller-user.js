// import database
import connectDatabase from '../configurations/mongodb.js';
let db = await connectDatabase();

// models | Schemas
import { UserSchema } from '../models/UserSchema.js';


async function listUsers() {
    let users = await db.collection("users").find({}).toArray();

    return users;
}

async function addUser(obj) {

    // check if obj passes schema validation
    // https://www.npmjs.com/package/validate
    const errors = UserSchema.validate(obj);

    // console.log("errors", errors);
    // big no-no to store password in plain text....
    // todo - use bcrypt to hash password  
    // https://www.npmjs.com/package/bcrypt

    // return
    if (errors.length > 0) {
        return {error: errors[0].message};
    }

    // if no errors - save to database, return result
    return await db.collection("users").insertOne(obj);
}

export { listUsers, addUser };