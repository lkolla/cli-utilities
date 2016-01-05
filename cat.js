#!/usr/bin/env node
// cat functionality code.

var argumentLength = process.argv.length
var fs = require('pn/fs')
require('songbird')


async function cat (){

if(argumentLength > 1){

	var fileWithPath = process.argv[2]
	
	try {
     
		//1) check if the given argument is a file?
		var stat = await fs.promise.stat(fileWithPath)

		if(stat.isFile()){

			// if yes, show the file content.
			var data = await fs.promise.readFile(fileWithPath, 'utf8')
			console.log(data)

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

cat()
