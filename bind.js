const person = {
  firstName: "Nishat",
  middleName: "Hasan",
  lastName: "Muktar",
  salary: 30000,
  getFullName: function () {
    // return this.firstName + " " + this.middleName;
    const carrot = `${this.firstName} ${this.middleName}`;
    return carrot;
  },
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};


const heroPerson = {
  firstName: "Kabir",
  middleName: "Sing",
  salary: 130000,
};


const friendlyPerson = {
  firstName: "Elon",
  middleName: "Musk",
  salary: 3100000,
};

// // --For person---//
// // console.log(person.chargeBill(3000));
// // console.log(person.getFullName());

// --bind()-- for hero-person-object//
const heroName = person.getFullName.bind(heroPerson);
console.log(heroName());

const heroBillcharge = person.chargeBill.bind(heroPerson);
console.log(heroBillcharge(2000));


// --bind()-- for frindly-person-object//

const friendlyName = person.getFullName.bind(friendlyPerson);
console.log(friendlyName());

const friendlyBillCharge = person.chargeBill.bind(friendlyPerson);
console.log(friendlyBillCharge(10000));



