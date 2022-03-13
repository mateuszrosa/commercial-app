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
    firstName: {
        type: String,
        required: true,
        select: true,
    },
    lastName: {
        type: String,
        required: true,
        select: true,
    },
    address1: {
        type: String,
        required: true,
        select: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Email is not correct']
    },
    city: {
        type: String,
        required: true,
        select: true,
    },
    zip: {
        type: String,
        required: true,
        select: true,
    },
    country: {
        type: String,
        required: true,
        select: true,
    },
    subdivision: {
        type: String,
        required: true,
        select: true,
    }
});

export const User = mongoose.model('user', schema);