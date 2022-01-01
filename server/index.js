const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json()); 
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "project",
});
app.post("/create", (req, res) => {
  console.log(req.body.name);
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
const position = req.body.position;
const address = req.body.address;

db.query(
  "INSERT INTO employee_details (emp_id,emp_name,email,password, position,address) VALUES (null,?,?,?,?,?)",
  [name, email, password, position, address],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  }
);
});


app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query =
    "select emp_id,emp_name from employee_details where email = ? and password = ?";

  db.query(query, [email, password], (err, result) => {
    console.log(err, result[0].emp_name);
    if (err) res.send(err);
    else if (result.length == 0) {
      res.send("No matching credentials");
      console.log(result, "invalid");
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/initiatives", (req, res) => {
  const query =
    "select Init_Id,Init_Name,Description,further_plans,start_date from initiative;";
  db.query(query, (err, result) => {
    if (err) return res.status(404).send(err);
    else {
      console.log("Initiatives fetched!");
      res.send(result);
    }
  });
});

app.get("/employees", (req, res) => {
  const query = "select * from employee_details";
  db.query(query, (err, result) => {
    if (err) return res.status(404).send(err);
    else {
      console.log("Success!!");
      res.send(result);
    }
  });
});


app.post("/addcon", (req, res) => {
  console.log(req.body.name);
const emp_id = req.body.emp_id;
const con_details = req.body.con_details;
const Init_id = req.body.Init_id;
var kr=1;
db.query(
  "INSERT INTO contribution (con_id,emp_id,Init_id,con_details) VALUES (null,?,?,?)",
  [emp_id, Init_id,con_details],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Values Inserted");
    }
  }
);
});

app.get("/getcon", (req, res) => {
db.query("SELECT contribution.con_id,contribution.emp_id,employee_details.emp_name,contribution.con_details FROM contribution  INNER JOIN employee_details  on (contribution.emp_id=employee_details.emp_id);", (err, result) => {
  if (err) {
    console.log(err);
  } else {
  res.send(result);
  }
});
});


app.post("/addapplause", (req, res) => {
  console.log(req.body.name);
const emp_id = req.body.emp_id;
const con_id = req.body.con_id;
// const Init_id = req.body.Init_id;

db.query(
  "INSERT INTO applause (app_id,con_id,applause_by) VALUES (null,?,?)",
  [con_id,emp_id],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Applaused");
    }
  }
);
});



const port = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log(`Running on ${port}`);
});
