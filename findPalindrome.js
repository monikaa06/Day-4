//Arrow Function
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

//Anonymous Function

const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome1 = function(el) {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome1 = function(arr) {
   return arr.filter(el => isPalindrome1(el));
};
console.log(findPalindrome1(arr1));

//IIFE Function

const isPalindrome2 = (function(el) {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
})['carecar', 1344, 12321, 'did', 'cannot'];
const findPalindrome2 = function(arr) {
   return arr.filter(el => isPalindrome2(el));
};
