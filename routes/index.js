var express = require('express');
var router = express.Router();
var quizController = require("../controllers/quiz_controller");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


router.use('/quizes/question',quizController.question);
router.use('/quizes/answer',quizController.answer);


module.exports = router;
