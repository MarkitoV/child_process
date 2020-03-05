// var data = process.argv.slice(2);

// function sayHello(names) {
//   names.forEach(function(name) {
//     process.send(`Greetings ${name}`);
//   }, this);
// }

// sayHello(data);

process.on("message", (userData) => {
  console.dir(userData, { colors: true });
});