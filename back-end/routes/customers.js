const express = require("express");
const router = express.Router();
const auth = require("../utils/middleware");
// /api/customers/getcustomer

router.get("/getsomehting",auth, (req, res) => {
    console.log("somtheong ");
    res.send({
        "msg" : "Hello"
    })
})

module.exports = router;
