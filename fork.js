// child_process.fork(modulePath, [args], {options})

const cp = require('child_process');
const path = require('path');

// const names = ["dully", "bonheur", "boidam", "adrian"];

var child = cp.fork("forkchild.js", {cwd: "./modules"});

// child.on("message", (data) => {
//   console.log(`parent received ${data}`);
// })

child.on("exit", () => {
  console.log("child terminated!");
});

let interval = setInterval(() => {
  child.send({ name: "dully", age: 30, city: "Naples" });
}, 1000);

setTimeout(function () {
  clearInterval(interval);
  child.kill();
}, 5000);