const mongoose = require("mongoose");
const url = "mongodb+srv://alivewalker:12345@cluster0.russlnx.mongodb.net/inotebook?retryWrites=true&w=majority";


const connectToAtlas = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected..!!");
    }).catch((err) => {
        console.log("error....!!!!",err);
    })
}

module.exports = connectToAtlas