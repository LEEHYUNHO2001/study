// 객체지향

// 1. 모듈 패턴
// 값을 은닉하기 위해 사용 -> 클로저 사용
function Person() {
  let age = 35;

  return {
    getAge: () => {
      return age;
    },
    setAge: (data) => {
      age = data;
    },
  };
}

const person = Person();
console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
// 생성자 함수에 쓰인 this는 인스턴스를 가리키게됨
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age + 1;
};

const instancePerson = new PersonType();
//this.age에 접근이 가능하다. (은닉되지 않음)
console.log(instancePerson.age);
console.log(instancePerson.getAge());

//이렇게 하는것과 위의것은 어떤 차이가 있을까?
//사용자 정의 타입 패턴은 재사용이 가능하다. (메모리 효율적)
// const instancePerson1 = new PersonType();
// const instancePerson2 = new PersonType();
// const instancePerson3 = new PersonType();
let person2 = { age: 35 };
console.log(person2.age);

// 3. 모듈 + 사용자 정의 패턴
// 메모리 효율적으로 사용하면서 값을 은닉
// 클로저공간안에 있는 값을 리턴할 수 있으므로 innerPersonType는 클로저 함수
function PersonType2() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());

// IIFE 패턴으로 만들어보기
const PersonType3 = (function () {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());
