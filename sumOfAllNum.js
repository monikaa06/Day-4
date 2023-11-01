//IIFE Function
const num = (function(arr){
    let sum = 0
    for(let i = 0 ; i<arr.length;i++){
        sum = sum + arr[i]
        
    }
    console.log(sum)

})([1,2,3,4,5])

//----------------------------------------------
//Anonymous Function
const num1 = function(arr){
    let sum = 0
    for(let i = 0 ; i<arr.length;i++){
        sum = sum + arr[i]
        
    }
    console.log(sum)

}
const val = [1,2,3,4,5]
num(val)

//Arrow Function
const num2 = (arr) => {
    let sum = 0
    for(let i = 0 ; i<arr.length;i++){
        sum = sum + arr[i]
        
    }
    console.log(sum)

}
const val1 = [1,2,3,4,5]
num2(val1)