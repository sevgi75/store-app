"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP-USER MODEL
------------------------------------------------------- */

const { mongoose } = require("../db")

const passwordEncrypt = require('../helpers/passwordEncrypt')

// Schema
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // required: true,
        required: [true, 'Email must be required.'],
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
        // set: passwordEncrypt
    },

    isAdmin: {
        type: Boolean,
    }

}, {
    collection: 'user',
    timestamps: true // createdAt and updatedAt eklensin ve yönetilsin
})


module.exports = mongoose.model('User', UserSchema)