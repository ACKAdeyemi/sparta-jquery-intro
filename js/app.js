$(document).ready(function(){ // waits for everything to loaded before running

  var newFacts = [
    'Big Ben is actually called Elizabeth Tower',
    'France was still executing poeple by guillotine when the first Star Wars came out',
    'Female elephants are called cows'
  ]; // standard array of string, no $ because not using jQ

  // creating new variables and 'getting' them from html using jQ syntax
  var $facts = $('#facts');
  var $count = $('#count');
  var $customFact = $('#customFact');

  // append - add to start, prepend - add to end
  $facts.prepend('<li>The tallest and fastest rollercoaster in Europe is called the SilverStar</li>');

  for (var i = 0; i < newFacts.length; i++) {
    $facts.append(`<li>${newFacts[i]}</li>`);
  }

  // changing the count html to length of the children of facts = newFacts aka list
  $count.html($facts.children().length);

  //
  for (var i = 0; i < $facts.children().length; i++) {
    // target element wrapped in jQ syntax i.e. $()
    // : = else seperator
    // if statement below
    // if (i % 2 === 0) $($facts.children()[i]).addClass('even');

    // if else statement below - don't forget ? operator and don't chain
    (i % 2 === 0) ? $($facts.children()[i]).addClass('even') :
    $($facts.children()[i]).addClass('odd');
  }

  // console.log($facts.children());

  // apply hover event to children of $facts
  // now hover function below can be applied to other elements/variables
  function hoverStyle() {
    $(this).toggleClass('selected');
  }
  $facts.children().hover(hoverStyle);

  // create 2 elements (input and button) relative to postion in html
  $customFact.append('<input type="text" id="input" value=""><button id="addNewFact">Add New Fact</button>').css("padding","10px");

  // on click function for button that takes the value entered into the text input and outputs to
  $('#addNewFact').click(function() {
    // console.log($('#input').val()); // testing the function works
    // $facts.append($('#input').val()); // add to the end but inline (within div)
    $facts.append($(`<li>${$('#input').val()}</li>`));
  })

});
