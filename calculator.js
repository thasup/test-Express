const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    // console.log(req);
    res.sendFile(`${__dirname}/index.html`);
});