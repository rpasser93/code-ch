//1
const findSum = function(array) {
let summer = 0;
for(let i = 0; i < array.length; i++){
summer = summer + array[i];
}
return summer;
};


//2
const findFrequency = function(array) {
  let objMain = {most:'', least:''};
  let objSub = {};
  let counter = 0;
  let stringTracker = [];
  let mostVar;
  let leastVar;
  let summer1 = 0;
  let summer2 = 0;
 array.sort();
 while (array.length > 0){
if (array[0] === array[0+counter]) {
counter++;
} else {
objSub[array[0]] = counter;
stringTracker.push(array[0]);
array.splice(0,counter);
counter = 0;
};
};
for (let i = 0; i < stringTracker.length; i++) {
  for (let j = 0; j < stringTracker.length; j++) {
    if (objSub[stringTracker[i]] >= objSub[stringTracker[j]]) {summer1++};
  }
  if (summer1 === stringTracker.length) {mostVar = stringTracker[i]; summer1 = 0;}
  else (summer1 = 0);
}
for (let k = 0; k < stringTracker.length; k++) {
  for (let l = 0; l < stringTracker.length; l++) {
    if (objSub[stringTracker[k]] <= objSub[stringTracker[l]]) {summer2++};
  }
  if (summer2 === stringTracker.length) {leastVar = stringTracker[k]; summer2 = 0;}
  else (summer2 = 0);
}
objMain.most = mostVar;
objMain.least = leastVar;
return objMain;
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
for (let i = 0; i < array.length-1; i++) {
 pairer[i] = array[i] * array[i+1];
}
pairer.sort();
pairer.reverse();
return pairer[0];
};


//5
const removeParenth = function(str) {
arrayForStr = str.split('');
let a = arrayForStr.indexOf('(');
let b = 1;
let i = arrayForStr[a];
while(i != ')') {
  i = arrayForStr[a+b];
  b++;
}
arrayForStr.splice(a,b);
return arrayForStr.join('');
};


//6
const scoreScrabble = function(str) {
let scoreRef = {
  'a':1, 'e':1, 'i': 1, 'o':1, 'u':1, 'l':1, 'n':1, 'r':1, 's':1, 't':1,
  'd':2, 'g':2,
  'b':3, 'c':3, 'm':3, 'p':3,
  'f':4, 'h':4, 'v':4, 'w':4, 'y':4,
  'k':5,
  'j':8, 'x':8,
  'q':10, 'z':10
};
let arrFromString = str.split('');
let summer = 0;
for(let itt = 0; itt < arrFromString.length; itt++){
  summer = summer + scoreRef[arrFromString[itt]];
}
return summer;
};
