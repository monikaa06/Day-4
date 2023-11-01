//Anonymous Function
const nums = [1,2,3,4,5,6,7];
const k = 3;

const arrayRotation = function(arr, numberOfShifts){
for(let i=0;i<numberOfShifts;i++){
arr.unshift(arr.pop());
console.log(`step ${i+1}:`, arr);
}
}
console.log("final output:", arrayRotation(nums, k));

//Arrow Function
const nums1 = [1,2,3,4,5,6,7];
const k1 = 3;

const arrayRotation1 = (arr, numberOfShifts) => {
for(let i=0;i<numberOfShifts;i++){
arr.unshift(arr.pop());
console.log(`step ${i+1}:`, arr);
}
}
console.log("final output:", arrayRotation1(nums1, k1));

//IIFE Function
const arrayRotation2 = (function(arr, numberOfShifts){
for(let i=0;i<numberOfShifts;i++){
arr.unshift(arr.pop());
console.log(`step ${i+1}:`, arr);
}
})([1,2,3,4,5,6,7], 3)
