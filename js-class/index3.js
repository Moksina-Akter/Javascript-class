

// ...Array . .
let developers = ['Maria', 'Meem', 'Kakoly', 'Muksina', 'Mymona', 'Taslima', 'Habiba', 'Diya', 'Priya', 'Hiya','Liya'];

console.log(developers.length);
console.log(developers.includes('Diya'));
console.log(developers.includes('diya'));
console.log(developers.indexOf('Priya'));
console.log(developers.indexOf('Liza'));
console.log(developers[7]);



let familyMember = ['Marina', 'Samia', 'Afsana', 'Afroza', 'Liza', 'Muksina', 'Enna', 'Sabbir', 'Sadip', 'Ruhi','Tuya'];

console.log(familyMember.length);
console.log(familyMember.includes('Enna'));
console.log(familyMember.includes('enna'));
console.log(familyMember.indexOf('Afsana'));
console.log(familyMember.indexOf('Mymona'));
console.log(familyMember[3]);

console.log(developers.concat(familyMember));


var seventh = familyMember[7];
console.log(seventh);


familyMember[6] = 'Mymona';
console.log(familyMember);



// push,unshift-similar & pop,shift-similar
familyMember.push('sabiha');
familyMember.push('mitu');
console.log(familyMember);
console.log(familyMember.length);

familyMember.pop();
familyMember.pop();
console.log(familyMember);
console.log(familyMember.length);

familyMember.shift();
console.log(familyMember);
console.log(familyMember.length);

familyMember.unshift('sumaiya');
console.log(familyMember);
console.log(familyMember.length);



let students = ['Maria', 'Meem', 'Kakoly', 'Muksina', 'Mymona', 'Taslima', 'Habiba', 'Diya', 'Priya', 'Hiya','Liya'];
let familyMember = ['Marina', 'Samia', 'Afsana', 'Afroza', 'Liza', 'Muksina', 'Enna', 'Sabbir', 'Sadip', 'Ruhi','Tuya'];
let number = 10;
let num = '[1010,2020,3030,4040,5050]'
let price = 5050;
let aluPrice = '50Tk';
let tomatoPrice = [];

console.log(Array.isArray(students));
console.log(Array.isArray(familyMember));
console.log(Array.isArray(number));
console.log(Array.isArray(num));
console.log(Array.isArray(price));
console.log(Array.isArray(aluPrice));
console.log(Array.isArray(tomatoPrice));    

console.log(students.concat(familyMember));


// ----join(jekono element)---
console.log(students.join());
console.log(students.join('  '));
console.log(students.join('+ '));


console.log(students.slice(2,4));

console.log(students.splice(2,6));
