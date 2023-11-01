//Anonymous Function
const oddValue = function(array) {
    for (let i = 0; i < array.length; i++) {
       // if(array[i]%2!=0){
            console.log(array[i])
        }
        
    }

oddValue("1 2 3 4 5 6 7 8 9 10");

//Arrow Function
const oddValue1 = (array) => {
        for(i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}
oddValue1("1 2 3 4 5 6 7 8 9 10")

//IIFE Function
const oddValue3 = (function(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})("1 2 3 4 5");






