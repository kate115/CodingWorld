// var user = {
//     firstName = this.firstName,
//     lastName = this.lastName,
//     age = this.age,
//     gender = this.gender,
//     fullName = firstName + " " + lastName
// }

// var MelodyWang = {
//     firstName = "Melody",
//     lastName = "Wang",
//     age = 7,
//     gender = "female",
//     fullName = firstName + " " + lastName
// }

class People {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.fullName = firstName + " " + lastName
    }
  }

// var MelodyWang = {
//     firstName: "Melody",
//     lastName: "Wang",
//     age: 7,
//     gender: "female",
//     fullName: "Melody Wang"
// }

var MelodyWang = new People("Melody", "Wang", "7", "female")

console.log(MelodyWang.fullName)