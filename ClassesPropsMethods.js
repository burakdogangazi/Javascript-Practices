class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  gender = "female"; // female çalışırsa bu yoksa humandaki çalışır

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
