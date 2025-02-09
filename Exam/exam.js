/*

 1.Write a JavaScript program to sort an array of numbers in both ascending and descending order.
 --------------Answer to the question number-01----------
*/
/*
// ascending :
let numbers = [52, 1, 21,12, 5, 20, 3, 2,];
numbers.sort((a, b) => a - b); 

console.log(numbers);
*/
/*
//  descending:
let numbers = [52, 1, 21,12, 5, 20, 3, 2,];
numbers.sort((a, b) => b - a);

console.log(numbers);
*/


/*

2. You are given an array of numbers:
let num = [51, 2, 23, 4, 5, 62, 7, 8, 91];



--------------Answer to the question number-02----------
*/
//a)Reverse the array using a for loop and store the reversed numbers in a new array called newRev.

let num = [51, 2, 23, 4, 5, 62, 7, 8, 91];
const newRev=[];

for(let i=num.length-1; i>=0; i--){

    const getData=num[i];
    newRev.push(getData);

    console.log(newRev);
}
//b)Print the reversed array to the console.

console.log(newRev);





/*
3. Add or remove elements:
--------------Answer to the question number-03----------

*/
/*
//1.Declare an array of 6 Students Names

let students = ['Shimu','Mithe','Kakoly','Meem','Maria','Saima'];
console.log(students);

//2.Add a new student to your students array

students.push('Mokarrama');
console.log(students);

//3.Add two more to your array

students.unshift('Salma');
students.unshift('Habiba');
console.log(students);

//4.Remove the last students you have added
students.pop();
console.log(students);

//5.display the final array as output

console.log(students);
*/

/*
4. Write a JavaScript program to determine a student's grade based on their marks using a switch case statement.
Requirements:
Take a variable marks and assign a numeric value between 0 and 100.
Use a switch case statement to determine the grade based on the following criteria:
marks >= 90: Grade A+
marks >= 80: Grade A
marks >= 70: Grade A-
marks >= 60: Grade B
marks >= 50: Grade C
marks >= 40: Grade D
marks  < 33: Grade F
Print the grade to the console.



--------------Answer to the question number-04----------
*/
/*
let marks = 99;

switch(true){

case marks >=90 && marks<=100:
    console.log('A+');

    break;

case marks >=80 && marks<90:
    console.log('A');

    break;

case marks >=70 && marks<80:
    console.log('A-');

    break;

case marks >=60 && marks<50:
    console.log('B');

    break;

case marks >=50 && marks<40:
    console.log('C');

    break;
case marks >=40 && marks<33:
    console.log('D');

    break;
case marks<33:
    console.log('F');

    break;

 default:
  console.log('Invalid');

}
*/



/*
5.Write a JavaScript function that can perform addition, subtraction and division based on user input.    

--------------Answer to the question number-05----------
*/

/*
function calculate(num1,num2,operation){

  if(operation==="add"){
    return num1+num2;
  }
  
  else if (operation==="sub"){
    return num1-num2;
  }
  else if (operation==="div"){
        if(num1!==0){
            return num1/num2;
        }
        else{
            return"error";
        }
  }
  else{
    return"Error";
 }

}
*/
