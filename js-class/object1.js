//!---------------for loop--------------
/*
for(let i=0; i<=10; i++){
    console.log(i);
}
*/

//let students =['Mymona','Kakoly','Sima','Meem','Taslima','Sweety'];

//console.log(students.length);
/*
for (let i=0; i<=10; i++) {
    console.log(i);
    console.log(students[2]);

}
*/
/*
for(let i=0; i<students.length; i++){

   console.log(students[i]);
}
*/

// ? note: array te for of loop r object a for in loop use


//!---------------for of loop--------------
/*
let students =['Mymona','Kakoly','Sima','Meem','Taslima','Sweety'];

for (const newName of students) {
    console.log(newName);
}
*/


// ! ------------Array Reverse various Method: --------------
 // ? Why not push Method :

 /*
const rev=[]                                          // [9.....,6,5,43,2,1]
let num = [1,2,3,4,5,6,7,8,9];

for(let i=0; i<num.length; i++){

    const newRev= num[i] ;
    rev.unshift(newRev)
}
console.log(rev);
*/


/*
let numbers = [1,2,3,4,5,6,7,8,9];

for(let i=0; i<numbers.length; i++){
    //console.log(i);
    //console.log(numbers[i]);

    const newNumbers=numbers[i];
    console.log(newNumbers);

}

*/

/*
let numbers = [1,2,3,4,5,6,7,8,9];
const revNumbers=[];

for(let i=0; i<numbers.length; i++){

    const newNumbers=numbers[i];

    //revNumbers.push(newNumbers);
    revNumbers.unshift(newNumbers);

    console.log(revNumbers);
}

//console.log(revNumbers);
*/





/*
!-----------Reverse with For of Loop-------------

let numbers = [1,2,3,4,5,6,7,8,9];
const revNumbers=[];

for (const newNum of numbers) {
    console.log(newNum);
}
*/

/*
let numbers = [1,2,3,4,5,6,7,8,9];
const revNumbers=[];

for (const newNum of numbers) {
    const getData =newNum;
    revNumbers.unshift(getData); 

    console.log(revNumbers);
}

//console.log(revNumbers);
*/

/*
let students =['Meem','Muksina','Kakoly','Sweety','Taslima','Jhumu'];
const newStn=[];

for (const stn of students) {
    
    const getData = stn;
    newStn.unshift(getData);

    console.log(newStn);
}

console.log(newStn);
*/



//!-----------------Reverse Looping--------------------- 















