/*
! 1.Write a JavaScript program to sort an array of numbers in both ascending and descending order.Given an array:
 ? a. Ascending Order :

let numbers = [10, 5, 20, 3];
numbers.sort(function(a,b){return(a-b)});
 numbers.sort((a, b) => a - b); 

console.log(numbers);

? b. Descending Order :

numbers.sort(function(a,b){return(b-a)});
numbers.sort((a, b) => b - a);

console.log(numbers);
*/
/*
! 2. You are given an array of numbers:

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newRev=[];
//1.
for(let i=num.length-1; i>=0; i--){

    const getData=num[i];
    newRev.push(getData);

    console.log(newRev);
}
//2.
console.log(newRev);
*/
/*
! 3. Add or remove elements:

//1.
let destination = ['Sain Martins Island','Paharpur','Kuakata','Sylhat','Bandarban'];
console.log(destination);

//2.
destination.push('Srimangal');
console.log(destination);

//3.
destination.unshift('Coxs Bazar');
destination.unshift('Mahastangarh');
console.log(destination);

//4.
destination.pop();
console.log(destination);

//5.
console.log(destination);
*/


//! 4. Write a JavaScript program to determine a student's grade based on their marks using a switch case statement.

let marks = 50;

switch(true){

   case marks>=90 && marks<=100:
     console.log('A')

   break;

   case marks>=80 && marks<90:
     console.log('B')

   break;

   case marks>=70 && marks<80 :
     console.log('C')

   break;

   case marks>=60 && marks<70 :
     console.log('D')

   break;
   
   case marks<60 :
     console.log('F')

   break;


   default:
    console.log('Invalid')
}




/*
let marks = +prompt();

switch(marks){

    case marks>=90 && marks<=100:
        document.write('A');
        break;

    case marks>=80 && marks<90:
        document.write('B');
      break;

    case marks>=70 && marks<80 :
        document.write('C');
      break;

    case marks>=60 && marks<70 :  
        document.write('D');
        break;
    case marks<60 :  
        document.write('F');
        break;

    default:
           document.write('Invalid')
}
*/

function calculate(num1, num2, operation) {
  if (operation === "add") {
      return num1 + num2;
  } 
  else if (operation === "subtract") {
      return num1 - num2;
  } 
  else if (operation === "multiply") {
      return num1 * num2;
  } 
  else if (operation === "divide") {
            if (num2 !== 0) {
             return num1 / num2;
            } 
            else {
               return "Error";
            }
  } 
  else {
      return "Error";
  }
}

console.log(calculate(20,11,"divide"));

