/*
!---------------swap veriable, swap without temp, destructing------------
let diya = 'Book';
let meem ='Chocolate';

//console.log(diya,meem);

let muksina = diya;

diya=meem;
meem=muksina;

console.log(diya,meem);
*/


/*

? Find longest word:
function findLongestWord(sentence) {
    let words = sentence.split(' '); 
    let longestWord = ' '; 
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }
    return longestWord;
}

let sentence = "we  are learning JavaScript enthusiastically!";
console.log(findLongestWord(sentence)); 
*/


/*
function longestWord (sentence){

    let words = sentence.split (' ');
    let longestWords = ' ';
    for (let wrd of words) {
        if(wrd.length > longestWords.length){
            longestWords=wrd;

        }
        
    }
    return longestWords;
}

let sentence = "My Name is Muksina Akter";
console.log(longestWord(sentence));

*/


/*
? Find longest number of 2:
let rupakAge = 40;
let sazidAge= 47;


if (rupakAge>sazidAge){
console.log(`${rupakAge} is large`);
}else {
    console.log(`${sazidAge} is large`);
}
*/


/*
? Find longest number of 3:
let simaAge = 35;
let jeriAge = 28;
 let sumayaAge = 22;
 if(simaAge>jeriAge && simaAge > sumayaAge){
    console.log('Sima is elder than others');
}else if (jeriAge>simaAge && jeriAge > sumayaAge){
    console.log('Jeri is elder than others');
}else{
    console.log('Sumaya is elder than others');
}

*/


/*
? Shortcut:

let simuAge= 45;
let sultanaMariaAge = 48;
let SalmaAge = 82;
function elder(num1, num2, num3){
if(num1>num2 && num1>num3){
    return `${num1} is elder`
}else if (num2>num1&& num2>num3){
    return `${num2} is elder than others`
}else{
    return `${num3} is most most most buri than others`
}
  }


console.log(elder(simuAge, sultanaMariaAge, SalmaAge));
*/
/*
let simuAge = 45;
let sultanaMariaAge = 48;
let salmaAge = 82;
function elder(num1, num2, num3) {
    let maxAge = Math.max(num1, num2, num3);
    return `The eldest person is ${maxAge} years old.`;
}
console.log(elder(simuAge, sultanaMariaAge, salmaAge));
*/


/*
let studentsAge = [20,25, 35, 40, 85, 45, 60,51];

function highestAge(age){
let murubbi = Math.max(...age);
return murubbi
}

console.log(highestAge(studentsAge));

*/






