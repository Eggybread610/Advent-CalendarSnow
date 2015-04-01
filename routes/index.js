
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    var loveYou = '<div class="love center"><div class="font">I LOVE YOU</div></div><div class="center" style="font-size:40px; text-align:center;">SO FUCKING MUCH</div>';
  res.render('index', { title: 'For my love :)', loveyou: loveYou });
});

module.exports = router;
