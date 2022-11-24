// import database
import connectDatabase from '../configurations/mongodb.js';
let db = await connectDatabase();

// models | Schemas
import { UserSchema } from '../models/UserSchema.js';

// ...hash password library
import bcrypt from "bcrypt";

const saltRounds = 10;


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

    // check if user exists - if true - return message
    const user = await getUsername(obj.username);

    if (!user) {

        // hash password using bcrypt
        const hash = bcrypt.hashSync(obj.password, saltRounds);
        console.log("password", obj.password, "hash", hash);

        // use hashed password 
        obj.password = hash;

        // if no errors - save to database, return result
        return await db.collection("users").insertOne(obj);

    } else {
        return {error: "Användaren finns redan"};
    }
}

async function getUsername(username) {
    return await db.collection("users").findOne({username: username});
}

export { listUsers, addUser };