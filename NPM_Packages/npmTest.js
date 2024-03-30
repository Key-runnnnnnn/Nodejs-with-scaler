const figlet = require('figlet');

figlet("Hey  Hi  Kiran  !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

//  figlet -> ^1.7.0  (major.minor.patch) ->symanic versioning
// ^ -> major version will be fixed and minor and patch versions will be updated automatically when we install the package using npm install figlet --save command 
// major release means having a lots of changes and new features and it may break the existing code
// minor release means having some new features and some bug fixes and it may not break the existing code
// patch release means having only bug fixes and it will not break the existing code