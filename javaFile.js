const cp = require("child_process");

var child = cp.execFile("javac", ["javaFile.java"], (error, out, err) => {
  if (error) {
    throw error;
  } else {
    var runner = cp.execFile("java", ["javaFile"], (error, out, err) => {
      if (error) {
        throw error;
      } else {
        console.log(out);
      }
    })
  }
});