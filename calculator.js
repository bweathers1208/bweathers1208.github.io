//jshint es6

const button = document.querySelector('button');
const form = document.querySelector('button');
var num1 = document.getElementById('first');
var num2 = document.getElementById('sec');



function showResult(first, sec){
    var result = (num1) + (num2);
    console.log(result);
}

button.addEventListener('click', showResult(num1, num2));


