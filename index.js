let arr=[3,5,12,45,10,-10,-101,2,-200,47,89];
let num=arr.sort((a,b)=> a-b);
// console.log(num);
let numEven=num.filter(el => el%2==0);
// console.log(numEven);
let numOdd=num.filter(el => el% 2!==0);
// console.log(numOdd);
let resultEven=numEven.reduce((sum,current) => sum+current ,0);
// console.log(resultEven);
let resultOdd=numOdd.reduce((sumOdd, el) => sumOdd+ el , 0);
// console.log(resultOdd);
if(resultEven>0 && resultOdd >0){
  console.log('valid');
} else{
  console.log('invalid');
}
