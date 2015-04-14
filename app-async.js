var fs = require('fs');
fs.readFile('01.txt', 'utf8', function (err, data1) {
    console.log(data1);
	fs.readFile('02.txt', 'utf8', function (err, data2) {
		console.log(data2);
		fs.readFile('03.txt', 'utf8', function (err, data3) {
			console.log(data3);
			fs.readFile('04.txt', 'utf8', function (err, data4) {
				console.log(data4);
			});
		});
	});
});





