const express = require("express");
const cors = require("cors");
const connectToAtlas = require("./utils/dbconnect.js");

const port = 8000;
connectToAtlas();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/customers", require("./routes/customers"));
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
