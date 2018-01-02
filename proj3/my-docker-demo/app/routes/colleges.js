const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', async function(req, res, next) {
  
  const colleges = await models.College.findAll();

  // res.render('colleges/index', {
  //   title: 'Colleges',
  //   data: colleges,
  // });

  var tmpStr = "<h1>Colleges</h1>";

  for(var i = 0; i < colleges.length; i++) {
    tmpStr = tmpStr += "<br />" + colleges[i].name;
  }

  res.send(tmpStr);

});

module.exports = router;
