
// no pipe
// no sync

//use fs to write the file
const fs = require('fs');
const request = require('request');
// gives terminal input as array of string values
const argv = process.argv.slice(2);
const log = console.log;

//process data and write to local file
//use callback approach


  //request url
request(`${argv[0]}`, (error, response, body) => {
  log(error);
  fs.writeFile(`${argv[1]}`, body, err => {
    if (err) {
      log(err);
    }
    //find number of charactors in body and 
    // log(argv.length)
  });

})

//download resource at 'URL' to 'local file path'
//print 'Downloaded and saved 1234 bytes to ./index.html'
  //use log
//--async--below steps