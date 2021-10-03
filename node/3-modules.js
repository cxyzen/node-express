const names = require("./4-names"); // always start with ./ for local modules
const sayHi = require("./5-utils");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);