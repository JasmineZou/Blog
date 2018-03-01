var mysql = require('mysql');   // 引用mysql模块。注意要先安装mysql： npm install mysql
var config = require('./db');

var blog_pool = mysql.createPool(config.blog);
exports.blog_pool = blog_pool;