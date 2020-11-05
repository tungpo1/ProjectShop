const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "fashionqueen",
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

app.get('/api/gethomeProduct', (req, res) => {
  var sql = "SELECT * FROM homeproduct ORDER BY id Asc";
  // console.log(sql);
 connection.query(sql, function(err, results) {
   if (err) throw err;
   res.json(results);
 });
});
app.get('/api/home', (req, res) => {
  var sql = "SELECT * FROM homeproduct ORDER BY id Asc";
  // console.log(sql);
 connection.query(sql, function(err, results) {
   if (err) throw err;
   res.json(results);
 });
});
app.get('/api/shop/getProduct', (req, res) => {
  var sql = "SELECT * FROM listproduct ORDER BY id Asc";
  // console.log(sql);
 connection.query(sql, function(err, results) {
   if (err) throw err;
   res.json(results);
 });
});


app.post("/api/post", function (req, res) {
  var sql =
    "INSERT " +
    "INTO userinfo(Username,Email,Phone,Subject,Message) " +
    "VALUES('" +
    req.body.name +
    "','" +
    req.body.email +
    "','" +
    req.body.phone +
    "','" +
    req.body.sub +
    "','" +
    req.body.mess +
    "')";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/api/subscribes", function (req, res) {
  var sql =
    "INSERT " +
    "INTO subscribes(email) " +
    "VALUES('" +
    req.body.email +
    "')";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/api/checkout", function (req, res) {
  
  var sql =
    "UPDATE listproduct SET "
    +   "numProduct='"+req.body.quanid+"'"
    + "WHERE id='"+req.body.listid+"'";
  connection.query(sql, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
});




app.listen(5000, () => console.log("App listening on port 5000"));
