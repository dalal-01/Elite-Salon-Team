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
// products section
var items=document.getElementsByClassName("col-md-3");
var slideitem=document.getElementById("slide-item")
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("close");
var price=document.getElementById("price");
var desc=document.getElementById("desc");
var icons=document.getElementById("icons");


let d;
let p;
let star;
let cname;
var index=0;
for(let i=0;i<items.length;i++){
    items[i].addEventListener('click',function(e){
    var img=e.target.src;
    p=items[i].childNodes[5].childNodes[3].innerHTML;
    d=items[i].childNodes[3].innerHTML;
    cname=items[i].childNodes[7].childNodes[1].className;
    icons.childNodes[9].setAttribute("class", cname);
    slideitem.childNodes[3].setAttribute('src',img);
    price.innerHTML=p;
    desc.innerHTML=d;
     slide.classList.add('active');
    
      index=i;
   
    })
 }
 close.addEventListener('click',function(e){
    slide.classList.remove('active');
})
prev.addEventListener('click',function(){
    changeimg(index -1);
})
next.addEventListener('click',function(){
    changeimg(index +1);
})
function changeimg(i){
    if(i>=items.length)
    index=0;
    else if(i<0)
    index=items.length-1;
    else 
    index=i;
   
    let img=items[index].childNodes[1].getAttribute('src');
   slideitem.childNodes[3].setAttribute('src',img);
   p=items[i].childNodes[5].childNodes[3].innerHTML;
    d=items[i].childNodes[3].innerHTML;
    cname=items[i].childNodes[7].childNodes[1].className;
    icons.childNodes[9].setAttribute("class", cname);
    price.innerHTML=p;
    desc.innerHTML=d;   
 }
 document.onkeydown=function(e){
    if(e.keyCode==37)
    prev.click();
    if(e.keyCode==39)
    next.click();
    if(e.keyCode==27)
    close.click();
}


