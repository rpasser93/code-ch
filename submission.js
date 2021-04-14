//1
const findSum = function(array) {
let summer = 0;
for(i=0; i < array.length; i++){
summer = summer + array[i];
}
return summer;
};


//2
const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};


//3
const isPalindrome = function(str) {
str = str.toLowerCase();
let counter = 0
for (let i = 0; i <= str.length-1-i; i++) {
  if(str
[i]===str
[str
.length-1-i]) {
    counter++; 
  } else break;
}
if (counter === Math.ceil(str.length/2)){
  return true
} else return false;
};


//4
const largestPair = function(array) {
let pairer=[];
for (i = 0; i < array.length-1; i++) {
 pairer[i] = array[i] * array[i+1];
}
pairer.sort();
pairer.reverse();
return pairer[0];
};


//5
const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};


//6
const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
