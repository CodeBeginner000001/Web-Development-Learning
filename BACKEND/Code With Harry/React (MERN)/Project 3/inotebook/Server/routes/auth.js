const express = require("express")
const User = require('../models/User')
const router = express.Router();
// Below line is used from the npm package called xpress-validator
const {body, validation, validationResult} = require("express-validator");


// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post("/",[
    body("name","Enter a Valid Name").isLength({min:3}),
    body("email","Enter a valid Email").isEmail(),
    body("password","Password must be atleast 8 character").isLength({min:5}),
],(req,res)=>{
    console.log(req.body);
    /** checking for errors from validator */
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    /** Return the Valid user response */
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    })
    .then(user => res.json(user))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Please Enter a unqiue value for email" ,message:err.message});
    });
    // res.send("Authentication");
    // const user = User(req.body);
    // user.save();
});
module.exports = router