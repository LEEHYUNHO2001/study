// 객체지향

// 1. 모듈 패턴
// 값을 은닉하기 위해 사용
function Person(){
    let age = 35;

    return {
        getAge: () => {return age},
        setAge: (data) => {age = data}
    }
}

const person = Person();
console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
// 생성자 함수에 쓰인 this는 인스턴스를 가리키게됨
function PersonType(){
    this.age = 35;
}

PersonType.prototype.getAge = function(){
    return this.age + 1;
}

const instancePerson = new PersonType();
//this.age에 접근이 가능하다. (은닉되지 않음)
console.log(instancePerson.age);
console.log(instancePerson.getAge());