//  console.log(2>1);
//  console.log(2 >= 1);
//  console.log(2<1);
//  console.log(2 ==1);
//  console.log(2 != 1);


// console.log("2" > 1);  //true
// console.log("02">1);  //true 


// console.log(null>0);  //false

// console.log(null==0); //  false

// console.log(null>=0);  //true


// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);


// THE  REASON IS THAT AN EQUALITY CHECK == AND COMPARISON OPERATORS > < => <= WORKS DIFFERENTLY 
//Comparison convert null to  an number , treating it as zero .  
//thats why (3) null >= 0 is true whille (1) null>0 is false



//===  strict check


console.log("2"===2);  //diff datatype
