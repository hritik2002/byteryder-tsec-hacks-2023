const mongoose = require("mongoose");
const {Schema} = mongoose;

const CustomerSchmea = new Schema({
    username: {
        type: String,
        require : true
    },
    email : {
        type : String
    },
    password: {
        type: String,
        require : true
    },
    name : {
        type: String
    },
    smoking : {
        type: Boolean,
        default : false
    },
    drinking : {
        type: Boolean,
        default : false
    },
    status : {
        type : String
    },
    dob :{
        type: Date
    },
    image : {
        type : String
    },
    contact_no : {
        type : String
    },
    health_desc : {
        type : String
    },
    message : {
        type : String
    }
})

const Customer = mongoose.model("Customer", CustomerSchmea);
Customer.createIndexes();
module.exports = Customer;