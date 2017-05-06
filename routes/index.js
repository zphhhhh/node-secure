var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.cookies);
  res.render('index', { title: 'Web 安全演示' });
});

router.get('/alert', function (req, res, next) {
  res.render('alert', { title: 'Web 安全演示' });
});

router.get('/weibo', function (req, res, next) {
  res.render('weibo', { title: 'Web 安全演示' });
});

router.get('/ituring', function (req, res, next) {
  res.render('ituring');
});

router.post('/welcome', function (req, res, next) {
  data = req.body;
  res.render('welcome', { user: data.user });
})

router.post('/report', function (req, res, next) {
  data = req.body;
  console.log(data)
  res.send({
    data: 123
  })
})

module.exports = router;
