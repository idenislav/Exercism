

export const hey = (input) => {
  

  let str = input;
  
  str = input.trim();

  if (str === '') {
   return "Fine. Be that way!"
  }
  
  const reg1 = /[a-z]/ig;

  if ( (str.charAt(str.length-1) === '?') && (str.toUpperCase() === str) 
  && (reg1.test(str)) )  {
        return "Calm down, I know what I\'m doing!";
    }

  if (str.charAt(str.length-1) === '?') {
      return "Sure."
    }
     
  const regex = /[^\W\d_]+/g;

  if (regex.test(str) && str === str.toUpperCase()) {
  return 'Whoa, chill out!';
      }

  return "Whatever."
      
  }