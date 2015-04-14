var async = require('async'),
    fs = require('fs');
// 顺序执行
var tasks = ['01.txt', '02.txt', '03.txt', '04.txt'];
async.eachSeries(tasks, function (item, callback) {
	fs.readFile(item, 'utf8', function (err, data) {
		console.log(data);
		callback(err);
	});
}, function (err) {
    console.log("finish");
});