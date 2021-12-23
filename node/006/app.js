const fs = require("fs");

// rename, readFile, writeFile, appendFile, copyFile, mkdir

let 변수 = "이현호"; // 사용자 이름
let 날짜 = new Date();
// fs.rename("./test.txt", `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//   console.log(err);
// });

// fs.readFile("./test.txt", "utf8", (err, data) => {
//   console.log(err);
//   console.log(data);
// });

// fs.writeFile("./test2.txt", "hello world 1234567", (err) => {
//   console.log(err);
// });

// fs.appendFile("./test2.txt", "\n추가~", (err) => {
//   console.log(err);
// });

// fs.appendFile("./test2.txt", "\n추가~", (err) => {
//   console.log(err);
// });

// fs.readdir("./", (err, data) => {
//   console.log(err);
//   console.log(data);
// });

fs.mkdir("./yoyo", (err) => {
  console.log(err);
});
