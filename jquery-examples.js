$(document).ready(function(){

  $("button").on('click', function(evt){
    $.ajax({
      url:'http://api.icndb.com/jokes/random'
    }).done(function(data){
      $('button').after('<p>'+data.value.joke+'</p>');
    });
  });


  // keypress ENTER add a chunk of whatever the user said
  $('input').on('keypress', function(event) {
    var userText = $(this).val();
    // if the key (event.which) is the ENTER key (13) and the input box isn't empty...
    if (event.which === 13 && userText !== "") {
      $('#textfeed').after('<p>'+ userText + '</p>');
      // clear the input
      $(this).val("");
    }
  });

  $('#hoverBox').on('mouseenter', function(evt){
    $(this).css('background-color', 'green');
  });

  $('#hoverBox').on('mouseleave', function(evt){
    $(this).css('background-color', '');
  });

});