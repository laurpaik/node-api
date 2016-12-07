'use strict';

// wut it do?
// take a file that has json in it, and write to a different file

// grab fs module and import it
const fs = require('fs');

// define what standard-in and standard-out are
// for this scripts purposes stdin will be what we type IN to the terminal
const stdin = '/dev/stdin';
// and stdout will be what the terminal spits out
const stdout = '/dev/stdout';

// node copy-json.js data/names.json ...
// process.argv === ['node', 'copy-json.js', 'data/names.json', ...]

// defint inFile as the 3rd argument from the command line
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


// use fs to run readfile, pass it the inFile, encode in utf8, and declare a
// callback.
// the callback takes (as arguments) 'error' and 'data'
fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
  let json, pojo;
  if (error) {
    console.error(error.stack);
    return;
  }
  // try/catch block.
  // try the thing. if don't work, catch the error
  try {
    // if (data) is json, and JSON.parse is able to do its job we're good
    pojo = JSON.parse(data);
    // otherwise console.error the error
  } catch (error) {
    console.error(error.stack);
    return;
  }

  // do something with the pojo ?
  // console.log(pojo);
  // console.log(pojo.names);
  pojo.splitNames = {};
  pojo.names.forEach((nameString)=>{
    console.log(nameString);
    let nameArray = nameString.split(' ');
    pojo.splitNames[nameArray[0]] = nameArray[1];
    // pojo.splitNames.nameArray[0]
  });

  // pojo.delete(names)
  pojo.names = null;
  delete pojo.names;

  console.log(pojo);

  // turn the pojo back into json
  json = JSON.stringify(pojo, null, 2);

  // use writeFile to "write a file"
  // takes the outFile (file we're writing to)
  // json (the pojo stringified from line 56)
  // the flag (set on line 30) 'a' or 'w' depending on where we want our output
  // and a callback which only has one argument (error)
            // - error
  fs.writeFile(outFile, json, { flag: outFileFlag }, error => {
    if (error) {
      console.error(error.stack);
      return;
    }

    console.log('\ncopied');
  });
});
