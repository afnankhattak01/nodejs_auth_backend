require("dotenv").config();
const express = require("express");
const app = express();

const connection = require("./db_connection/connection");
const fileUpload = require("express-fileupload");

connection();

const loginpage = require("./routes/loginpage");
const verification = require("./routes/verify");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload());

app.use("/api/loginpage", loginpage);
app.use("/api/userverification", verification);

app.listen(process.env.PORT||5001, () => {
  console.log(`Server is up and running on PORT "${process.env.PORT}" `);
});
