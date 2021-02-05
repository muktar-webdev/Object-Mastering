/*const person = { firstName: "Nishat",
                middleName: "Hasan",
                lastName: "Muktar",
                fullName:function(){
                    return console.log(this.firstName,this.middleName,this.lastName);
                }
 };
 const normalPerson = person.fullName();*/


 const person = { firstName: "Nishat",
                middleName: "Hasan",
                lastName: "Muktar",
                salary:30000,
                getFullName:function(){
                    return console.log(this.firstName,this.middleName,this.lastName);
                },
                chargeBill:function(amount){
                     this.salary = this.salary - amount;
                     return this.salary;
                    
                }
 };
 const personName= person.getFullName();
 console.log(personName);
 
 const normalPerson = person.chargeBill(2000);
 console.log(normalPerson);
