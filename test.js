const fs = require('fs')
let rootPath = './'
fs.readdir(rootPath, function(error, files) {
	console.log(files)
	files.forEach(function(file, index) {
		fs.stat(rootPath + file, function(error, status) {
			console.log(status.isDirectory(), status.isFile())
		})
	})
})
