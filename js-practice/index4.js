
//-------object practice---
const myBio={
  name         :'Muksina',
  age          :20,
  'father Name':'Abdul Ahad',
  'mother Name':'Helena Akter',
   address     :'kishoreganj',
   readingNow  :'true',
   passingYear :2022,

};

console.log(myBio);
console.log(myBio.name);
console.log(myBio.age);
console.log(myBio['father Name']);
console.log(myBio['mother Name']);
console.log(myBio.address);
console.log(myBio.readingNow);
console.log(myBio.passingYear);


console.log(myBio['name']);
console.log(myBio['age']);
console.log(myBio['father Name']);
console.log(myBio['mother Name']);
console.log(myBio['address']);
console.log(myBio['readingNow']);
console.log(myBio['passingYear']);



let newName = myBio.name;
let newAddress= myBio['address'];

console.log(newName);
console.log(newAddress);

