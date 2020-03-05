// child_process.exec(command, { options }, { calback })

const cp = require("child_process");

var progs = {
  list : "ls",
  remove: "rm"
}

// Code for delete files
// var child = cp.exec(progs.remove + " -r css", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
//   } else {
//     console.log(stdout);
//   }
// });

var child = cp.exec(progs.list, { cwd: ".." }, (error, stdout, stderr) => {
  if (error) {
    console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
  } else {
    console.log(stdout);
  }
});