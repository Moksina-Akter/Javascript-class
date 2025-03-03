/*
const students = ['Sima', 'Jeri', 'Kakoly', 'Simu', 'Jeri', 'Sumaya', 'Jeri', 'habiba', 'Kakoly']; 

function withoutDuplicate(releifReceiver){
let actualReceiver=[];
    for (const stn of releifReceiver) {
        if(actualReceiver.includes(stn)===false){
            actualReceiver.push(stn);

        }
        
    }
    return actualReceiver;
}
console.log(withoutDuplicate(students));
*/



/*
const number = [45,45,12,14,27,27,51,51,54,46];

function withoutDuplicate(arr){

    let newArray = [];
    let sum=0;
    for (const num of arr) {
        if(newArray.includes(num)===false){
           newArray.push(num);
        } 
    }
    //return newArray;
    for (const element of newArray) {
        sum= sum+element;
    }
  //console.log(sum); 
  return sum/newArray.length
  
}

console.log(withoutDuplicate(number));
*/

/*
const students = ['Sima', 'Jeri', 'Kakoly', 'Simu', 'Jeri', 'Sumaya', 'Jeri', 'habiba', 'Kakoly'];  

function noDupli(releifReceiver){
    //console.log(arr);
const actualReceiver= [... new Set(releifReceiver)];
return actualReceiver;
}
console.log(noDupli(students));
*/




//!---------------swap veriable, swap without temp, destructing------------
let diya = 'Book';
let meem ='Chocolate';

//console.log(diya,meem);

let muksina = diya;

diya=meem;
meem=muksina;

console.log(diya,meem);





