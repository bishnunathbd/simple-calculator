function getHistory() {
   return document.getElementById('history-value').innerText;
}
// alert(getHistory());
function printHistory(num) {
   document.getElementById('history-value').innerText = num;
}
// printHistory('4*3+6');

function getOutput() {
   return document.getElementById('output-value').innerText;
}
// alert(getOutput());

function printOutput(num) {
   if (num == '') {
      document.getElementById('output-value').innerText = num;
   } else {
      document.getElementById('output-value').innerText = getFormattedNumber(num);
   }
}

function getFormattedNumber(num) {
   var n = Number(num);
   var value = n.toLocaleString('en');
   return value;
}
// printOutput('999923');
// printOutput('');
function reverseNumberFormat(num) {
   return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
   operator[i].addEventListener('click', function () {
      // alert('The operator clicked: ' + this.id);
      if (this.id == 'clear') {
         printHistory('');
         printOutput('');
      }
      else if (this.id == 'backspace') {
         var output = reverseNumberFormat(getOutput()).toString();
         if (output) { // if output has a value
            output = output.substr(0,output.length-1);
            printOutput(output);
         }
      }
   });
}
var number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
   number[i].addEventListener('click', function () {
      // alert('The number clicked: ' + this.id);
      var output = reverseNumberFormat(getOutput());
      if (output != NaN) { // if output is a number
         output = output + this.id;
         printOutput(output);
      }
   });
}