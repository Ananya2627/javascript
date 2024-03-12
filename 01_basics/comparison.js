// console.log("2">1)
// console.log("02">1)

// these type of conversions should be avoided
console.log(null==0) //false
console.log(null>0) //false
console.log(null>=0) //true
console.log(null>1)  //false 
/* because == and >= work differently and >= converts null to 0*/
// === for strict check-> checks datatype also
