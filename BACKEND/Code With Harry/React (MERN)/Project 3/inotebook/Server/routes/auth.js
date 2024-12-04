const express = require("express")
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const JWT_Secret = "ggwellplayedmylovedaring"
// Below line is used from the npm package called xpress-validator
const { body, validationResult } = require("express-validator");


// Create a User using: POST "/api/auth/createuser". Doesn't require Auth i.e., no login required
router.post("/createuser", [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 8 character").isLength({ min: 5 }),
], async (req, res) => {
    try {
        // console.log(req.body);
        /** checking for errors from validator , return bad request and the errors */
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        /** Return the Valid user response and check wheather the user with this email exists already*/
        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).json({ error: "Sorry a user with this email already exists" })

        /*
         Securing password using bcrypt and salt, now salt is what u add to the password and 
         generate hashcode for the passwor 
         */ 
        const salt = await bcrypt.genSalt(16);
        const securedPassWord =await bcrypt.hash(req.body.password,salt);
        // Creating new user
        user = await User.create({
            name: req.body.name,
            password: securedPassWord,
            email: req.body.email,
        })
        /** using JWT token to create a token for the user */
        const data = {
            user:{
                id:user.id,
            }
        }
        const AuthToken = jwt.sign(data, JWT_Secret)
        res.json({AuthToken});
        // res.send("Authentication");
        // const user = User(req.body);
        // user.save();
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
});
module.exports = router 