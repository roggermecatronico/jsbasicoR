
let arra =["Manzana","mango",["pera"]];
var r = solution(arra);

export function solution(arraySecreto) {
    if (typeof(arraySecreto[0]) == "string") {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
 }

 let arra1 =[1,"mango",["pera"]];
var r = solution(arra1);




