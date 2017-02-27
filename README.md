[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to the Node API

## Prerequisites

-   Familiarity with JavaScript as a language.
-   Familiarity with JavaScript in the browser environment.

## Objectives

By the end of this, developers should be able to:

-   Reference the Node API documentation for using JavaScript outside the
    browser.
-   Reference the MDN JavaScript documentation for JavaScript language features.
-   Write a Node script using the File System API.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

## JavaScript, the Browser, and Node

-   JavaScript: a language specified by ECMA and implemented independently
-   Browser: an environment for running JavaScript (among other things)
-   Node: an environment for running JavaScript outside the browser

Somewhat valid equations:

```txt
Browser = JavaScript + Browser API + (other things)
   Node = JavaScript + CLI/Server API
```

How are the two environments similar? How do they differ?

## Lab: Research the File System API

Take a few minutes to read the following API documentation for the Node File
System module.

While you're reading, imagine how you'd use each function. Write some example
code in your notebook. Try to explain what each function does in your own words,
including what sorts of arguments it takes and each argument's type.

If you finish early, look for other interesting functions in the File System
module.

1.  [`fs.readdir(path, callback)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readdir_path_callback)
  ```txt
  fs.readdir basically reads what files are in a directory...
  kind of like ls, but more specific? also asynchronous
  takes a file path and a callback as arguments...
  the callback also takes two arguments, err and files
    might cause an error if the directory doesn't exist, or if there are no files
    or if you call a file instead of a directory
    either callback(null, files) or (err, null) depending
  lets you continue with your program and then runs the callback when it's done reading
  protects us from time out errors!!!
  ```
1.  [`fs.readdirSync(path)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readdirsync_path)
  ```txt
  This one's like the one above, but synchronous... just takes the file path as an arguments
  doesn't need a callback bc it's synchronous
  stops the program while it's reading the file, makes you do stuff in order
  we want to avoid this one tbh bc we don't want to time out!!!
  ```
1.  [`fs.readFile(file[, options], callback)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_readfile_file_options_callback)
  ```txt
  reads a certain file, can convert it to a string if needed
  it's asynchronous... takes file (first) and a callback (last) as arguments...
  also optional options
  callback takes two arguments, err and data
  ```
1.  [`fs.writeFile(file, data[, options], callback)`](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)
  ```txt
  Writes data in a new file... replaces file if the file already exists
  Is also asynchronous
  arguments: file(first), data(second),
    options(optional, anything between data and callback), callback(last)

    callback just takes err as an argument because
    we already gave writeFile data
    doesn't need to pass the data onto the callback
  ```

## Discussion

Are these methods JavaScript, node, or browser?
- `Math.random` --> JavaScript!
- `fs.readFile` --> node! only available in node environment!
- `http.ClientRequest` --> node!
- `document.ready` --> browser!-
- `new Promise` --> JavaScript!

## Annotate-Along: `lib/copy-json.js`

## Code-Along: `hey-yall.js`

"Hello, World!" with the Node file system API.

## Lab: Write a Randomizer

Randomize the lines in a file.

How do you shuffle an array?

Run your code using: `node bin/randomizer.js example.txt`

### Bonus
Write a node script that takes a JSON string and parses into an object.

Input: `"{ names: ["first last", "jon smith", "chris payne"]" }`

Output:
```js
{ names:  {
  first: "last",
  jon: "smith",
  chris: "payne" }
}
```

## Additional Resources

-   [Docs | Node.js](https://nodejs.org/en/docs/)
-   [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node Courses from CodeSchool](https://www.codeschool.com/search?query=Node.js)
-   [NodeSchool](http://nodeschool.io/)
-   [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle),
 aka Knuth shuffle.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
