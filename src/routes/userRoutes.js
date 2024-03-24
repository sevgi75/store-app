"use strict";
/* -------------------------------------------------------
    EXPRESS -STORE APP-USER ROUTES
------------------------------------------------------- */

const router = require("express").Router()

const User = require("../controllers/userController")

// User:

// Login/Logout:
router.post('/login', User.login)
router.all('/logout', User.logout)    
// router.get('/logout', User.logout)  

// List - Read
router.route('/').get(User.list)
   
router.route('/:id').get(User.read)

module.exports = router