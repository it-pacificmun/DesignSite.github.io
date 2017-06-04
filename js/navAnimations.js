//Navbar Animations
$(window).scroll(function(){
      if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
            $('p').addClass('shrink');
            $('a').addClass('shrink');
      }else {
            $('nav').removeClass('shrink');
            $('p').removeClass('shrink');
            $('a').removeClass('shrink');
      }
});

//Back to Top Button
$(document).ready(function(){
      $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                  $('#back-to-top').fadeIn();
            } else {
                  $('#back-to-top').fadeOut();
            }
      });
      $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                  scrollTop: 0
            }, 800);
            return false;
      });
      $('#back-to-top').tooltip('show');
});
