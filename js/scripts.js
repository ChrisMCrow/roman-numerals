//back-end
var romanNumber = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1,
}

function converter(n) {
  var roman = "";
  if (n < 1 || n > 3999) {
    return alert("Please enter a number between 1 & 3,999");
  } else {
    for (key of Object.keys(romanNumber)) {
      var quotient = Math.floor(n/romanNumber[key])
      n -= quotient * romanNumber[key];
      for (j = 0; j < quotient; j++) {
        roman += key;
      }
    }
  }
  return roman
}

//front-end
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    var result = converter(input);
    $("#resultNumber").text(result);
  })
});
