(function () {
   var app = "https://script.google.com/macros/s/AKfycbytjFmtgBpmZ0zUc1nSKZUVx-e-eWA_32kJjkD5XsxLeuTOxpC3wrp0bXaoHqqRNyfSqA/exec",
      output = '',
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < 1; i++){
                  var obj = r["result"][i];
                  output += obj;
            }
        } catch(e) {}
     }

   document.getElementById('infokol').innerHTML = output;

   }
   xhr.send()
})()


$(document).ready(function(){
  $("#button_1").click(function(){
  $("#opis_film").fadeTo("fast", 0);
  $("#kino_1").delay(300).toggle("slow");
  $("#kino_2").delay(300).hide("slow");
  $("#kino_3").delay(300).hide("slow");
  $("#opis_film").delay(600).fadeTo("slow", 1);
  });
  $("#button_2").click(function(){
  $("#opis_film").fadeTo("fast", 0);
  $("#kino_1").delay(300).hide("slow");
  $("#kino_2").delay(300).toggle("slow");
  $("#kino_3").delay(300).hide("slow");
  $("#opis_film").delay(600).fadeTo("slow", 1);
  });
  $("#button_3").click(function(){
  $("#opis_film").fadeTo("fast", 0);
  $("#kino_1").delay(300).hide("slow");
  $("#kino_2").delay(300).hide("slow");
  $("#kino_3").delay(300).toggle("slow");
  $("#opis_film").delay(600).fadeTo("slow", 1);
  });
});
