// let lottoArr = [];
let lottoSet = new Set();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function lottoGenerator() {
    while (lottoSet.size < 6) {
        let result = randomNum(1, 46);
        lottoSet.add(result);
    }
    return lottoSet;
}


console.log(lottoGenerator());