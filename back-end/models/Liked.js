const mongoose = require("mongoose");
const {Schema} = mongoose;

const HomeSchmea = new Schema({
    customer_name : {
        type : String
    },
    address : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    pincode : {
        type : Number
    },
    image : {
        type : String
    },
    latitude : {
        type : String
    },
    longitude : {
        type : String
    }
})

const Homes = mongoose.model("Homes", HomeSchmea);
Homes.createIndexes();
module.exports = Homes;