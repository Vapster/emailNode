const express = require('express');
const app = express();
const emailRouter = require('./routes/email')

app.use(express.json())
app.use(emailRouter);

app.listen(process.env.PORT || 8888)