const express = require('express');
const routes = require('./routes/test');


const app = express();

// middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//app.use('/', routes);
app.use('/', routes)

app.listen(3000, () => {
    console.log('Running on port 3000');
});