/*
! -------------------------------Object----------------------------

let myName = 'Muksina';
let age = 20;
let address = Kishoreganj;
let mySubject=['Human Geography','Physical Geography','Principal of Economics','Socialwork'];
let isPassed=true;
*/
/*
let person = {

? note:-property/key : value,
    name      : "Mithe",
    age       : 25,	
    profession: "Student",
    isReading : false,
    'present Address' :'Kishorgang',
    mySubjects :['Human Geography','Physical Geography','Principal of Economics','Socialwork']
}; 
*/

/*
console.log(person);

 ? 1.--dot notetion---

console.log(person.name);
console.log(person.age);
console.log(person.profession);
console.log(person.isReading);
console.log(person.mySubjects);
*/
/*
? 2.---bracket notetion----

console.log(person['name']);
console.log(person['age']);
console.log(person['profession']);
console.log(person['isReading']);
console.log(person['mySubjects']);
*/

/*

let  newName = person.name;
let newAddress = person['present Address'];
console.log(newName);
console.log(newAddress);
*/

/*
? 3.------new property add----------

person.hobby='Reading book';

console.log(person.hobby);
*/


/*
? 4.--proprty update---

person.age = 30;
console.log(person.age); 
*/

/*
? 5.------new property delete----------

delete person.age;

console.log(person);
*/


/*
? কেবল key বের করতে: Object.keys() 

 const newVar = Object.keys(person);
 console.log(newVar);
*/
/*
 ? কেবল value বের করতে: Object.values() 

 const newVar = Object.values(person);
 console.log(newVar);
 */

/*
   ? Object.entries() - key এবং value উভয়ই বের করতে:

  const newVar = Object.entries(person); 
  console.log(newVar);

  console.log(person);
 */ 
/*
!------------------------Nested object :  ------------------------------

const person = { name: "Muksina", 
    age: 20,
    profession: "Student", 
    isReading: true, 
    address: { 
             street: "123 Main Street",
             village:{
                road:'pitua poshcim para',
                house:'Niketon'
             } ,
             city: "Kishoreganj", 
             country: "Bangladesh" 
    },
    hobbies: ["Reading book", "Travel", "Tree plantation"]
};
*/
   /* 
console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[3]);
console.log(person.address.village);
console.log(person.address.village.house);


console.log(person['isReading']);
console.log(person['address']['street']);
console.log(person['address']['village']['road']);

console.log(person['hobbies'][1]);
console.log(person.hobbies[2])
*/



