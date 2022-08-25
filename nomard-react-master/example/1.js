function sayHello(name = "Name"){
  return "Hello" + name;
}
//const sayHello = (name = "Name") => "Hello" + name
const hyunho = sayHello("hyunho");
console.log(hyunho);


const person = {
  name: "LEEHYUNHO",
  age: 26,
  nationality: "korea",
  fav: {
      food: "Doncas",
      sports: "soccer",
  }
};
//비 효율적
//const name = person.name;
//const age = person.age;
const {name, age, nationality: nat, fav: {food, sports}} = person;
console.log(name, age, food, sports);


const days = ["Mon", "Tues", "Wed"];
const other = ["Thu", "Fri", "Sat"];
//const all = days + other;
//const all = [days + other];
//const all = [days, other];
const all = [...days, ...other];
console.log(all)