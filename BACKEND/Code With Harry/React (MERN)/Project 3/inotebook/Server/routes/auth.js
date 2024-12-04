const express = require("express")
const User = require('../models/User')
const router = express.Router();
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
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        // res.send("Authentication");
        // const user = User(req.body);
        // user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
});
module.exports = router 