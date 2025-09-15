// EASY

// 1:write a function to calculate the hypotenuse of a right triangle.
// const hypotenuse = (a,b) => {
//  let hyp = 0;
//  res = (a**2) + (b**2)
//  for(let i = 1; i <= res; i++){
//     if(i * i === res) {
//        i = hyp
//     }
//  }
//  return hyp;
// };





// 2:write a function to calculate the factorial of number for example the factorial of 3 is 3 * 2 *1 = 6
// طريقة الاولى
//    const calculateFactorial = (num) => {
   // if(num < 0) {
   //    return "undefind";
   // }
//    let res = 1;
//    for(let i = 1; i <= num; i++) {
//       res = res *i
//    }
//    return res;
//  }
// الطريقة الثانية
// const calculateFactorial = (num) => {
//  let res = 1;
//  for(let i = 5; i > 0; i--) {
//    res = res * i
//     console.log(res);
//  }
// }





// 3:write a function to calculate a power of a number
// const calculatePower = (base,power) => {
//    let base = 0;
//    let power = 0;
//    let res = 1;
//    for(let i = 0; i <= power; i++ ) {
//       res = res * base
//    }
// }





// 4:rounding off a number means adjusting it to the nearest whole number or specified decimal place for simplicity.
// const roundoff = (num,ndigits) => {
//    let fixed = num.toFixed(ndigits);
//    let converted = Number(fixed);
//    return converted;
// }





// 5:write a function to convert a string to title case.
// const convertToTitleCase = (str) => {
//    let res = ""
//    let capitalizeNext = true;
//    for(let i = 0; i < str.length; i++){
//       let char = str[i];

//       if(char == " "){
//       capitalizeNext = true
//       }
//       else if {
//          if(capitalizeNext){
//             res = res + char.toUpperCase()
//             capitalizeNext = false
//          } 
//       }
//        else {
//             res += char.toLowerCase()
//        }
//    }
// }






// 6:write a function to remove special charcter from a string
// const removeSpecialCharacters = (str) => {
//    let res = "";

//    for(let i = 0; i < str.length; i++){
//       let char = str[i];

//       if(
//          (char <= "a" && char >= "z") ||
//          (char <= "A" && char >= "Z") ||
//          (char <= "0" && char >= "9") ||
//          char === "  "
//       ){
//          res += char;
//       }
//    }
// }
// console.log(removeSpecialCharacters("Hello@ World! 123 #$"))





// 7: return the sum of squers of first n natural number
// const sumOfSquares = (n) => {
//    let res = 0;
//    let squers = 1;
//    for(let i = 1; i <= n ; i++){
//      squers = i * i 
//      res += squers
//    }
// }






// MEDIUM

// 8: write a function to repeat vowels in a string
// const repeatVowels = (str) => {
//    let vowels = "aouieAOUIE";
//    let newStr = "";
   
//    for (let i = 0; i < str.length; i++) {
//       let char = str[i];

//       if(char === 'a' || char === 'o' || char === 'u' || char === 'i' || char === 'e' ||
//         char === 'A' || char === 'O' || char === 'U' || char === 'I' || char === 'E') {
//             newStr += char + char;
//       }
//          else {
//             newStr += char;
//          }
//    }
//    return newStr;
// }
// console.log(repeatVowels("java"));








// 9:write a function to find the second largest number in an array
// const numbers = [4, 10, 50];

// const findSecondLargest = (arr) => {
// const orderNumbers =numbers.sort((a,b) => a - b);
//   return orderNumbers[1];
// }

// console.log(numbers)