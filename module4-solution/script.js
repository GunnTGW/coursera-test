(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var i;
 for (i = 0; i < names.length; i++) {
  var x = names[i].charAt(0).toLowerCase();

   if (x === "j") {
    byeSpeaker(names[i]);
  } 
  else {
    helloSpeaker(names[i]);
  }
  }
})(window);

