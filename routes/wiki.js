const express = require('express');
const { append } = require('express/lib/response');
const { Page } = require('../models');
const router = express.Router();
const {addPage} = require('../public/views')

router.get('/', (req, res, next) => {
res.send('')
})


router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: '',
      content: '',
    });
    res.redirect('/');
  }
  catch (err) {
    next(err);
  }

})

router.get('/add', (req, res) => {
res.send(addPage())
})


module.exports = router;
