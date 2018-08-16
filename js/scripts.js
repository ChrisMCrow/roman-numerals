//back-end
function converter(n) {
  var roman = "";
  if (n < 1 || n > 3999) {
    return alert("Please enter a number between 1 & 3,999");
  } else {
    while (n >= 1000) {
      roman += "M";
      n -= 1000;
    }
    while (n >= 900) {
      roman += "CM";
      n -= 900;
    }
    while (n >= 500) {
      roman += "D";
      n -= 500;
    }
    while (n >= 400) {
      roman += "CD";
      n -= 400;
    }
    while (n >= 100) {
      roman += "C";
      n -= 100;
    }
    while (n >= 90) {
      roman += "XC";
      n -= 90;
    }
    while (n >= 50) {
      roman += "L";
      n -= 50;
    }
    while (n >= 40) {
      roman += "XL";
      n -= 40;
    }
    while (n >= 10) {
      roman += "X";
      n -= 10;
    }
    while (n === 9) {
      roman += "IX";
      n -= 9;
    }
    while (n >= 5) {
      roman += "V";
      n -= 5;
    }
    while (n === 4) {
      roman += "IV";
      n -= 4;
    }
    while (n >= 1) {
      roman += "I";
      n -= 1;
    }
  }
  return roman
}



  //   if (n >= 1000) {
  //     var remainderD = n % 1000;
  //     for (i = n; i > 999; i -= 1000) {
  //       roman += "M";
  //     }
  //     var remainderD = remainderM % 500;
  //     for (i = remainderM; i > 499; i -= 500) {
  //       roman += "D";
  //     }
  //     var remainderC = remainderD % 100;
  //     for (i = remainderD; i > 99; i -= 100) {
  //       roman += "C";
  //     }
  //     var remainderL = remainderC % 50;
  //     for (i = remainderC; i > 49; i -= 50) {
  //       roman += "L";
  //     }
  //     var remainderX = remainderL % 10;
  //     for (i = remainderL; i > 9; i -= 10) {
  //       roman += "X";
  //     }
  //     var remainderV = remainderX % 5;
  //     for (i = remainderX; i > 4; i -= 5) {
  //       roman += "V";
  //     }
  //     for (i = remainderV; i > 0; i--) {
  //       if (i === 4) {
  //         roman += "IV";
  //         break;
  //       } else {
  //       roman += "I";
  //       }
  //     }
  //   } else if (n >= 500) {
  //     var remainderD = n % 500;
  //     for (i = n; i > 499; i -= 500) {
  //       roman += "D";
  //     }
  //     var remainderC = remainderD % 100;
  //     for (i = remainderD; i > 99; i -= 100) {
  //       roman += "C";
  //     }
  //     var remainderL = remainderC % 50;
  //     for (i = remainderC; i > 49; i -= 50) {
  //       roman += "L";
  //     }
  //     var remainderX = remainderL % 10;
  //     for (i = remainderL; i > 9; i -= 10) {
  //       roman += "X";
  //     }
  //     var remainderV = remainderX % 5;
  //     for (i = remainderX; i > 4; i -= 5) {
  //       roman += "V";
  //     }
  //     for (i = remainderV; i > 0; i--) {
  //       if (i === 4) {
  //         roman += "IV";
  //         break;
  //       } else {
  //       roman += "I";
  //       }
  //     }
  //   } else if (n >= 100) {
  //     var remainderC = n % 100;
  //     for (i = n; i > 99; i -= 100) {
  //       roman += "C";
  //     }
  //     var remainderL = remainderC % 50;
  //     for (i = remainderC; i > 49; i -= 50) {
  //       roman += "L";
  //     }
  //     var remainderX = remainderL % 10;
  //     for (i = remainderL; i > 9; i -= 10) {
  //       roman += "X";
  //     }
  //     var remainderV = remainderX % 5;
  //     for (i = remainderX; i > 4; i -= 5) {
  //       roman += "V";
  //     }
  //     for (i = remainderV; i > 0; i--) {
  //       if (i === 4) {
  //         roman += "IV";
  //         break;
  //       } else {
  //       roman += "I";
  //       }
  //     }
  //   } else if (n >= 50) {
  //     var remainderL = n % 50;
  //     for (i = n; i > 49; i -= 50) {
  //       roman += "L";
  //     }
  //     var remainderX = remainderL % 10;
  //     for (i = remainderL; i > 9; i -= 10) {
  //       roman += "X";
  //     }
  //     var remainderV = remainderX % 5;
  //     for (i = remainderX; i > 4; i -= 5) {
  //       roman += "V";
  //     }
  //     for (i = remainderV; i > 0; i--) {
  //       if (i === 4) {
  //         roman += "IV";
  //         break;
  //       } else {
  //       roman += "I";
  //       }
  //     }
  //   } else if (n >= 10) {
  //     var remainderX = n % 10;
  //     for (i = n; i > 9; i -= 10) {
  //       roman += "X";
  //     }
  //     var remainderV = remainderX % 5;
  //     for (i = remainderX; i > 4; i -= 5) {
  //       roman += "V";
  //     }
  //     for (i = remainderV; i > 0; i--) {
  //       roman += "I";
  //     }
  //   } else if (n >= 5) {
  //     var remainderV = n % 5
  //     for (i = n; i > 4; i -= 5) {
  //       roman += "V"
  //     }
  //     for (i = remainderV; i > 0; i--) {
  //       if (i === 4) {
  //         roman += "IV";
  //         break;
  //       } else {
  //       roman += "I";
  //       }
  //     }
  //   } else {
  //     for (i = n; i > 0; i--) {
  //       if (i === 4) {
  //         roman += "IV";
  //         break;
  //       } else {
  //       roman += "I";
  //       }
  //     }
  //   }
  // }
//
//   return roman;
// }


//front-end
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    var result = converter(input);
    $("#resultNumber").text(result);
  })
});
