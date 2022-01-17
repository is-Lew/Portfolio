jQuery(document).ready(function(){
  $('.toggle').click(function(){
      $('.menu').toggleClass('active');
  });
});

// "$" is a shorthand way of putting jQuery(). it returns a JQuery object. jQuery is library built on javascript that helps to simplify JS code by taking common tasks and wrapping them into methods

// line 1 (.ready) prevents any Jquery code running before the page (document) is fully loaded. This need to be in there otherwise it would be trying to hide the menu before it has been created. I could also use $(function(){ instead of line 1 but that way is harder to understand when reading the code. 

// .ready .click and .toggleclass are jQuery methods

// .toggleClass toggle between using the normal menu active class and the active menu class

