#!/usr/bin/env node
// cat functionality code.

var argumentLength = process.argv.length
var fs = require('pn/fs')
require('songbird')
var path = require('path')


async function touch (){

if(argumentLength > 1){

	var dirName = process.argv[2]
	
	try {

		//1) check if the given argument is a file?
		var stat = await fs.promise.stat(dirName)

		if(stat.isDirectory()){

			let fileNames = await fs.readdir(dirName)

			for (let fileName of fileNames) {
			    let filePath = path.join(dirName, fileName)
			    await fs.promise.unlink(filePath)
			}

			await fs.promise.rmdir(dirName)

			console.log('directory deleted successfully...')			

		}else{

			console.log(dirName + 'is not a directory')			

		}

    } catch (e) {
        console.log(e.stack)
    }

	process.stdout.write('\n')
}

}

touch()
