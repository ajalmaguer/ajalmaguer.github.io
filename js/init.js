$('#index-banner').height(window.innerHeight)

$('.button-collapse').sideNav();

$("#hello").typed({
  strings: ["Hello!"],
  typeSpeed: 50,
  showCursor: false
})

$("#tagline").typed({
  strings: ["I'm a full-stack ^500 web developer."],
  typeSpeed: 100,
  startDelay: 1500,
  showCursor: false
})

$("footer").css("opacity", 1)


$(window).scroll( function(){
  /* Check the location of each desired element */
  $('.project').each( function(i){
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */
    if( bottom_of_window > top_of_object + 200  ){
      $(this).animate({'opacity':'1'},500);
    }
  });
});


