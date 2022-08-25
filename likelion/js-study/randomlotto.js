// let lottoArr = [];
let lottoSet = new Set();
function lottoGenerator() {
    while (lottoSet.size < 6) {
        let result = randomNum(1, 46);
        lottoSet.add(result);
    }
    return lottoSet;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// // 랜덤 숫자 뽑는함수
// function randomFunc(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// // 뽑은 번호 담을 배열 준비
// let lottoArr = [];
// // 6개 뽑아서 lottoArr에 담는함수
// function lottoGenerator() {
//     // 배열이 꽉차기 전까지 반복 (6개 까지)
//     while (lottoArr.length < 6) {
//         let result = randomFunc(1, 46);
//         // 중복 판단하기위해 필요한 변수
//         let isGot = false;

//         // 중복 판단
//         // lottoArr 의 요소를 순회
//         lottoArr.forEach((element) => {
//             // 요소가 result 와 같다면 중복!
//             if (element === result) {
//                 // 중복됐다고 표시!
//                 isGot = true;
//             }
//         });

//         // 중복이 안되었다면 배열에 뽑은숫자 추가 (중복이 되었다면 if문에 못들어가서 추가하지않음) 
//         if (!isGot) {
//             lottoArr.push(result);
//         }
//     }
//     // 여기에 도달했을땐 배열이 꽉~채워짐
//     return lottoArr;
// }
// console.log(lottoGenerator());



// function randomNum(min, max){
//     return Math.floor(Math.random()*(max-min)+min);
// }

// function tryLotto(...input) {
//     if (input.length !== 6) {
//       console.log('숫자를 6개 입력해야 합니다.');
//       return;
//     } else if (input.length !== new Set(input).size) {
//       console.log('숫자를 중복되지 않게 입력해야 합니다.');
//       return;
//     } else if (input.some(v => !Number.isInteger(v) || v > 45 || v < 1)) {
//       console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
//       return;
//     }

//     const selected = [];
//     let count = 0;
//     while (count < 7) {
//         const selectedNum = randomNum(1, 46);
//         if (!selected.includes(selectedNum)) {
//             count++;
//             selected.push(selectedNum);
//         }
//     }
//     console.log(`당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`);
//     const nums = input.filter(v => selected.slice(0, 6).includes(v));
//     switch (nums.length) {
//         case 0: case 1: case 2:
//             console.log('꽝!');
//             break;
//         case 3:
//             console.log('★ 5등 당첨! ★');
//             break;
//         case 4:
//             console.log('★★ 4등 당첨! ★★');
//             break;
//         case 5:
//             if (input.includes(selected[6])) {
//               console.log('★★★★ 2등 당첨!! ★★★★');
//               nums.push(`보너스 ${selected[6]}`);
//             } else console.log('★★★ 3등 당첨!! ★★★');
//             break;
//         case 6:
//             console.log('★★★★★ 1등 당첨!!! ★★★★★');
//     }
//     if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
// }

// tryLotto(1, 2, 3, 4, 5, 6);