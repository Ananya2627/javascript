/* primitive--ye call by value hote hai
7 types-> string, number,boolean,null,undefined,symbol,Bigint
Reference type(non primitive)...memory reference given

array,objects,functions
JavaScript is a dynamically typed language

*/
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid); //false
console.log(id);
console.log(anotherid);
const bignum=5667168n; //n for bigint, typeof use karke undefined aata hai
const arr=["heello","ananya"]
const myobj={
    name:"Ananya",
    age:"18",
}
const myfunction=function(){
    console.log("Hello world");
}
console.log(arr);
console.log(myobj);

//stack and heap memory
// stack->gives a copy ::: heap->gives a refrence
