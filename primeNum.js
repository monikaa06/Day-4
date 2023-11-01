//Anonymous Function
var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

const isPrime = function(item) {
    var divided = item / 2;
      for (var i = 2; i <= divided; i++) {
       if ((item % i) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//Arrow Function

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

const isPrime1 = (item) => {
    var divided = item / 2;
      for (var i = 2; i <= divided; i++) {
       if ((item % i) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime1(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//IIFE Function

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

const isPrime2 = (function(item) {
    var divided = item / 2;
      for (var i = 2; i <= divided; i++) {
       if ((item % i) == 0) { // modulous
        return false;
       } 
     }
     return true;
})
for (var index = 0; index < a.length; index++) {
  if (isPrime2(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);