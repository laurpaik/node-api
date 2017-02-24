'use strict';

// import the function we're going to use to copy JSON
const copyJson = require('../lib/copy-json.js');

// define what standard-in and standard-out are
// for this script's purposes stdin will be what we type IN to the terminal
const stdin = '/dev/stdin';

// and stdout will be what the terminal spits out
const stdout = '/dev/stdout';

// COMMAND LINE: node copy-json.js data/names.json ...
// process.argv === ['node', 'copy-json.js', 'data/names.json', ...]

// define inFile as the 3rd argument from the command line
let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

// if(process.argv[2] === '-')
//   inFile = stdin;
// else {
//   inFile = process.argv[2];
// }

// outFile is going to be the 4th argument passed on the command line
// OR
// spit out in our terminal (stdout)
let outFile = process.argv[3] ? process.argv[3] : stdout;

// if outfile is stdout we need to set the flag to append (so we dont overwrite
// our terminal)
// otherwise, we want to overwrite the file and replace it with new contents
let outFileFlag = outFile === stdout ? 'a' : 'w';

// call our copying function with the files and the flag we're using
copyJson(inFile, outFile, outFileFlag);
