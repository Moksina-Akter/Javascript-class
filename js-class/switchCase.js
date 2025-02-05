// ---------switch,case statement------

let num = 50;

switch(true){

   case num>=80 && num<=100:
     console.log('A+')

   break;

   case num>=70 && num<80:
     console.log('A')

   break;

   case num>=60 && num<70 :
     console.log('A-')

   break;

   case num>=50 && num<60 :
     console.log('B')

   break;

   case num>=40 && num<50 :
     console.log('C')

   break;
   
   default:
    console.log('F')
}



// --------for loop--------

 for(let i= 0; i<=5; i+=5){
     console.log(i)
 }



for(let i= 0; i<=5; i=i+1){
     console.log(i)
}


// ---shortcut---
for(i=0; i<=5; i++){
      console.log(i)
}



/*
let sum=0;
for(i=0; i<=20; i++){
    sum=sum+i;
}
console.log(sum);                                  



*/
