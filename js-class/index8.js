
/*
!-------Array vs string similarity---------

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


? note:index same,  length same
 */  





/*
!--------slice---------

let students = ['Meem','Muksina','Hiya','Priya','Liza'];
let firstName = 'Muksina';

let stn = students.slice(2,4);
console.log(students);
console.log(stn);

let newName = firstName.slice(2,4);
console.log(firstName);
console.log(newName);

? note: slice similar result
*/



/*
! ---------splice-----------

let students = ['Meem','Muksina','Hiya','Priya','Liza'];
let firstName = 'Muksina';

console.log(students);

students.splice(1,3); //remove element
console.log(students);

students.splice(2,0,'Sabiha','Tamanna');
console.log(students);

students.splice(3,1,'Salma')
console.log(students);

? note:splice similar result
*/




/*
!-----------Include -----------

let array = ['shimu', 'saima', 'shanta', 'sumaya'];
let string = 'sweety';

console.log(array.includes( 'saima'));
console.log(string.includes(t));
*/


/*
!-----------concatanation---------

let firstName = 'Muksina';
let lastName = 'Diya';

let fullName = firstName + (' ') + lastName;
let fullName = firstName.concat(' ') .concat(lastName);
let fullName = `${firstName} ${lastName}`;

console.log(fullName);
*/
/*
let students = ['Shimu', 'Saima', 'Sumaya','Sweety'];
let stn = 'Shanta';

let new = students.concat(stn);

console.log(new);
*/

/*
let num1 =[1,2,3,4,5];
let num2 = [6,7,8,9,10];

const totalNum = num1.concat(num2);

console.log(totalNum);

*/


/*
 !---------------spread operator--------------------

let num1 =[1,2,3,4,5];
let num2 = [6,7,8,9,10];

let totalNum =[...num1,...num2] ;

console.log(totalNum);
*/


/*
!---------------join--------------------------------

let array = ['shimu', 'saima', 'shanta', 'sumaya'];

let newString = array.join(" + ");
console.log(typeof newString);
console.log(newString);
*/

/*
!-----------split method-------------

let str = 'I am lucky girl.I am very Happy.';

//let newStr = str.split('');
//let newStr = str.split( );
let newStr = str.split('a');

console.log(newStr);
*/


/*
! ---------optional : String Reverse Method:--------------

let str = ' We have to learn javaScript very short time';
//let reverseString = str.split('');
//let reverseString = str.split('') . reverse();
let reverseString = str.split('') . reverse(). join('');
console.log(reverseString);
*/
