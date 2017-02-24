'use strict';

// grab fs module and import it
const fs = require('fs');

const copyJson = function (inFile, outFile, outFileFlag) {
  // use fs to run readfile, pass it the inFile, encode in utf8, and declare a
  // callback.
  // the callback takes (as arguments) 'error' and 'data'
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    // a string!
    let json;

    // plain old javascript object
    let pojo;
    if (error) {
      console.error(error.stack);
      return;
    }

    // try/catch block.
    // try the thing. if don't work, catch the error
    try {
      // if (data) is json, and JSON.parse is able to do its job we're good
      pojo = JSON.parse(data);
    } catch (error) {
      // otherwise console.error the error
      console.error(error.stack);
      return;
    }

    // do something with the pojo ? - We're not doing anything here

    // turn the pojo back into json
    json = JSON.stringify(pojo, null, 2);

    // use writeFile to "write a file"
    // takes the outFile (file we're writing to)
    // json (the pojo stringified from line 56)
    // the flag (set on line 30) 'a' or 'w' depending on where we want our output
    // and a callback which only has one argument (error)
    fs.writeFile(outFile, json, { flag: outFileFlag }, error => {
      if (error) {
        console.error(error.stack);
        return;
      }

      // let's us know that the function ran successfully
      console.log('\ncopied');
    });
  });
};

module.exports = copyJson;
