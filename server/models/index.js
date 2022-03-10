import mongoose from 'mongoose';
import {validateEmail} from './validators';
const Schema = mongoose.Schema;

const schema = new Schema({
    login: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Email is not correct']
    },
});

export const User = mongoose.model('user', schema);