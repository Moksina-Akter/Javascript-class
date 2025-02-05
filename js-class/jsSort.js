// !--------------Javascript Short() Method-------------------




/*
 !------------1.string-array decoration------------


let names = ["Sumaya", "Sweety", "shanta", "Shimu", "Saima"]; 

console.log(names);

let newNames =names.sort();

console.log(newNames);
console.log(names);
*/
/*

let  numbers =[9,10,8,16,5,11,4,21,1];

numbers.sort();
console.log(numbers);
*/

/*
 ? a. Ascending Order :

let number= [18,20,14,12,9,42,5,8];
number.sort(function(a,b){return(a-b)});

// numbers.sort((a, b) => a - b); 

console.log(number);
*/

/*
?  b. Descending Order :

let numbers= [18,20,14,12,9,42,5,8];
numbers.sort(function(a,b){return(b-a)});

//numbers.sort((a, b) => b - a);

console.log(numbers);
*/
/*
? c.Arrow function:

let numbers= [18,20,14,12,9,42,5,8];
numbers.sort((choto,boro)=>choto-boro);

//numbers.sort((a, b) => a - b);
//numbers.sort((a, b) => b - a);

console.log(numbers);
*/


// ! ------------------------Object Sorting----------------------

//array of object-

let students = [ 
    
    { name: "Sumaya", age: 22 }, 
    { name: "Sweety", age: 25 }, 
    { name: "Shanta", age: 20 },  
    { name: "Shimu" , age: 23 }, 
    { name: "Saima" , age: 26 }  
];
   
students.sort((a, b) => a.age - b.age);
//students.sort((a, b) => b.age-a.age);

console.log(students);
   













