// 플랫폼에 익숙해져야 합니다. 프로그래머스, 구름EDU
//  - 사용 가능 라이브러리는 미리 확인!
// 언어 선택 (속도 : c++, 풀이 : python)
// 코드 스네펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익스트라)), Cheat sheet와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두세요!

// 5 ~ 6시간
// 6 ~ 7문제

// 2시간씩 2문제
// 30분씩 4문제

// 몸풀기 2문제

// https://codingdojang.com/scode/393?langby=javascript#answer-filter-area
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;
x;
// [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20;
x;
// [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100)
  .fill(1)
  .map((value, index) => value + index);
".".repeat(10);
".".repeat(10).split(".");
".".repeat(9).split(".");
Array.from("abc");
Array.from("a".repeat(10));
Array.from("ab".repeat(10));

// 몸풀기 2문제 - 1번 정답
// 정답
Array(100)
  .fill(1)
  .map((value, index) => value + index);

Array(100)
  .fill(1)
  .map((value, index) => value + index) +
  ""(
    Array(100)
      .fill(1)
      .map((value, index) => value + index) + ""
  ).split("8");

(
  Array(100)
    .fill(1)
    .map((value, index) => value + index) + ""
).split("8").length - 1;

"1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2".split(/8/g);

"1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2".split(/8/g).length - 1;

///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 몸풀기 2문제 - 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
// for (let i = 0; i < s.length-1; i++) {
//     console.log(s[i+1], s[i])
//     console.log(s[i+1] - s[i])
// }
for (let i = 1; i < s.length; i++) {
  // console.log(s[i], s[i-1])
  // console.log(s[i] - s[i-1])
  arr.push(s[i] - s[i - 1]);
}

// arr.indexOf(5)
// let result = arr.indexOf(Math.min.apply(null, arr));
// Math.min(...arr)
let result = arr.indexOf(Math.min(...arr));
console.log(s[result], s[result + 1]);

// 몸풀기 2문제 - 2번 정답(다른 풀이)
//slice(0, s.length - 1)는 [20, undifined] 를 없애주기 위함.
let s = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((v, i) => [v, b[i]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

function compare(a, b) {
  if (a[1] - a[0] < b[1] - b[0]) {
    return -1;
  }
  if (a[1] - a[0] > b[1] - b[0]) {
    return 1;
  }
  return 0;
}

pairs.sort(compare)[0];

// 몸풀기 2문제 - 2번 정답(다른 풀이) - 쉬운 풀이

let s = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index) => [value, b[index]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
  // console.log(i);
  if (init > i[1] - i[0]) {
    init = i[1] - i[0];
    result = i;
  }
}

console.log(result);

// 몸풀기 끝 //

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 1. 스택과 큐

class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  //pop에 인덱스 넣어도 동작하도록 설계해버림(마이너스 인덱스는 동작안함)
  pop(index = this.arr.length - 1) {
    //인덱스값 안넣었을 경우 그냥 pop
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }
    let result = this.arr.splice(index, 1);
    // let result = this.arr[index];
    // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)];
    return result;
  }

  empty() {
    if (this.arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    try {
      return this.arr[this.arr.length - 1];
    } catch (err) {
      return undefined;
    }
  }

  bottom() {
    try {
      return this.arr[0];
    } catch (err) {
      return undefined;
    }
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
s.push(60);
s.pop();
console.log(s);

// 2. 연결리스트(linked list)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.dataCnt = 0;
  }

  length() {
    return this.dataCnt;
  }

  append(data) {
    let newNode = new Node(data);
    //마지막 값(null)은 새로운 노드가 됨
    this.tail.next = newNode;
    //마지막 노드는 새로운 노드가 됨
    this.tail = newNode;
    this.dataCnt += 1;
  }

  toString() {
    let curNode = this.head;
    curNode = curNode.next;

    let s = "";
    for (let i = 0; i < this.dataCnt; i++) {
      s += `${curNode.data},`;
      curNode = curNode.next;
    }
    return s.slice(0, -1);
  }

  get fullData() {
    let curNode = this.head;
    curNode = curNode.next;

    let s = "";
    for (let i = 0; i < this.dataCnt; i++) {
      s += `${curNode.data}, `;
      curNode = curNode.next;
    }
    return JSON.parse(`[${s.slice(0, -2)}]`);
  }

  insert(index, data) {
    let curNode = this.head;
    curNode = curNode.next;
    for (let i = 0; i < index - 1; i++) {
      curNode = curNode.next;
    }
    let newNode = new Node(data);
    // 순회돌다 멈춘 노드가 가리키고 있던 화살표를 새로운 노드가 복사
    newNode.next = curNode.next;
    // 순회돌다 멈춘 노드를 새로운 노드를 가리키게함. 연결 완료.
    curNode.next = newNode;
    this.dataCnt += 1;
  }
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();
console.log(l.head.next.next.next.next.data); //10

// 3. 정렬
//3.1 선택정렬
let arr = [31, 42, 7, 312, 557, 74, 34, 865];
let sortArr = [];
let arrLen = arr.length;

for (let i = 0; i < arrLen; i++) {
  let minValue = Math.min(...arr);
  sortArr.push(minValue);
  arr.splice(arr.indexOf(minValue), 1);
}
console.log(sortArr);
//3.1 선택정렬 메소드 최소화
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    // 자리바꿈
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(selectionSort(arr));
//3.2삽입정렬(자기가 들어갈 위치를 찾아감) O(n**2)
let arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let sortArr = [];
let arrLen = arr.length;

function 삽입값이들어갈인덱스(sortArr, insertValue) {
  for (const i in sortArr) {
    if (insertValue < sortArr[i]) {
      return i;
    }
  }
  return sortArr.length;
}

for (let i = 0; i < arrLen; i++) {
  let insertValue = arr.shift();
  let index = 삽입값이들어갈인덱스(sortArr, insertValue);
  sortArr.splice(index, 0, insertValue);
  console.log(
    `index : ${index} insertValue : ${insertValue} sortArr : ${sortArr}`
  );
}
//3.2삽입정렬 더 좋은 코드
function insertIndex(sorted_arr, value) {
  //삽입될 위치를 찾는 함수
  for (let i in sorted_arr) {
    if (value < sorted_arr[i]) {
      return i;
    }
  }
  return sorted_arr.length;
}

function insertSort(arr) {
  let sorted_arr = [];

  while (arr.length != 0) {
    let value = arr.shift();
    //삽입될 위치를 반환함
    let index = insertIndex(sorted_arr, value);
    //삽입될 위치에 값을 반환
    sorted_arr.splice(index, 0, value);
  }
  return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));
//3.3 병합정렬 (Worst와 Best 모두 O(nlogn)) 매우 빠름
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  let 결과값 = [];

  if (입력배열의길이 <= 1) {
    return 입력배열;
  }

  let 중간값 = parseInt(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));

  while (그룹하나.length != 0 && 그룹둘.length != 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }

  while (그룹하나.length != 0) {
    결과값.push(그룹하나.shift());
  }

  while (그룹둘.length != 0) {
    결과값.push(그룹둘.shift());
  }

  return 결과값;
}

console.log(병합정렬(입력값));
//3.3 병합정렬 더 좋은 코드
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(mergeSort(arr));
//3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;

  if (입력배열의길이 <= 1) {
    return 입력배열;
  }

  const 피벗값 = [입력배열.shift()]; //기준점
  const 그룹하나 = [];
  const 그룹둘 = [];

  for (let i in 입력배열) {
    if (입력배열[i] < 피벗값) {
      그룹하나.push(입력배열[i]);
    } else {
      그룹둘.push(입력배열[i]);
    }
  }

  console.log(
    `그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`
  );

  return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값));
//3.4 퀵정렬 다른 코드
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; //기준점
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(quickSort(arr));
// 4. 페이지 교체 알고리즘
//FIFO 는 히트시 맨뒤로 가진 않음
/* LRU 알고리즘 개념 hit - 1  miss - 5
[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Jeju”] 1회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Jeju”, “Pangyo”] 2회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Jeju”, “Pangyo”, “Seoul”] 3회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Pangyo”, “Seoul”, “NewYork”] 4회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“Seoul”, “NewYork”, “LA”] 5회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“NewYork”, “LA”, “Seoul”] 6회차

[“Jeju”, “Pangyo”, “Seoul”, “NewYork”, “LA”, “Seoul”, “LA”]
[“NewYork”, “Seoul”, “LA”] 7회차
*/
// 5. 트리와 그래프
//5.1 트리
//트리의 기본 형태
//value, child - left, child-right
// 아래 보이는 구조를 그 밑에서 구현할 것이다.
/*     5
     3   8
    1 4  6 7*/
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};
console.log(tree.root.value); //5
console.log(tree.root.left.value); //3

// object로 linked list와 tree를 만들 수 있는데 굳이 class로 만드는 이유?
// 1. 구조적인 확장 가능성  2. OOP철학에 맞음
class Node {
  constructor(data) {
    this.data = data;
    // this.child = []; // 2진트리가 아닌 트리가 됨
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data === 순회용현재노드.data) {
        // 중복된 값은 탈락!
        return;
      }
      if (data < 순회용현재노드.data) {
        // 들어온 데이터가 작으면 왼쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
        if (!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      }
      if (data > 순회용현재노드.data) {
        // 들어온 데이터가 크면 오른쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }

    this.데이터수 += 1;
  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

// 6. 트리의 순회

// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 주제 : 2진법, 진법 연산, replace, or 연산
//[9, 20, 28, 18, 11][(30, 1, 21, 17, 28)];
let x = 9;
x.toString();
x.toString(2);
x.toString(8);
x.toString(16);

let x = 9;
let y = 30;

x.toString(2);
y.toString(2);

("01001");
("11110");
("-----");
("11111");

("01001");
("11110");
("-----");
("11111");

let z = "11111";
z.replace(/1/g, "#").replace(/0/g, " ");
"#####"(9 | 30)
  .toString(2)
  .replace(/1/g, "#")
  .replace(/0/g, " ");
(9 & 30).toString(2).replace(/1/g, "#").replace(/0/g, " ");
(5 | 3).toString(2).replace(/1/g, "#").replace(/0/g, " ");
(31 | 14).toString(2).replace(/1/g, "#").replace(/0/g, " ");

("00101");
("00011");
("-----");
("  ###");

// || - or
// && - and
// ! - not

/////////////////////

100000 - 1 == 11111;

(9 | 30).toString(2).replace(/1/g, "#").replace(/0/g, " ");

////////////////////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(
      (arr1[i] | arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ")
    );
  }
  return result;
}

console.log(solution(n, arr1, arr2));

////////////////////

// 유틸리티 모듈

const zip = (a, b) => a.map((value, index) => [value, b[index]]);

const fillZero = (n, arr) => {
  return "0".repeat(n - arr.length) + arr;
};

////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let result = [];
  // const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
  const fillSpace = (n, arr) => {
    return " ".repeat(n - arr.length) + arr;
  };
  for (let i = 0; i < n; i++) {
    result.push(
      fillSpace(
        n,
        (arr1[i] | arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ")
      )
    );
  }
  return result;
}

console.log(solution(n, arr1, arr2));

////

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let result = [];
  const zip = (a, b) => a.map((value, index) => [value, b[index]]);
  const fillSpace = (n, arr) => {
    return " ".repeat(n - arr.length) + arr;
  };
  for (let [i, j] of zip(arr1, arr2)) {
    result.push(
      fillSpace(n, (i | j).toString(2).replace(/1/g, "#").replace(/0/g, " "))
    );
  }
  return result;
}

console.log(solution(n, arr1, arr2));

////

// 2. 19년도
// 3. 20년도
// 4. 21년도
