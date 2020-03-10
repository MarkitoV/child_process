const cp = require("child_process");

var child = cp.execFile("php", ["holamundo.php"], (error, out, err) => {
  if (error) {
    throw error;
  } else {
    console.log(out);
  }
});