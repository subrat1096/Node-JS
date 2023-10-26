const fs = require("fs");

const rs = fs.createReadStream("./files/random.txt", { encoding: "utf-8" });

const ws = fs.createWriteStream("./files/new_text.txt");

// rs.on("data", (datachunk) => {
//   ws.write(datachunk);
// });

rs.pipe(ws)