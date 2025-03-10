

/*

? Find longest word:

let sentence = "we  are learning JavaScript enthusiastically!";

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
console.log(findLongestWord(sentence)); 
*/


/*
let sentence = "My Name is Muksina Akter";

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

console.log(longestWord(sentence));

*/



/*
let golpo = 'amar sonar bangla ami tumay valobasi';
let newGolpo= golpo.split(' ')
function biggestWord(story) {

    let bigWord = ''
    for (const word of story) {
        if(word.length>bigWord.length){
            bigWord=word
        }
    }
    return bigWord;
}
console.log(biggestWord(newGolpo));
*/


/*
? Smallest word:

let sentence = "we are learning JavaScript enthusiastically!";
function smallWord(stng){
let newSentence = stng.split(' ')
let smallWord= newSentence[0]
for (const element of newSentence) {
    if(smallWord.length>element.length){
        smallWord= element
    }
}
return smallWord;
}
console.log(smallWord(sentence));
*/




/*
let simaAge =35;
let jeriAge = 38;
let sumayaAge=32;

function elder(){

    if(simaAge> jeriAge && simaAge> sumayaAge){
        return`${simaAge} is elder than others`
        
    }
    else if(jeriAge> simaAge && jeriAge>sumayaAge){
        return`${jeriAge} is elder than others`
        
    }
    else{
        return`${sumayaAge} is elder than others`
        
    }
}

console.log(elder(simaAge,jeriAge,sumayaAge));

*/


