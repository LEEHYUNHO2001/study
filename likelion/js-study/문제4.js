//모든 자릿수 더하기
let arr = [11, 22, 33, 111, 2];

let s = arr + '';
let new_arr = s.replace(/,/g,'');
let result = 0;

for(let i of new_arr){
    result += parseInt(i);
}