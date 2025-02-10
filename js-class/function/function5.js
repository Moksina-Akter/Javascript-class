/*
function sum(){

    const num1 =100;
    const num2 =500;
    
    const result =num1+ num2;

    console.log(result);
}
sum();
*/

/*
const num1 =100;

function sum(){
     
    const num2 =500;
    const result =num1+ num2;

    console.log(result);
}
sum();

/*
const num1 =100;

function sum(){
     
    const num1 =120;
    const num2 =500;
    const result =num1+ num2;

    console.log(result);
}
sum();
*/

/*
function sum(A,B){

    const result = A+B;
    console.log(result);
}
sum(100,400);
*/
/*
!-----------------Return------------------------
function sum(A){

    const result = A*20;
    return result;
}
console.log(sum(10));
*/
/*
 ? --------shortcut----------
function sum (A){
    return A*20;

}
console.log(sum(10));
*/

/*
function calculation(num1, num2){

    const add = num1+num2;
    const sub = num1-num2;
    const mul = add * sub;
    const div = mul/2;
    const result =div;
    return result;
}

const result= calculation(12, 3)
console.log(result);
*/



// ! --------------------Conditional function ----------------------


function even(num){
    if(num%2===0){
        return 'Even Number';
    }
    else{
        return 'Odd Number'
    }
}
//console.log(even(43));
const result = even(50);
console.log(result);
    
function calculation(num1, num2){ 
    const add = num1 + num2; // 12 + 3 = 15 
    const sub = num1 - num2; // 12 - 3 = 9 
    const mul = add * sub; // 15 * 9 = 135
     const div = mul / 2; // 135 / 2 = 67.5 
    const result = div; //result = 67.5 return result; 
    }
    // const result = calculation(12, 3); 
    console.log(result); // Output: 67.5
    
    //Step 1: num1 = 12, num2 = 3
   // Step 2: add = num1 + num2 = 12 + 3 = 15
    //Step 3: sub = num1 - num2 = 12 - 3 = 9
    //Step 4: mul = add * sub = 15 * 9 = 135
    //Step 5: div = mul / 2 = 135 / 2 = 67.5
    //Step 6: ফাইনাল result = 67.5 যা return হয়েছে।
    



//!Problem Solve: 

// ? Write a JavaScript function that can perform addition, subtraction, multiplication, and division based on user input

// ? Solve:
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
        } else {
            return "Error: 0 দিয়ে ভাগ করা যায় না!";
        }
    } 
    else {
        return "Error: ভুল অপারেশন দিয়েছেন!";
    }
}


console.log(calculate(10, 5, "add"));       // 15
console.log(calculate(20, 8, "subtract"));  // 12
console.log(calculate(6, 7, "multiply"));   // 42
console.log(calculate(30, 5, "divide"));    // 6
console.log(calculate(10, 0, "divide"));    // "Error: 0 দিয়ে ভাগ করা যায় না!"
console.log(calculate(10, 2, "modulus"));   // "Error: ভুল অপারেশন দিয়েছেন!"













