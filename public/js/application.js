$(document).ready(function() {

  var greeting = "<section class='greeting message'><h2>Hello, human.</h2><h3>What pitiful offering have you brought to place before the guardians of the green glass door?</h2></section>"
  var accept_notice = "<section class='accept-notice message'><p>Well done!  Your offering has pleased the guardians of the green glass door.</p><p>You may enter.</p></section>"
  var reject_notice = "<section class='reject-notice message'><p>Your pathetic offering has been rejected.</p><p>It can't come in, and neither can you!</p></section>"
  var try_again? = "<section class='try-again message'><p>Would you like to try again, puling mortal?</p><a href='/retry'><button>Yes</button></a><a href='/leave'><button>No</button></a></section>"
  var very_well = "<p class='very-well message'>Very well.  What have you brought this time?</p>"
  var get_out = "<p class='get-out message'>Fine!<p/>"
  var no_really = "<p class='no-really message'>LEAVE.</p>"
  var offer_form = "<form action='/offering' method='get' class='offer-form'><input type='text' name='offering'><input type='submit' value='Make an offering'></form>"

});
