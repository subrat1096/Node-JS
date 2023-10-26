const { format } = require("date-fns");
// const uuid = require('uuid');
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyy/MM/dd\tHH:mm:ss"));

// console.log(uuid.v4());
console.log(uuid());
console.log();
