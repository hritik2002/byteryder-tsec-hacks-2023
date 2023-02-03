const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const data = require("./data.json");
const auth = require("../utils/middleware");

const Customers = require("../models/Customers");

const JWT_SECRET = "HelloRashid";

router.get("/intrested", auth, (req, res) => {
  console.log(req.user);
  res.send({
    src: "fool",
  });
});

// console.log(data[0]);
router.post("/getonehouse", (req, res) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].location_id === req.body.id) {
      let finaldata = data[i];
      return res.send({
        finaldata,
      });
    }
  }

  res.send([]);
});

router.put("/addUserData", auth, async (req, res) => {
  console.log("inside");
  try {
    let user = await Customers.findById(req.user.id);
    // console.log(req.body)
    const update = {
      name: req.body.name,
      smoking: req.body.smoking,
      drinking: req.body.drinking,
      status: req.body.status,
      dob: req.body.dob,
      contact_no: req.body.contact_no,
      health_desc: req.body.health_desc,
      message: req.body.message,
    };
    const newuser = await Customers.findOneAndUpdate(
      { id: req.user.id },
      update
    );
    res.send({
      msg: "User Updated",
      newuser,
    });
  } catch (e) {
    console.log(e);
    res.send({
      err: "Some error occured",
    });
  }
});
router.get("/getUser", auth, async (req, res) => {
  const user = await Customers.findById(req.user.id);
  res.send({
    user,
  });
});
router.get("/getRoomsData", (req, res) => {
  res.send(data);
});
const profileData = require("./profile.json");
router.post("/getoneprofile", (req, res) => {
  for (let i = 0; i < profileData.length; i++) {
    console.log(profileData[i].id, req.body.id);
    if (profileData[i].id === req.body.id) {
      let finaldata = profileData[i];
      return res.send({
        finaldata,
      });
    }
  }
  res.send(profileData);
});
router.post("/aluser", (req, res) => {
  res.send(profileData);
});
router.post("/createuser", async (req, res) => {
  let success = false;
  try {
    let existing = await Customers.findOne({ email: req.body.email });
    if (existing) {
      return res.send({
        error: "User already exits..!!",
        success,
      });
    }
    let newuser = await Customers.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    success = true;
    res.send({
      msg: "User created...!!",
      success,
    });
  } catch (e) {
    console.log(e);
    return res.status(505).send({
      error: "Some error occurred",
      success,
    });
  }
});

router.post("/login", async (req, res) => {
  let success = false;
  try {
    const user = await Customers.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        msg: "E-mail is not registered",
        success,
      });
    }
    console.log(user.password, req.body.password);
    if (user.password !== req.body.password) {
      return res.send({
        msg: "Wrong Passowrd",
        success,
      });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.send({
      authToken,
      success,
    });
  } catch (e) {
    console.log(e);
    res.status(505).send({
      error: "Some error occured",
      success,
    });
  }
});

module.exports = router;
