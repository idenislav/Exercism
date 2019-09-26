export const score = (input) => {

  let word = input;
  word = word.toUpperCase();

 var sum = 0;
  
 var object1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
 var object2 = ["D", "G"];
 var object3 = ["B", "C", "M", "P"];
 var object4 = ["F", "H", "V", "W", "Y"];
 var object5 = ["K"];
 var object6 = ["J", "X"];
 var object7 = ["Q", "Z"];

 for (let i = 0; i < word.length; i++) {
   switch(true) {
     case (object1.includes(word[i])):
        sum+=1;
        break;

     case (object2.includes(word[i])):
       sum+=2;
       break;

     case (object3.includes(word[i])):
       sum+=3
       break;

     case (object4.includes(word[i])):
         sum+=4;
         break;

     case (object5.includes(word[i])):
        sum+=5;
          break;

     case (object6.includes(word[i])):
     sum+=8;
     break;

     case (object7.includes(word[i])):
       sum+=10;
       break;
   }
   
 }
 return sum;

}
