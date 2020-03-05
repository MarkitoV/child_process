// child_process.spawn(command, [args], {options})
// child_process.exec(command, {options}, callback)
// child_process.execFile(file, [args], {options}, callback)

const cp = require("child_process");
const compiler = "g++";
const version = "-std=c++11";
const out = "-o";
const infile = "hello.cpp";
const outfile = "hello.out";

var firstName = "Duly";

// listing files whith execFile()
// var child = cp.execFile("ls", ["-a", "-l"], {cwd:".."}, (error, out, err) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(out);
//   }
// });

// command to compile this c++ file: "g++ -std=c++11 -o hello.out hello.cpp"
var child = cp.execFile(compiler, [version, out, outfile, infile], (error, out, err) => {
  if (error) {
    throw error;
  } else {
    var executable = `./${outfile}`;
    var runner = cp.execFile(executable, ["Markito"], (error, out, err) => {
      if (error) {
        throw error;
      } else {
        console.log(out);
      }
    });
  }
});