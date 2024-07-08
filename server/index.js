const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/puzzle/:year?/:month?', (req, res) => {
    const { year, month } = req.params;
    const puzzlesDir = path.join(__dirname, 'puzzles', year || '', month || '');
    const subdirectories = fs
        .readdirSync(puzzlesDir, { withFileTypes: true })
        .map((dirent) =>
            dirent.isDirectory() ? dirent.name : dirent.name.slice(0, -5)
        );
    res.send(subdirectories);
});

app.get('/puzzle/:year/:month/:day', (req, res) => {
    const { year, month, day } = req.params;
    const data = require("./puzzles/" + year + "/" + month + "/" + day + ".json"); // prettier-ignore
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
