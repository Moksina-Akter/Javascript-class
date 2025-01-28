

/*
//-----------trim----------

let myName = 'Muksina';
let myName2 = '  Muksina ';

if(myName .toLowerCase() .trim()===myName2 .toLowerCase() .trim()){
    console.log('Yes its me');
}
else{
    console.log('No i am not');
}

console.log(myName.length);
console.log(myName2.length);

*/


//-------Array vs string similarity---------
/*
let students = ['Meem','Muksina','Hiya','Priya','Liza'    ];
console.log(students);
console.log(students[3]);
students[3] = 'Diya';


let firstName = 'Muksina    ';

console.log(firstName[3]);
firstName[3] ='m';
console.log(firstName);

console.log(students.length);
console.log(firstName,length);


//note:index same,  length same
   
*/




/*
//--------slice---------

let students = ['Meem','Muksina','Hiya','Priya','Liza'];
let firstName = 'Muksina';

let stn = students.slice(2,4);
console.log(students);
console.log(stn);

let newName = firstName.slice(2,4);
console.log(firstName);
console.log(newName);

// note: slice similar result
*/




//---------splice-----------

let students = ['Meem','Muksina','Hiya','Priya','Liza'];
let firstName = 'Muksina';

console.log(students);
/*
students.splice(1,3); //remove element
console.log(students);

students.splice(2,0,'Sabiha','Tamanna');
console.log(students);
*/
students.splice(3,1,'Salma')
console.log(students);

//note:splice similar result


