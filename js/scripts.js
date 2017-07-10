var words = [];

$(document).ready(function(){
  $("#wordForm").submit(function(event){
    words = $("input#inputWords").val();
    words = words.split(" ");
    word = words.sort();
    var index = 0;
    var count = 1;

    words.forEach(function(word){
      index += 1;
      if(word === words[(index)]){
        count += 1;
      } else if(word !== words[(index)]){
        $("#wordList").append("<li>" + word + ": " + count + "</li>");
        count = 1;
      }
    });


    event.preventDefault();
  });

});
