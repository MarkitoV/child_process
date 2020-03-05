// child_process.spawn(command, ["args"], { options })

var cp = require("child_process");
var progs = {
  list: "ls",
  copy: "cp",
  folder: "mkdir"
}
// valid command
// var child = cp.spawn(progs.list, ["-l"], { cwd:".." });
// var child = cp.spawn(progs.list, ["-l"]);

// invalid command
var child = cp.spawn(progs.list, ["-l"], { cwd: "pub" });

child.stdout.on("data", (data) => {
  console.log(`data:\n${data}`);
});

child.stderr.on("data", (err) => {
  console.log(`error: ${err}`);
});

child.on("error", (err) => {
  console.log("error has ocurred!");
});

// function to copy files
// var copy = cp.spawn(progs.copy, ["spawn.js", "spwan1.js"]);
// copy.on("exit", () => {
//   console.log("copy process finished");
// });

// function to make directories
// var makeDir = cp.spawn(progs.folder, ["css"]);