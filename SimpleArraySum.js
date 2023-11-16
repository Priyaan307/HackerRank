function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0; i<ar.length; i++){
        sum += ar[i]
    }
return sum;
}
let ar =[1,2,3]
console.log(simpleArraySum(ar));