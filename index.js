/* const { response } = require("express"); */
const Joi = require("joi");

const express = require("express");
const app = express();
app.use(express.json());
/* app.get();
app.post();
app.put();
app.delete(); */

const course = [
  { subject: "Computer", id: 1 },
  { subject: "Math", id: 2 },
  { subject: "Science", id: 3 },
];

app.get("/", (req, res) => {
  res.send("Wewlcome!!");
});
app.get("/api/courses", (req, res) => {
  res.send(["Ravi", "Aravinth", "Coimba"]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/post/:year/:month", (req, res) => {
  //res.send(req.params);
  res.send(req.query);
});

app.get("/api/course/:id", (req, res) => {
  const cResult = course.find((c) => c.id === parseInt(req.params.id));
  //res.send(cResult);
  if (!cResult) res.status(404).send("The Courses Id not found");
  res.send(cResult);
});

app.post("/api/courses", (req, res) => {
  const schema = Joi.object({
    subject: Joi.string().alphanum().min(3).max(30).required(),
    id: Joi.number().max(10).required(),
  });

  const valResult = schema.validate({
    subject: req.body.subject,
    id: req.body.id,
  });
  console.log(valResult);

  if (valResult.error) {
    res.status(400).send(valResult.error.details[0].message);
    return;
  }

  /*   const schema = {
    subject: Joi.string().min(3).required(),
  };
  const valResult = Joi.validate(req.body, schema);

  console.log(valResult); */

  /* if (!req.body.subject || req.body.subject.length < 3) {
    res
      .status(400)
      .send("Subject should not be blank or minimum 3 charactor lenghth");
    return;
  } */

  const cou = {
    id: course.length + 1,
    subject: req.body.subject,
  };
  course.push(cou);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const co = course.find((c) => c.id === parseInt(req.params.id));
  if (!co) res.status(404).send("The cource not found");

  const schema = Joi.object({
    subject: Joi.string().min(3).required(),
  });

  const valRes = schema.validate({ subject: req.body.subject });

  if (valRes.error) {
    res.status(400).send(valRes.error[0].message);
  }

  console.log(course);
  console.log("welcome");

  const inx = course.findIndex((c) => c.id === parseInt(req.params.id));
  console.log(inx);

  course[inx].subject = req.body.subject;
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Started ${port}`));
