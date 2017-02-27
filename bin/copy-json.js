'use strict';

// requires a file copy-json from the lib directory
const copyJson = require('../lib/copy-json.js');

// sets stdin and stdout as strings that look like file names
// stands for stanard in and standard out
// for this script's purposes stdin will be what we type INto the terminal
const stdin = '/dev/stdin';

// and stdout will be what the terminal spits OUT
const stdout = '/dev/stdout';

// How the script will be used:
// COMMAND LINE: node 'bin/copy-json.js', 'data/names.json', ...
// process.argv === ['node', 'bin/copy-json.js', 'data/names.json', ...]

// process.argv[2] is the third thing in the array...
// define the input file as the third argument on the command line OR stdin
let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

// ternary operator ? :
// if (process.argv[2] === '-') {
  // infile = stdin;
// } else {
  // infile = process.argv[2];
//}

// the outfile will be the fourth argument from the command line
// OR
// stdout if that argument is not present
let outFile = process.argv[3] ? process.argv[3] : stdout;

// set a flag to be used with fs.writeFile: 'a' if the output is to the terminal
// 'w' if I'm writing too a file
// if the outfile is stdout we want to append
// (not overwrite what's in the terminal!)
// otherwise, we want to overwrite the file ('w')
let outFileFlag = outFile === stdout ? 'a' : 'w';

// calling a function copyJson with our defined variables
copyJson(inFile, outFile, outFileFlag);
