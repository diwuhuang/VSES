var express = require('express');
var router = express.Router();

// 渲染主页
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//渲染管理员界面
router.get('/administrator',function (req, res, next) {
	res.render('admin/administrator');
});

//渲染教师界面
router.get('/teacher',function (req, res, next) {
	res.render('teachers/teacher');
});

//渲染学生界面
router.get('/student',function (req, res, next) {
	res.render('students/student');
});

module.exports = router;