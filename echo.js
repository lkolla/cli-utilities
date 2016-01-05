#!/usr/bin/env node
// echo functionality code.

var argumentLength = process.argv.length

//console.log('length==>' + argumentLength)

if(argumentLength > 1){
	for(var i = 2; i < argumentLength; i++) {
 		process.stdout.write(process.argv[i])
	}

	process.stdout.write('\n')
}
