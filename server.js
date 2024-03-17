const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

//i created the package.json file by running: npm init -y

//to connect the file from the week 2 folder
app.use(express.static(path.join(__dirname, "week 2")));

app.listen(port, () => {
    console.log("App listening on port: " + port);
});