import mongoose from 'mongoose';
import {validateEmail} from './validators';
import bcrypt from 'bcrypt';
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
    },
    orders: {
        type: Array,
        select: true
    }
});

schema.pre('save', function (next) {
    const user = this;
    const salt = bcrypt.genSaltSync(10);
    if (!user.isModified('password')) return next();
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next();
})

schema.post('save', function (error, doc, next) {
    if (error.code === 11000) {
        for (let key in error.keyValue) {
            if (key === 'email') {
                error.errors = { message: 'That email is already used' }
            } else if (key === 'login') {
                error.errors = { message: 'That login is already used' }
            }
        }
    } else if (error) {
        error.errors = { message: error.message.split(": ")[2] }
    }
    next(error);
});

schema.post('findOneAndUpdate', function(error, doc,next) {
    if (error.code === 11000) {
        for (let key in error.keyValue) {
            if (key === 'email') {
                error.errors = { message: 'That email is already used' }
            } else if (key === 'login') {
                error.errors = { message: 'That login is already used' }
            }
        }
    } else if (error) {
        error.errors = { message: error.message.split(": ")[2] }
    }
    next(error);
})

schema.methods = {
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

export const User = mongoose.model('user', schema);