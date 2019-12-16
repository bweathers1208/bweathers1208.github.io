var heightInput = prompt("What is your height?")
var weightInput = prompt("What is your weight?")




//from Udemy class "The Complete 2020 Web Development Bootcamp," section 108
function bmiCalculator(weight, height) {
    var calc = weight / (height * height);
    return calc;
    }
   
var bmi = bmiCalculator(weightInput, heightInput);
   //result should be around 20
   
   console.log(bmi);
   //check what is logged in console to verify function is accurate

alert("Your BMI is " + bmi + "!");