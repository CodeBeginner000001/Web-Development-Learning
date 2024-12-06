const express = require("express")
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const fetchUser = require("../middleware/fetchUser")
const JWT_Secret = "ggwellplayedmylovedaring"
// Below line is used from the npm package called xpress-validator
const { body, validationResult } = require("express-validator");


//Route 1: Create a User using: POST "/api/auth/createuser". Doesn't require Auth i.e., no login required
router.post("/createuser", [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be atleast 8 character").isLength({ min: 5 }),
], async (req, res) => {
    try {
        // console.log(req.body);
        /** checking for errors from validator , return bad request and the errors */
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ success:false,errors: errors.array() });
        /** Return the Valid user response and check wheather the user with this email exists already*/
        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).json({ success:false,error: "Sorry a user with this email already exists" })

        /*
         Securing password using bcrypt and salt, now salt is what u add to the password and 
         generate hashcode for the passwor 
         */
        const salt = await bcrypt.genSalt(16);
        const securedPassWord = await bcrypt.hash(req.body.password, salt);
        // Creating new user
        user = await User.create({
            name: req.body.name,
            password: securedPassWord,
            email: req.body.email,
        })
        /** using JWT token to create a token for the user */
        const data = {
            user: {
                id: user.id,
            }
        }
        const AuthToken = jwt.sign(data, JWT_Secret)
        res.json({ success:true,AuthToken });
        // res.send("Authentication");
        // const user = User(req.body);
        // user.save();
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
});

//Route 2: Authenticating a User using: POST "/api/auth/login". Doesn't require Auth i.e., no login required
router.post("/login", [
    body("email", "Enter Your Email").isEmail(),
    body("password", "Password cannot be blank").isLength({ min: 3 }).exists()], async (req, res) => {
        //  checking for errors from validator , return bad request and the errors
        const error = validationResult(req);
        if (!error.isEmpty()) return res.status(400).json({ success:false,error: error.array() })
        // destructing the body data
        const { email, password } = req.body;
        try {

            // finding the user from the database
            let user = await User.findOne({ email });
            // checking if the user exists in the database
            if (!user) {
                return res.status(400).json({ success:false,error: "Please try to login with Valid Credentials" });
            }
            // checking if the password is correct by sending the entered password and the password from the database
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) {
                return res.status(400).json({ success:false,error: "Please try to login with Valid Credentials" });
            }
            // if all goes when the send payload
            const data = {
                user: {
                    id: user.id,
                }
            }
            const AuthToken = jwt.sign(data, JWT_Secret);
            res.json({ success:true,AuthToken });
        }
        catch {
            console.log(error);
            res.status(500).send("Internal Server Error")
        }
    })

// Route 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchUser, async (req, res) => {
    try {
        const userid = req.user.id
        const user = await User.findById(userid).select("-password")
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router 