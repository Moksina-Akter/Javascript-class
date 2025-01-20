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
