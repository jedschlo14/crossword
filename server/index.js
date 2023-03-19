const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/puzzle/:year/:month/:day", (req, res) => {
    const { year, month, day } = req.params;
    const data = require("./puzzles/" + year + "/" + month + "/" + day + ".json"); // prettier-ignore
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
