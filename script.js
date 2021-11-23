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