const figlet=require('figlet'); 

figlet("Hey  Hi  Kiran  !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});