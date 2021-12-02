let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]


console.log(data.map(x => x.이름));
console.log(data.map(x => [x.이름, x.중간고사점수]));
console.log(data.map(x => x.중간고사점수).reduce((a, c) => a + c));

let s = 0;
data.map(x => x.중간고사점수).forEach(y => s += y)
console.log(s);