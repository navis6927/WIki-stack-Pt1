const morgan = require('morgan');
const express = require('express');
const pg = require('pg');
const app = express();
const { db } = require('../models');
const wiki = require('../routes/wiki');
const users = require('../routes/users')

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wiki)
app.use('/users', users)
app.get('/', (req, res) => {

  res.redirect('/wiki')
})


app.get("/", (req, res) => {
  res.send('Hello World')
});


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const init = async () => {
  await db.sync( {force: true});
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
}

init();
