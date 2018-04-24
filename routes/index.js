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


//渲染学生界面
router.get('/student',function (req, res, next) {
	res.render('students/student');
});

//渲染管理员登录界面
router.get('/adminLogin',function (req, res, next) {
	res.render('adminLogin');
});

//渲染学生必做实验界面
router.get('/require_lab',function (req, res, next) {
	res.render('students/require_lab');
});

//渲染教师新建实验界面
router.get('/newLab',function (req, res, next) {
	res.render('teachers/newLab');

});

//渲染教师发布实验界面
router.get('/publishLab',function (req, res, next) {
	res.render('teachers/publishLab');
});

//渲染全部作业界面
router.get('/wholeWork',function (req, res, next) {
    res.render('teachers/wholeWork');
});
//渲染已改作业界面
router.get('/checkedWork',function (req, res, next) {
    res.render('teachers/checkedWork');
});
//渲染未改作业界面
router.get('/uncheckedWork',function (req, res, next) {
    res.render('teachers/uncheckedWork');
});

//渲染芯片属性界面
router.get('/feature',function (req, res, next) {
	res.render('chips/feature');

});
module.exports = router;
