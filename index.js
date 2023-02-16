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