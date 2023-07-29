require("dotenv").config();
const express = require("express");
const app = express();

const connection = require("./db_connection/connection");
const fileUpload = require("express-fileupload");

connection();

const loginpage = require("./routes/loginpage");
const verification = require("./routes/verify");
const graceCalculation = require("./routes/calculations/graceriskScore");
const firminghamScore = require("./routes/calculations/firminghamScore");
const timiCalculation = require("./routes/calculations/timiroskCalc");
const fetcher = require("./routes/fetchRecord/fetch");
const deleter = require("./routes/deleteRecord/delete");
const verify = require("./routes/verify/verify");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload());
console.log("hello world!")
app.use("/api/loginpage", loginpage);
app.use("/api/userverification", verification);
app.use("/api/riskcalculation", graceCalculation);

app.use("/api/firmingham", firminghamScore);
app.use("/api/timi", timiCalculation);

app.use("/api/fetchRecord", fetcher);
app.use("/api/delete", deleter);

app.use("/api/verify", verify);


app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is up and running on PORT "${process.env.PORT}" `);
});
