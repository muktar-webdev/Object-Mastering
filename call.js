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
    chargeBill: function (amount,tax,boksis,vat) {
      this.salary = this.salary - amount -tax - boksis - vat;
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

//   --call -- for heroPerson object--//
person.chargeBill.call(heroPerson,20000,1000,2000,2000);
console.log(heroPerson.salary);

// --CALL for frinelyPerson Object--//

person.chargeBill.call(friendlyPerson,10000,10,10000,10000);
console.log(friendlyPerson.salary);
  