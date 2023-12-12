// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const coursesRouter = require('./routes/courses');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // Use EJS as the template engine

app.use('/courses', coursesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
