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
      $(".navbar-collapse").css('background-color','rgb(198, 182, 167)');
   } else {
      $(".navbar").css("background-color", "transparent");
      $(".navbar-collapse").css('background-color','transparent');
   }
});
