// A User model: class | Schema | Mongoose | ...
import Schema from 'validate';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        length:  { min: 2, max: 32 }
    },
    lastName: {
        type: String,
        required: true,
        length:  { min: 2, max: 32 }
    }
})

export { UserSchema };