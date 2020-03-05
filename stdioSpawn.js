// child_process.spawn(command, [args], {options})

// options.stdio

const fs = require("fs");
const cp = require("child_process");

let prog = "ls";

let err = fs.openSync("./logs/err.txt", "a");
let out = fs.openSync("./logs/out.txt", "a");

let child = cp.spawn(prog, ["-a"], {stdio: ["ignore", out, err]});

// child.stdout.on("data", (data) => {
//   console.log(`data: ${data}`);
// });