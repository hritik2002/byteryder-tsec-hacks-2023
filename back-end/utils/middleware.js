const jwt = require("jsonwebtoken");

const JWT_SECRET = "ROOMIIEEHOMMMIIEE";

const auth = (req, res, next) => {
    const authToken = req.header("authToken");
    console.log("authtoken :", authToken);
    if(!authToken) {
        return res.status(401).send({
            error : "Please authenticate with valid token"
        })
    }
    try {
        const data = jwt.verify(authToken, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        // console.log(error);
        res.status(401).send({
            error : "Some error occured"
        })
    }
}

module.exports = auth;