//back-end
function converter(n) {
  var roman = "";
  if (n < 1 || n > 3999) {
    return alert("Please enter a number between 1 & 3,999");
  } else {
    if {
      
    } else if (n >= 50) {
      var remainderL = n % 50;
      for (i = n; i > 49; i -= 50) {
        roman += "L";
      }
      var remainderX = remainderL % 10;
      for (i = remainderL; i > 9; i -= 10) {
        roman += "X";
      }
      var remainderV = remainderX % 5;
      for (i = remainderX; i > 4; i -= 5) {
        roman += "V";
      }
      for (i = remainderV; i > 0; i--) {
        roman += "I";
      }
    } else if (n >= 10) {
      var remainderX = n % 10;
      for (i = n; i > 9; i -= 10) {
        roman += "X";
      }
      var remainderV = remainderX % 5;
      for (i = remainderX; i > 4; i -= 5) {
        roman += "V";
      }
      for (i = remainderV; i > 0; i--) {
        roman += "I";
      }
    } else if (n >= 5) {
      var remainderV = n % 5
      for (i = n; i > 4; i -= 5) {
        roman += "V"
      }
      for (i = remainderV; i > 0; i--) {
        roman += "I";
      }
    } else {
      for (i = n; i > 0; i--) {
        roman += "I";
      }
    }
  }
  return roman;
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
