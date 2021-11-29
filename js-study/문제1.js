//1부터 10,000 까지 8의 갯수
let text = '';
let count = 0;

for (let i = 0; i < 10001; i++) {
    text += i;
}
//방법1 text.match(/8/g).length;
//방법2 Array.apply( null, Array( 10000 ) ).map( ( v, i ) => { return i } ).join( "" ).match( /8/g ).length
/*
방법3
function countEight (number) {
  let array = Array.from(new Array(number), (x,i) => i + 1)
  return array.join("").split("8").length-1;
}
*/
for (let i = 0; i < text.length; i++) {
    if (text[i] == '8'){
        count += 1;
    }
}

console.log(count);