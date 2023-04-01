const express = require('express')
const morgan = require("morgan");
const router = require("./routes/indes");

const app = express()
//midleware

app.use(morgan("dev"));
app.listen(3000)

// Routes
app.use(router);


console.log('server on port 3000')