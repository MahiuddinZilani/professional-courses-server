const express = require("express");
const cors = require("cors");
const courses = require("./courses.json");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Server of Professional Course Website");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //   console.log(id);
  const course =
    courses.find((course) => parseInt(course.course_id) === id) || {};
  res.send(course);
});

app.listen(port);
