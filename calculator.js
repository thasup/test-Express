const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    // console.log(req);
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;
    res.send(`The result of the calculation is ${result}`);
});

