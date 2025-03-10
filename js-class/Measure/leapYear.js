/* 
! Check Whether a Year is a Leap Year or Not 

function leapYear (year){
    if((year%4===0 && year%100!==0) || (year%400===0)){
        return`${year} is leap year`
    }
    else{
        return`${year} is not leap year`
    }

}
console.log(leapYear(2025));
console.log(leapYear(2024));
console.log(leapYear(2000));
*/



/*
? 1। Math.abs() - ধনাত্মক মান

function math(num){
  const result = Math.abs(num)
  return result;
}

console.log(math(-50));
*/

/*
? 2। Math.sqrt() - বর্গমূল (Square Root)

function math(num){
  const result = Math.sqrt(num)
  return result;
}

console.log(math(25));
*/
/*
? 3। Math.pow() - ঘাত (Power)

function math(num,num1){
  const result = Math.pow(num,num1)
  return result;
}

console.log(math(2,5));
*/

/*
? 4। Math.random() - এলোমেলো   সংখ্যা

function math(num){
  const result = Math.random(num)
  return result;
}

console.log(math(2));
*/

/*
?5। Math.round() - গোলাকার সংখ্যা


function math(num){
  const result = Math.round(num)
  return result;
}

console.log(math(2.7));
*/
/*
?6 Math.round() - গোলাকার সংখ্যা


function math(num){
  const result = Math.round(num)
  return result;
}

console.log(math(2.7));
*/

//? 6। Math.max() এবং Math.min() - বড় বা ছোট সংখ্যা বের করা
/*
function math(num,num1,num2,num3,num4,num5,num6){
      const result = Math.min(num,num1,num2,num3,num4,num5,num6)
      //const result = Math.max(num,num1,num2,num3,num4,num5,num6)
      return result;
}

console.log(math(2,8,9,4,10,8,12));
*/
/*
?7। Math.ceil() এবং Math.floor() - গোলাকার সংখ্যা (Ceil, Floor)

function math(num){
  const result = Math.ceil(num)
  return result;
}

console.log(math(2.7));


function math(num){
  const result = Math.floor(num)
  return result;
}

console.log(math(2.7));
*/
//এখন সহজভাবে দেখে নেওয়া যাক:
// সংখ্যা
let num = -25;
// ধনাত্মক মান
console.log(Math.abs(num)); // 25
// বর্গমূল
console.log(Math.sqrt(16)); // 4
// ঘাত
console.log(Math.pow(2, 4)); // 16
//র‍্যান্ডম সংখ্যা
console.log(Math.random()); // 0 থেকে 1 এর মধ্যে কোনো random সংখ্যা
// গোলাকার সংখ্যা
console.log(Math.round(3.7)); // 4
// বড় বা ছোট সংখ্যা
console.log(Math.max(5, 15, 25)); // 25
console.log(Math.min(5, 15, 25)); // 5






const numbers = [15, 16,17,18,19,20,21,22,23,24,25]
function oddAvg(arr){
  let sumOfOdd=0;
  let oddArray =[]
for (const element of arr) {
  if(element%2!==0){
    oddArray.push(element)
  }
}
for (const num of oddArray) {
  sumOfOdd= sumOfOdd + num;
}
const avgofOddArray = sumOfOdd/ oddArray.length
return avgofOddArray;
}
console.log( oddAvg(numbers));














