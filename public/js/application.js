$(document).ready(function() {

  $('.hide-on-start').hide()
  $('.greeting').fadeIn(2000)
  $('.offer-form').fadeIn(2000)

  $('.offer-form').on('submit', function(event) {
    event.preventDefault();
    
    var offering = $(this).serialize();
    
    $('.message').fadeOut(1000);
    $('.offer-form').fadeOut(1000);
    $('.sweet-form').prop('value', '');
    
    $.get('/offering', offering, function(verdict) {
      if (verdict.accepted === 'true') {
        $('.message').fadeOut(1000);
        $('.accept-notice').delay(1000).fadeIn(2000);
      } else {
        $('.message').fadeOut(1000);
        $('.reject-notice1').delay(1000).fadeIn(2000);
        $('.reject-notice2').delay(3000).fadeIn(2000);
        $('.try-again').delay(5000).fadeIn(2000);
        $('.yes').on('click', function() {
          $('.message').fadeOut(1000);
          $('.very-well').delay(1500).fadeIn(2000);
          $('.offer-form').delay(1500).fadeIn(2000);
        });
        $('.no').on('click', function(event) {
          $('.message').fadeOut(1000);
          $('.get-out').delay(1500).fadeIn(2000);
          $('.message').delay(1000).fadeOut(1000)
          $('.no-really').delay(4500).fadeIn(2000);
          // $('.message').delay(2000).fadeOut(1000)
          // $('.greeting').delay(5000).fadeIn(2000)
          // $('.offer-form').delay(6000).fadeIn(2000)
        });
      };
    }, 'json');
  });


});
