const days = ["Mon", "Tues", "Wed", "Thu", "Fri"];
const numberDays = days.map((day, idx) => `#${idx+1} ${day}`);
console.log(numberDays);

const numbers = [4, 1, 67, 323, 697, 3, 7, 42, 53, 28, 15];
const bigger = numbers.filter(v => v > 15);
console.log(bigger);

let photos = ["sun", "moon", "animal", "fish"];
if(!photos.includes("animal")){
    photos.push("animal")
}
console.log(photos);