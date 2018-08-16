//back-end
function converter(n) {
  var Roman = "";
  if (n < 1 || n > 3,999) {
    return alert("Please enter a number between 1 & 3,999")
  } else {
  for (i = n; i > 0; i--) {
    Roman += "I";
    }
  }
  return Roman;
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
