function Actress(name, age) {
    this.name = name;
    this.age = age;
}

var jen = new Actress("Jennifer", 50);

console.log(jen.hasOwnProperty('name')); // true
console.log(jen.hasOwnProperty('age'));  // true