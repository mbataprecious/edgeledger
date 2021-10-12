const highestValue=(num1,num2,num3)=>{
    let signArray=['*', '+']
 debugger;
let array1=signArray.map((element,i) => {
return Number(eval(`(${num1} ${signArray[i]} ${num2})${signArray[((i+1)%2)]}${num3}`))
});
          
let array2=signArray.map((element,i) => {
return Number(eval(`${num1}${signArray[i]}(${num2} ${signArray[((i+1)%2)]} ${num3})`))
});

let array3=signArray.map((element,i) => {
return Number(eval(`${num1}${signArray[i]}(${num2} ${signArray[i]} ${num3})`))
});


function highvalue(array){
let highest=0;
array.forEach((num)=>{
if(highest< num){
    highest= num;
}});
return highest;
}

let maxHighest=Math.max(highvalue(array1),highvalue(array2),highvalue(array3));
return  maxHighest;
}





function expressionMatter(a, b, c) {
    //To check for number validity
      if( a,b,c>=0 && a,b,c<=10 ){
      //Created array for the signs
      let signArray=['*', '+']
  
      //Distinguishing conditions with different bracket placement
      //into arrays
  let array1=signArray.map((element,i) => {
  return Number(eval(`(${a} ${signArray[i]} ${b})${signArray[((i+1)%2)]}${c}`))
  });
            
  let array2=signArray.map((element,i) => {
  return Number(eval(`${a}${signArray[i]}(${b} ${signArray[((i+1)%2)]} ${c})`))
  });
  
  let array3=signArray.map((element,i) => {
  return Number(eval(`${a}${signArray[i]}(${b} ${signArray[i]} ${c})`))
  });
  
  //check for the highest value in every array 
  function highvalue(array){
  let highest=0;
  array.forEach((num)=>{
  if(highest< num){
      highest= num;
  }});
  return highest;
  }
  
  let maxHighest=Math.max(highvalue(array1),highvalue(array2),highvalue(array3));
  return  maxHighest;
  }else{
      return `Invalid inputs`;
  }
  
  }