//Parallax.js
(function(){
      var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;
      window.onscroll = function(){
            [].slice.call(parallax).forEach(function(el,i){
                  var windowYOffset = window.pageYOffset,
                  elBackgrounPos = "0 " + (-1*windowYOffset * speed) + "px";
                  el.style.backgroundPosition = elBackgrounPos;
            });
      };
})();

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

//Tabs Menu
$(document).ready(function(){
   $(".nav-tabs a").click(function(){
        $(this).tab('show');
   });
});

//Smooth Scrolling
// credit http://stackoverflow.com/questions/14804941/how-to-add-smooth-scrolling-to-bootstraps-scroll-spy-function
$(".Hbottom a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
            scrollTop: $(this.hash).offset().top
      }, 1200, function(){
            window.location.hash = hash;
      });
});
