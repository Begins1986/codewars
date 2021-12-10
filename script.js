// Drying Potatoes
function potatoes(p0, w0, p1) {
    return Math.floor(w0 * (100 - p0) / (100 - p1))
 }

//  Breaking chocolate problem
function breakChocolate(n,m) {
    if (m<=0 || n<=0){
      return 0;
    }else{
      return n*m-1;
    }   
  }

//   Drink about
function peopleWithAgeDrink(old) {
    if (old<14){
      return "drink toddy"
    } else if(old>=14 && old<18){
      return "drink coke"
    } else if(old>=18 && old<21){
      return "drink beer"
    } else {
      return 'drink whisky';
    }
};

// Parse nice int from char problem
function getAge(inputString){
  return parseInt(inputString[0]);
}

// Reversed Message
function reverseMessage(str) {
  str=str.split(` `).map(v=>v.split('').reverse().join``).join` `;
  str=str.split(` `).map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).reverse().join` `;
  return str;
}

// Narcissistic Numbers
function isNarcissistic(n){
  return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
}

// Boiled Eggs
function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}

// Count the divisors of a number
function getDivisorsCnt(n){
  let i, sum=0;
for(i=0; i<=n; i++){
  if (n%i==0){
    sum++;
  }
}
return sum;
}

// I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  if (nbPetals%6==1){
    return "I love you";
  } else if (nbPetals%6==2){
    return "a little";
  } else if (nbPetals%6==3){
    return "a lot";
  } else if (nbPetals%6==4){
    return "passionately";
  } else if (nbPetals%6==5){
    return "madly";
  } else if (nbPetals%6==0){
    return "not at all";
  }
}
 
// Is this a triangle?
function isTriangle(a,b,c){ 
  if(a+b>c && a+c>b && b+c>a){
  return true;
} else{
  return false;
}   
}

// Correct the mistakes of the character recognition software
function correct(string){
  return string.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');
}

// Reverse a Number
function reverseNumber(n) {
  if (n>=0){
   return +Math.abs(n).toString().split('').reverse().join(''); 
  } else {
    return +Math.abs(n).toString().split('').reverse().join('')*(-1);
  } 
}

// Spinning Rings
function spinningRings(innerMax, outerMax) {
  for(var i = 1; innerMax - ((i - 1) % (innerMax + 1)) !== i % (outerMax + 1); i++) {
    
  }
return i;
};


// String repeat
function repeatStr (n, s) {
  let str = '';
  for(let i=0;i<n;i++){
    str = str + s;  
  }
  return str;
}