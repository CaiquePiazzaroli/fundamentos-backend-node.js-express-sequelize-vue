class User {

  //Construtor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    return this.name;
  }
  printAge() {
    return this.age;
  }
}


//Exportando
module.exports = {
    User,
}