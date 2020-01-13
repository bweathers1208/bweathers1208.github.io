var num1 = prompt("What is your height (inches)?")
var num2 = prompt("What is your weight (pounds)?")




//from Udemy class "The Complete 2020 Web Development Bootcamp," section 108
function add(num1, num2) {
    var result = num1 += num2;
    return result
    }
   
var answer = add(num1, num2);
   //result should be around 20
   
   console.log(answer);
   //check what is logged in console to verify function is accurate

alert("Your result is " + answer + "!");