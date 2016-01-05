#!/usr/bin/env babel-node
// cat functionality code.

var argumentLength = process.argv.length
var fs = require('pn/fs')
require('songbird')


async function touch (){

if(argumentLength > 1){

	var fileWithPath = process.argv[2]
	
	try {
     
		//1) check if the given argument is a file?
		var stat = await fs.promise.stat(fileWithPath)

		if(stat.isFile()){

			// if yes, show the file content.
			var fd = fs.openSync(fileWithPath, 'r');
			await fs.promise.futimes(fd, new Date(), new Date())
		}else{

			// if not, show the error message
			console.log(fileWithPath + '\t is not a file')
		}

    } catch (e) {
        console.log(e.stack)
    }

	process.stdout.write('\n')
}

}

touch()
