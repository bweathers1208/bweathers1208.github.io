//jshint es6

const button = document.querySelector('button');

button.addEventListener('click', showResult());

function showResult(first, second){
    var num1 = Number(form.querySelector("#first"));
    var num2 = Number(form.querySelector("#sec"));
    var result = num1 + num2;

    return alert('Your result is ' + result);
}