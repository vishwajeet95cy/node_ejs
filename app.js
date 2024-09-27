import express from "express";

const app = express();

// Config Ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    message: "Hello from EJS",
    people: ["Vishwa", "Vishal", "Shiva"],
  });
});

app.listen(8000, () => console.log(`Server Started`));
