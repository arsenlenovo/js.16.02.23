function myName (name) {
  console.log("My name is " + name)
}
myName("Arsen");

function num(a, b) {
  for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
      console.log(i + " - четный");
    }
    else {
      console.log(i + " - нечетный")

    }
  }
}
num(0,11)


let thirdNumber = [];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers; i++) {
  let number = numbers[i].toLowerCase();
  if (number === 0 || number === 3 || number === 6) {
    thirdNumber.push(numbers[3]);
  }
}
console.log(thirdNumber);


function getVolume(height, radius) {
  return height * radius;
}
console.log(getVolume(170, 400) + " объем конуса");


function wordLength(str) {
  console.log("В слове " + str + str.length + " букв");
}
wordLength("Ысык-Көл ");

