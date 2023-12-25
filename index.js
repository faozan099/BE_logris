const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = 3067;
const connectDB = require("./config/db");
const routes = require("./routes/index")
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use(routes)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
  });
});
