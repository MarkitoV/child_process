// child_process.spawn(command, [args], {options})

// options.detached

const fs = require("fs");
const cp = require("child_process");

let prog = "./longrunning.out";

let out = fs.openSync("./logs/out_det.txt", "a");
let err = fs.openSync("./logs/err_det.txt", "a");

let child = cp.spawn(prog, ["duly"], {detached: true, stdio: ["ignore", out, err]});
child.unref();