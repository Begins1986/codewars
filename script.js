// Drying Potatoes
function potatoes(p0, w0, p1) {
  return Math.floor((w0 * (100 - p0)) / (100 - p1));
}

//  Breaking chocolate problem
function breakChocolate(n, m) {
  if (m <= 0 || n <= 0) {
    return 0;
  } else {
    return n * m - 1;
  }
}

//   Drink about
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old >= 14 && old < 18) {
    return "drink coke";
  } else if (old >= 18 && old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

// Parse nice int from char problem
function getAge(inputString) {
  return parseInt(inputString[0]);
}

// Reversed Message
function reverseMessage(str) {
  str = str.split(` `).map((v) => v.split("").reverse().join``).join` `;
  str = str
    .split(` `)
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .reverse().join` `;
  return str;
}

// Narcissistic Numbers
function isNarcissistic(n) {
  return (
    n ===
    +n
      .toString()
      .split("")
      .reduce((s, v, i, arr) => s + Math.pow(v, arr.length), 0)
  );
}

// Boiled Eggs
function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}

// Count the divisors of a number
function getDivisorsCnt(n) {
  let i,
    sum = 0;
  for (i = 0; i <= n; i++) {
    if (n % i == 0) {
      sum++;
    }
  }
  return sum;
}

// I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 == 1) {
    return "I love you";
  } else if (nbPetals % 6 == 2) {
    return "a little";
  } else if (nbPetals % 6 == 3) {
    return "a lot";
  } else if (nbPetals % 6 == 4) {
    return "passionately";
  } else if (nbPetals % 6 == 5) {
    return "madly";
  } else if (nbPetals % 6 == 0) {
    return "not at all";
  }
}

// Is this a triangle?
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

// Correct the mistakes of the character recognition software
function correct(string) {
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}

// Reverse a Number
function reverseNumber(n) {
  if (n >= 0) {
    return +Math.abs(n).toString().split("").reverse().join("");
  } else {
    return +Math.abs(n).toString().split("").reverse().join("") * -1;
  }
}

// Spinning Rings
function spinningRings(innerMax, outerMax) {
  for (
    var i = 1;
    innerMax - ((i - 1) % (innerMax + 1)) !== i % (outerMax + 1);
    i++
  ) {}
  return i;
}

// String repeat
function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str = str + s;
  }
  return str;
}

// Return Negativeg
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else return num * -1;
}

//Student's Final Grade
function finalGrade(exam, projects) {
  console.log(exam, projects);
  if (projects > 10 || exam > 90) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// Vowel remover
function shortcut(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] != "a" &&
      str[i] != "e" &&
      str[i] != "i" &&
      str[i] != "o" &&
      str[i] != "u"
    ) {
      newString += str[i];
    }
  }
  return newString;
}

// Calculate BMI
function bmi(weight, height) {
  let bmi = weight / (height * height);
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25.0:
      return "Normal";
    case bmi <= 30.0:
      return "Overweight";
    case bmi > 30:
      return "Obese";
  }
}

//  Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// Is he gonna survive?
function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}

// Find the Remainder
function remainder(a, b) {
  return a > b ? a % b : b % a;
}

// Convert a Boolean to a String
function booleanToString(b) {
  return String(b);
}

//  Abbreviate a Two Word Name
function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .map((el) => el.charAt(0))
    .join(".");
}

// Two Oldest Ages
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else if (current == "red") {
    return "green";
  }
}

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove(string) {
  let arr = string.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] == "!") {
      arr.pop();
    } else {
      break;
    }
  }
  console.log(arr);
  return arr.join("");
}

// Grasshopper - Check for factor
function checkForFactor(base, factor) {
  return base % factor == 0 ? true : false;
}

// Thinkful - Number Drills: Congo warehouses
function boxCapacity(length, width, height) {
  return (
    Math.trunc(length / (16 / 12)) *
    Math.trunc(width / (16 / 12)) *
    Math.trunc(height / (16 / 12))
  ); //code here
}

// Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol) {
  return Math.trunc(hol / (normPrice * (discount / 100)));
}

// Switch it Up!
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Unknown number";
  }
}

// Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// JavaScript Array Filter
function getEvenNumbers(numbersArray) {
  let result = numbersArray.filter((number) => number % 2 == 0);
  return result;
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  return arr[0] + arr[1];
}

// Sum of Minimums!
function sumOfMinimums(arr) {
  return arr.map((v) => Math.min(...v)).reduce((a, b) => a + b, 0);
}

// Find the stray number
function stray(numbers) {
  const arr = numbers.sort();
  if (arr[0] == arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}

// Character Counter
function validateWord(s){
  var counts = {};
  for(var c of s.toLowerCase()){
    if(counts[c] === undefined){counts[c] = 0;}
    counts[c]++;
  }
  return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
}

// The Barksdale Code
function decode(string) {
  const obj={1:9,
             2:8,
             3:7,
             4:6,
             5:0,
             6:4,
             7:3,
             8:2,
             9:1,
             0:5}
  return string.split('').map(a=>a=obj[a]).join('')
 }


//  Area or Perimeter
 const areaOrPerimeter = function(l , w) {
  return l==w?l*w:(l+w)*2
};


// Vowel Count
function getCount(str) {
  let arr = str.split('');
  const result = arr.filter(el=>el=='a' || el=='e' || el=='i' || el=='o' || el=='u'); 
  return result.length;
}

// last digits of a number
function lastDigit(n, d) {
  if(d<=0){
       return []
    }  else{
       return (""+n).split("").map(Number).slice(-d)
    }
  }


  // Slope of a Line 
  function getSlope(p1, p2) {
    console.log(p1, p2)
   if(p2[0]==p1[0]&&p2[1]==p1[1]||p2[0]==p1[0]){
      return null
    } else {
      return (p2[1] - p1[1]) / (p2[0] - p1[0])
    }
  }

  // Sum The Strings
  function sumStr(a,b) {
    return String(Number(a)+Number(b))
  }

//Is a palindrom
  const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

  // Count of positives / sum of negatives
  function countPositivesSumNegatives(input) {
    if(input == null||input.length<1 ){
      return []
    } else {
      let num = input.filter(t=>t>0).length
      console.log(num)
      let summ = input.filter(t=>t<=0).reduce(function(sum, elem) {
    return sum + elem;
  }, 0);
      console.log(summ)
      return [num, summ]
    }
  }


  // Printer Errors
  function printerError(s) {
    return `${s.replace(/[a-m]/gi, "").length}/${s.length}`
}


// V A P O R C O D E
function vaporcode(string) {
  console.log(string.split(' ').join('').toUpperCase().split('').join('  '))
  return string.split(' ').join('').toUpperCase().split('').join('  ') 
}



// All Star Code Challenge #22
function toTime(seconds) {
  let hour = Math.trunc(seconds/3600)
  let minute = Math.trunc((seconds-hour*3600)/60)
    return `${hour} hour(s) and ${minute} minute(s)`
  }

// USD => CNY
function usdcny(usd) {
  return `${(usd*6.75).toFixed(2)} Chinese Yuan` 
}



// Sum of all arguments
function sum(...arr) {
  return arr.reduce((sum,arg)=>sum+arg,0)
 }


//  By 3, or not by 3? That is the question . . .
 function divisibleByThree(str){
  return str.split('').reduce((sum,num)=>sum+num*1,0)%3===0
}


// Pillars
function pillars(num, dist, width) {
  if(num==1){
    return 0
  }
  return width*(num-2)+dist*(num-1)*100
}

// Nice Array
function isNice(arr){
  if(arr.length===0) return false;
  return arr.every(v=>arr.includes(v+1)||arr.includes(v-1));
}


// List Filtering
function filter_list(l) {
  return l.filter(el => typeof el == "number")
 }

 
//  Filter Long Words
 function filterLongWords(sentence, n) {
  let arr = sentence.split(' ')
  return arr.filter(el => el.length>n)
 }



// Dot Calculator
function dotCalculator (equation) {
  const arr = equation.split(' ')
  switch (arr[1]) {
    case '+':{
    return '.'.repeat(arr[0].length + arr[2].length)
    }
    case '-':{
    return ".".repeat(arr[0].length - arr[2].length)
    }
    case '*':{
    return ".".repeat(arr[0].length * arr[2].length)
    }
    case '//':{
    return ".".repeat(arr[0].length / arr[2].length)}
  }
}


// Case Swapping
function swap(str){
  return str.split('')
                     .map(el=>{if(el.toUpperCase()==el) return el.toLowerCase();
                               if(el.toLowerCase()==el) return el.toUpperCase();})
                               .join('')
 }


//Two to one
 function longest(s1, s2) {
  return (s1+s2).split('').sort().filter((item, index) => ((s1+s2).split('').sort().indexOf(item)===index)).join('')
}


//Find the middle element
function gimme (triplet) {
  return [...triplet].indexOf(triplet.sort((a,b)=>a-b)[1])
}

// Categorize New Member
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// Bin to Decimal
function binToDec(bin){
  return parseInt(bin, 2)
}

// Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears==1){
    return [humanYears, 15, 15]
  } else if (humanYears==2){
    return [humanYears, 15+9, 15+9]
  } else if (humanYears>2){
    return [humanYears, 15+9+(humanYears-2)*4, 15+9+(humanYears-2)*5]
  }
}


// Find the vowels
function vowelIndices(word){
  let arr=[]
   let a=word.split('');
   for (let i=0;i<word.length;i++){
   if (/[aeuoiy]/gi.test(a[i])) {arr.push(i+1)}
   }
   return arr
 }


//  Don't give me five!
 function dontGiveMeFive(start, end) {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++
    }
  }
  return count
}

// Define a card suit
function defineSuit(card) {
  if (card.includes('♣')) return 'clubs'; if (card.includes('♠')) return 'spades';
  if (card.includes('♥')) return 'hearts'; if (card.includes('♦')) return 'diamonds';
}


// What is between?
function between(a, b) {
  let arr = []
  for (i=a; i<=b; i++){
   arr.push(i)
    console.log(i)
  }
  return arr
}


// Going to the cinema
function movie(card, ticket, perc) {
  let costA = n = 0,
         costB = card;
     while (Math.ceil(costB) >= costA) {
         costA += ticket;
         costB += ticket * Math.pow(perc,++n);
     }
     return n;
 };


//  Find all pairs
 function duplicates(array){
array=array.slice().sort();
  let count = 0
  for (let i=0; i<array.length;i++){
      if (array[i]===array[i+1]){
        count++
        array[i]=''
        array[i+1]=''
      }
    }
  return count
}


// Sort Numbers
function solution(nums){
  if(nums==null){
    return []
  } else{
    return nums.sort(function(a, b) {
  return a - b;
})
  }
}

// Consecutive items
function consecutive(arr, a, b) {
  if (arr.indexOf(a)-arr.indexOf(b)==1||arr.indexOf(b)-arr.indexOf(a)==1){
    return true
  } else return false
}



// Sum of differences in array
function sumOfDifferences(arr) {
  if (arr.length<=1){
    return 0
  } else {
    let arr1 = arr.sort(function(a, b) {
  return a - b;
}).reverse();
    return arr1[0]-arr1[arr.length-1]
  }
}


// 101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number){
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  if (number <= 10) {
    return dogs[0]
  } else if (number <= 50) {
    return dogs[1]
  } else if (number === 101) {
    return dogs[3]
  } else {
    return dogs[2] 
  }
}


// Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}


// FIXME: Replace all dots
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}


// Double Char
function doubleChar(str) {
  return str.split('').map(el=>el+el).join('')
}


// Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}


// Array.diff
function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}


// Welcome to the City
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ').
  map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};

// 8 towers
function towerCombination(n){
  return n === 1 ? 1 : n * towerCombination(n - 1);
}


// Average Scores
function average(scores) {
  return Math.round(scores.reduce((first,next)=>(first+next),0)/scores.length)
}



// Return the closest number multiple of 10
const closestMultiple10 = num => {
  return Math.round(num / 10) * 10;
};


// Sort and Star
function twoSort(s) {
  return s.sort()[0].split('').join('***');
  }


// Build a square
function generateShape(int){
    return Array(int).fill('+'.repeat(int)).join('\n')
   }

//Closest to Zero
   function closest(arr){
  return arr.sort((a, b) => Math.abs(a) - Math.abs(b)).includes(arr[0] * -1) && arr[0] !== 0 ? null : arr[0];
}


//A Needle in the Haystack
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map(el=>Number.isInteger(Math.sqrt(el))?Math.sqrt(el):el**2);  
}

//Add new item
function addExtra( listOfNumbers ){
  console.log(listOfNumbers)
    return [...listOfNumbers,1]
}


//exampleSort
function exampleSort(arr,exampleArr){
  return arr.sort((x,y) => exampleArr.indexOf(x) - exampleArr.indexOf(y));
  }

//stringTransformer
function stringTransformer(str) {
  return str.split` `.map(v=>v.replace(/./gi,v=>{
 if (v===v.toLowerCase()) return v.toUpperCase()
 if (v===v.toUpperCase()) return v.toLowerCase()
 })).reverse().join` `
}

//Grasshopper - Array Mean
var findAverage = function (nums) {
  return nums.reduce((a,b)=>(a+b),0)/nums.length
}

//LeapYear
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}



//Total amount of points
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)


//Smallest value of an array
function min(arr, toReturn) {
  if (toReturn==='value') return Math.min(...arr)
  return arr.indexOf(Math.min(...arr))
}