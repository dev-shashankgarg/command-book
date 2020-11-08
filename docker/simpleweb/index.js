const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log("Simple app listening on port: 8080");
});

app.get("/health", (req, res) => {
    return res.status(200).send({ status: "App up and running !!" });
});