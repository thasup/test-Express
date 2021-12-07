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

app.post('/bmicalculator', (req, res) => {
    let W = Number(req.body.weight);
    let H = Number(req.body.height);
    let result = W / (H * H);
    res.send(`Your BMI is ${result}`);
});

