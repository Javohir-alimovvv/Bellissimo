// 1#

// function reverseWords(str) {
//     console.log(str.split(" ").reverse().join(" "))
// }

// reverseWords("This is an example!")



// 2#
// function reverseWords(str) {

//     let words = str.split(' ');
//     let result = [];
  
//     for (let i = 0; i < words.length; i++) {
//       let reversedWord = '';

//       for (let j = words[i].length - 1; j >= 0; j--) {
//         reversedWord += words[i][j];
//       }
  
//         result.push(reversedWord);
//     }
//     return result.join(' ');
//   }
  
//   console.log(reverseWords("This is an example!")); 
  
  
// 3#

// const reverseSeq = n => {
//     const result = [];
    
//     for (let i = n; i >= 1; i--) {
//       result.push(i);
//     }
  
//     return result;
//   };
  
//   console.log(reverseSeq(5));


// 4#

// function reverseList(list) {
//     const reversed = [];
    
//     for (let i = list.length - 1; i >= 0; i--) {
//       reversed.push(list[i]);
//     }
  
//     return reversed;
//   }
  
//   console.log(reverseList([1, 2, 3, 4]));



// 5#

// function reverse(string) {
    
//     return string.split(' ').filter(word => word !== '').reverse().join(' ');          
//   }
  
//   console.log(reverse("Hello World"));



// 6#

// function digitize(n) {
//     return String(n).split('').map(Number).reverse();
//   }

//   console.log(digitize(35231));



// 7#

// function reverseWords(str) {

//     const words = str.split(' ');
//     const reversedWords = [];
  

//     for (let i = words.length - 1; i >= 0; i--) {
//       reversedWords.push(words[i]);
//     }
  
//     return reversedWords.join(' ');
//   }
  
//   console.log(reverseWords("The greatest victory is that which requires no battle")); 

// 8#

// const items = [];
// items.push({a: "b", c: "d"});
// console.log(items);  

  

  
  
  
