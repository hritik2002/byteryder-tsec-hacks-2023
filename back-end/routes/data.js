const express = require("express");
const upload = require("express-fileupload");
const router = express.Router();
const auth = require("../utils/middleware");
const Homes = require("../models/Homes");
const path = require("path");
const Customers = require("../models/Customers");
router.use(upload);

router.get("/inside", (req, res) => {
  console.log("somtheong ");
  res.send({
    msg: "Hellorrrrrr",
  });
});
router.get("/intrested", auth, (req, res) => {
  res.send({
    src: "fool",
  });
});
router.post("/housedetails", auth, async (req, res) => {
  const uploadPath = path.join(__dirname, "../uploads");
  try {
    var file = req.files.file;
    const filename = file.name;
    const newhome = await Homes.create({
      customer_name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      image: filename,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    });
    file.mv(uploadPath + "/" + filename, (error) => {
      if (error) {
        console.log(error);
        return res.status(501).send({
          error: "Some error occured",
        });
      }
    });
    res.send({
      msg: "Successfully uploaded the details",
    });
  } catch (e) {
    console.log(e);
    res.send({
      error: "Some error occured",
    });
  }
});

router.put("/addUserData", auth, async (req, res) => {
  let user = await Customers.findById(req.user.id);
  res.send(user);
});
module.exports = router;
