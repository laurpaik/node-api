'use strict';

// require the fs module (part of node, allows us to interact with files)
const fs = require('fs');

const copyJson = function (inFile, outFile, outFileFlag) {

  // calls the readFile function with our infile,the utf8 encoding,
  // and an anonymous function as a callback
  // everything from here to the end of the file is the callback to fs.readFile
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {

    // declares json and pojo without defining them
    let json;

    // stands for plain old javascript object
    let pojo;

    // if there's an error, print the stack trace
    if (error) {
      console.error(error.stack);

      // don't execute any more of this function
      return;
    }

    // try/catch block
    // try to do something, if it doesn't work, catch the error
    try {

      // try to parse the json from the file
      pojo = JSON.parse(data);
    } catch (error) {

      // if we couldn't parse the json, print the stack trace
      console.error(error.stack);

      // and stop running
      return;
    }

    // at this point, we know we have valid JSON and a javascript object, pojo,
    // that represents that JSON
    // this is where we'd manipulate the data

    // Turn the pojo back into JSON
    json = JSON.stringify(pojo, null, 2);

    // write a file using fs.writeFile(file, data, options, callback)
    // file === outFile, data === json, options === { flag: outFileFlag }
    fs.writeFile(outFile, json, { flag: outFileFlag }, error => {

      // if there's an error, send an error to the console and stop executing
      if (error) {
        console.error(error.stack);
        return;
      }

      // print something to let us know that the function was successful
      console.log('\ncopied');
    });
  });
};

// export the copyJson function
module.exports = copyJson;
