const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const data = require("./data");

const Customers = require("../models/Customers")

const JWT_SECRET = "ROOMIIEEHOMMMIIEE";

router.get("/housedetails", (req, res) => {
    console.log("somtheong ");
    return res.send({
        "msg" : "Hellorrrrrr"
    })
})
router.get("/getRoomsData", (req, res)=> {
    res.send(data)
})
router.post("/createuser", async (req, res) => {
    let success = false;
    try{
        let existing = await Customers.findOne({email : req.body.email});
        if(existing){
            return res.send({
                error : "User already exits..!!",
                success
            })
        }
        let newuser = await Customers.create({
            email : req.body.email,
            username : req.body.username,
            password : req.body.password
        })
        success = true;
        res.send({
            msg : "User created...!!",
            success
        })
    } catch(e){
        console.log(e);
        return res.status(505).send({
            error : "Some error occurred",
            success
        })
    }
})

router.post("/login", async (req, res) => {
    let success = false;
    try{
        const user = await Customers.findOne({email : req.body.email});
        if(!user){
            return res.send({
                msg : "E-mail is not registered",
                success
            })
        }
        console.log(user.password, req.body.password)
        if(user.password !== req.body.password){
            return res.send({
                msg : "Wrong Passowrd",
                success
            })
        }
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.send({
            authToken,
            success
        })
    }catch(e){
        console.log(e);
        res.status(505).send({
            error : "Some error occured",
            success
        })
    }
})

module.exports = router;
