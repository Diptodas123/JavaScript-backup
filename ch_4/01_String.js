//Strings are immutable i.e. can't be changed after creation
//after every method invocation the returned value is a new string but the original string remains the same

let n="Dipto";
let sentance=`Hi, my name is ${n}`     //template litetral
// console.log(sentance);

//string methods

//length property-->return the length of the str
console.log(`Length= `+n.length);

/*slicing methods are used to get the subset of a string

1.slice(startIndex,endIndex)  for e.g. if s=0,e=5 then it will slice ele form 0 to 4(n-1)+ it also allows negative indexing
2.substring(startIndex,endIndex)   similar to slice(), but argu value less than 0 treats as 0 i.e. doesn't support negative indexing 
3.substr(startIndex, length)    length=no. of chars to be included

*/
console.log(sentance.slice(0,6))    //slices from index[0] to index[5]
console.log(sentance.substring(0,6))    //returns same
console.log(sentance.substring(-40,6))  //treats values less than 0 as 0
console.log(sentance.substr(0,5));      // total len=5

//replace(oldWord,newWord)
console.log(n.replace("Di","Pi"));

//concat(str)   --->alternative of + operator which can also perform concatenation
console.log(n.concat(" "+"Das"));

//toUpperCase()
console.log(n.toUpperCase());

//toLowerCase()
console.log(n.toLowerCase());

//trim() --> returns after removing all the whitespaces from a string
n="  Dipto   ";
console.log(n.trim());  

//trimStart() --> returns after removing only whitespaces from the start of a string
console.log(n.trimStart());  

//trimEnd() --> returns after removing only whitespaces from the end of a string
console.log(n.trimEnd());  

n=String(5);
//padStart(totalLength,padString)   --> returns the string where length=totalLength, after adding the padstring at the beginning of the calling string
console.log(n.padStart(4,"0"));  //i.e. totalLength=4 & o/p: 0005

//padEnd(totalLength,padString)   --> returns the string where length=totalLength, after adding the padstring at the end of the calling string
console.log(n.padEnd(4,"0"));  //i.e. totalLength=4 & o/p: 5000

let text="Hi, there how are you? All good?";

//charAt(index) -->returns the char present at the passed index
console.log(text.charAt(4));

//charCodeAt(index) -->returns the unicode of the char present at the passed index
console.log(text.charCodeAt(4));    //o/p:116 as unicode value of t is 116, ASCII value ⊂ UNICODE

/*split(" ") --> converts a string to an array on the basis of a condition, in this example a white space
1.if the seperator is omitted, the returned array will contain the whole str at index 0
2.if the seperator is "", the returned array will be an array of single characters
*/
let str="The Heritage Academy";
console.log(str.split(" "));
console.log(str.split());   //e.g. of 1
console.log(str.split(""));   //e.g. of 2

/*indexOf(strToSearch,startIndex[optional])     --> searches the passed str from the beginning & returns the first occurrence in the calling str, returns -1 if the passed str is absent
  lastIndexOf(strToSearch,startIndex[optional])     --> searches the passed str from the end & returns the last occurrence in the calling str, returns -1 if the passed str is absent
*/
text="Hi there, how are you? Are you able to see over there?"
console.log(text.indexOf("there"));
console.log(text.indexOf("there",10));
console.log(text.lastIndexOf("there",10));  //starts searching from 10 and till the index 0(back-to-front)

//startsWith(str)   -->returns true if the calling str stars with the passed str
//endsWith(str)     -->returns true if the calling str stars with the passed str

//includes(str)     -->returns true if the the passed str is present in the calling str
