let a="Hello"
console.log(typeof a);
console.log(typeof null); //gives object
console.log(typeof undefined); //gives undefined
/*undefined is a datatype while null is an object*/
let num="03"
let strnum=Number(num)
console.log(strnum)
console.log(typeof strnum);
let newnum="33abc"
let str=Number(newnum)
console.log(str)
console.log(typeof str);
/* "33"=>33
"33abc"=>NaN
null=>0
undefined=>NaN
*/
/*string to number 
"33"=>33
*/
console.log(1+"2")  //12
console.log("1"+2+2); //122
console.log("1"+2) //12
console.log(1+2+"2"); //32
console.log(3+4*5%3); 
console.log(+true);
console.log(+"");