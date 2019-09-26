

export const value = color => { 
  let color1 = color[0];
  let color2 = color[1];
  
  return (MyArr.indexOf(color1) * 10) + MyArr.indexOf(color2);
   
};


export const MyArr = 
["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
 
