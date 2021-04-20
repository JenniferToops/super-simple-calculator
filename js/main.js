//collect operator value for option
let operator; 
document.querySelector('#operator').addEventListener('change', assignOperator);
operator = document.querySelector('#operator').value;
function assignOperator() {
   operator = document.querySelector('#operator').value;
   console.log(operator);
}




//   document.querySelector('option').value;
//console.log(operator);
// operator = document.querySelector('option').value;

//listen for "#calculate" click button
document.querySelector('#calculate').addEventListener('click', calculateTotal);

function calculateTotal() {
   const number1 = parseInt(document.querySelector('.num1').value);
   const number2 = parseInt(document.querySelector('.num2').value);
   if (operator == "+") {
      let addition = number1 + number2;
      document.querySelector('#answer').innerText = addition;
      console.log(addition);
      } else if (operator == "-") {
         let sub = number1 - number2;
         document.querySelector('#answer').innerText = sub;
      } else if (operator == "*") {
         let multiply = number1 * number2;
         document.querySelector('#answer').innerText = multiply;
      } else if (operator == "/") {
         let divide = number1 / number2;
         document.querySelector('#answer').innerText = divide;
      }
      }

calculateTotal;


//clear inputs/outputs on click
document.querySelector('#clear').addEventListener('click', clearAll); 

//function to clear inputs/outputs on click "clear" button
 function clearAll() {
    //reload method for number1, number2, answer
    setTimeout(function(){
      window.location.reload();
  },100); 
 }



