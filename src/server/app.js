// requiring packages
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const request = require("./apiRequests");

// setting up middlewares and main variables
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.static("dist"));
const data = []; // Data storage




// server section

app.get("/", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
});
app.get('/data', (req, res) => {
    // send all data
    res.send(data)
})
app.post("/data", async (req, res) => {
    console.log(req.body);
    const loc = req.body.location;
    const date = req.body.date;
    const geo = await request.geoNames(loc)
    // const temp = await request.weatherData(geo.lat, geo.lng)
    const temp = 30
    const img = await request.pixabayApi(loc)
    // Constructing Data object
    const tempData = {
        date,
        ...geo,
        "temp": temp,
        "img": img
    }
    // Make a deep copy of the data object
    data.push({ ...tempData })
    res.send(tempData)
});
app.listen(port, () => {
    console.log(`Connected on port: ${port} !!`);
});

module.exports = app