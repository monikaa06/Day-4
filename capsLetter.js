//IIFE Function
const name = (function(array) {
    let str = array.toLowerCase().split(" ")
  console.log(str)
  for(let i =0;i<str.length;i++){
      str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
      //str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1)
      
  }
  console.log(str)
})("leaRninG js iS eaSy")

//Anonymous Function
const name1 = function(array) {
  let str = array.toLowerCase().split(" ")
console.log(str)
for(let i =0;i<str.length;i++){
    str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
    //str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1)
    
}
console.log(str)
}

name1("leaRninG js iS eaSy")

//Arrow Function
const name2 = (array) => {
  let str = array.toLowerCase().split(" ")
console.log(str)
for(let i =0;i<str.length;i++){
    str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
    //str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1)
    
}
console.log(str)
}

name2("leaRninG js iS eaSy")
