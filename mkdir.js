#!/usr/bin/env babel-node
// cat functionality code.

var argumentLength = process.argv.length
var fs = require('pn/fs')
require('songbird')


async function touch (){

if(argumentLength > 1){

	var dirName = process.argv[2]
	
	try {
     
		await fs.promise.mkdir(dirName)

		console.log('directory created successfully...')

		//1) check if the given argument is a file?
		//var stat = await fs.promise.stat(dirName)

		//if(stat.isDirectory()){

			// if not, show the error message
		//	console.log(fileWithPath + '\t already exists')

		//}else{

			//var arrayOfStrings = dirName.split('/')

			//var directoryName = arrayOfStrings[arrayOfStrings.length - 1]

			// if yes, show the file content.
			

		//}

    } catch (e) {
        console.log(e.stack)
    }

	process.stdout.write('\n')
}

}

touch()
