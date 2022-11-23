// A User model: class | Schema | Mongoose | ...
import Schema from 'validate';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        length:  { min: 2, max: 12 }
    },
    password: {
        type: String,
        required: true,
        length:  { min: 8, max: 72 }
    }
})

export { UserSchema };