const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", require("./routes/"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Server has been started: http://localhost:3000/")
);
