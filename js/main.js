let sidenav = document.getElementById("sidenav");
let menubar = document.getElementById("menubar");

sidenav.style.display = "none";
menubar.onclick = function () {
  if (sidenav.style.display == "none") {
    sidenav.style.display = "block";
    menubar.style.color = "white";
  } else {
    sidenav.style.display = "none";
    menubar.style.color = "rgba(0,0,0,0.5)";
  }
};
$(window).scroll(function () {
  let t = $(window).scrollTop();
  if (t >= 40) {
    $(".navbar").css("background-color", "#c6b6a7");
    $(".navbar-collapse").css("background-color", "rgb(198, 182, 167)");
  } else {
    $(".navbar").css("background-color", "transparent");
    $(".navbar-collapse").css("background-color", "transparent");
  }
});


//loading screen
$(document).ready((function(){
  $('.spinner').fadeOut(1000)  
  $('.loader').slideUp(2000)
  $('body').css('overflow','unset');

}))
///loading screen

/*top button*/
$(window).scroll(function () {
  let t = $(window).scrollTop();
  if (t >= 100) {
    
     $('.topBtn').css('display','block')
     $(".reservation").css('display','block')
  } else {
    
     $('.topBtn').css('display','none')
     $(".reservation").css('display','none')
  }
});

$('.topBtn').click(function(){
  $(window).scrollTop(0)
})
/*top button*/


