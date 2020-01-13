//jshint es6

const button = document.querySelector('button');

button.addEventListener('click', showResult());

function showResult(first, second){
    var num1 = form.getElementById("#first");
    var num2 = form.getElementById("#sec");
    var result = Math.add(Number(num1) + Number(num2));
    console.log(result);
}