const os=require('os');

console.log("Architecture -> " + os.arch());  // x64
console.log("host name -> " + os.hostname());  // DESKTOP-8FVJ9QH
console.log(os.platform());  // win32
console.log(os.type());  // Windows_NT
console.log(os.uptime());  // in seconds
console.log(os.userInfo());  // returns information about the current user
console.log(os.totalmem());  // returns total memory of the system in bytes
console.log(os.freemem());  // returns free memory of the system in bytes
console.log(os.cpus());  // returns information about the cpus
console.log(os.networkInterfaces());  // returns information about the network interfaces
console.log(os.homedir());  // returns home directory of the current user
console.log(os.tmpdir());  // returns temporary directory of the system
console.log(os.version());  // returns version of the os
console.log(os.release());  // returns release of the os
console.log(os.loadavg());  // returns load average of the system
console.log(os.uptime());  // returns uptime of the system
