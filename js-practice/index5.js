
let students =['Meem','Muksina','Kakoly','Sweety','Taslima','Jhumu'];
const newStn=[];

for(let i=0; i<students.length; i++){

    const stn = students[i];
    newStn.unshift(stn);
    //newStn.push(stn);

    console.log(newStn);
}

console.log(newStn);



let numbers= [11,12,13,14,15,16,17,18,19,20];
const newNum=[];

for(let i=0; i<numbers.length; i++){

    const num=numbers[i];
    newNum.unshift(num);
    newNum.push(num);

    console.log(newNum);
}
console.log(newNum);
