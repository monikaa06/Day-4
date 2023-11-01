//Anonymous Function
let arr = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]; 
  
const removeDuplicates = function(arr) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(arr));

//Arrow Function
let arr1 = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]; 
  
const removeDuplicates1 = (arr) => { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates1(arr1));

//IIFE Function

(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])


