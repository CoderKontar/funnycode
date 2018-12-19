//常用汉字3500
let commonChar = require("./CommonCharacter");
let str = "", i = 0;
while(i < 28 && ++i) str = str.concat(String.fromCharCode(commonChar[Math.floor(Math.random() * 3500)])).concat(i % 7 === 0 ? (i % 14 === 0 ? "。" : "，") + "\r\n" : "");
console.log(str);
