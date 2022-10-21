let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
let submit = document.getElementById("submit");

let nameAlert = document.getElementById("nameAlert");
let fname = document.getElementById("fname");
let phoneAlert = document.getElementById("phoneAlert");
let phone = document.getElementById("phone");

let date = document.getElementById("date");
var sidenav = document.getElementById("sidenav");
var menubar = document.getElementById("menubar");
let config ={
    enableTime: true,
    minDate: "15.12.2022",
    maxDate: "15.12.2025",
    minTime: "09:00",
    maxTime: "17:00",
    "disable": [
        function(date) {
            return (date.getDay() === 5 || date.getDay() === 6);

        }
    ],
};
sidenav.style.display = "none";
menubar.onclick = function()
{
   if (sidenav.style.display == "none")
   {
      sidenav.style.display = "block";
   }
   else
   {
      sidenav.style.display = "none";
   }
   
};
flatpickr("#date", config);

next1.onclick = function(){
   form1.style.left = "-600px";
   form2.style.left = "0px";
};
next2.onclick = function(){
   form2.style.left = "-600px";
   form3.style.left = "0px";
};
back1.onclick = function(){
   form1.style.left = "0px";
   form2.style.left = "500px";
};
fname.onkeyup = function()
{
  var namePattern = /^[A-Z][a-zA-Z]{2,10}$/;
  if(namePattern.test(fname.value))
   {
    next1.removeAttribute("disabled");
    fname.classList.add("is-valid");
    fname.classList.remove("is-invalid");
    nameAlert.classList.add("d-none");
   }
   else
   {
    next1.setAttribute("disabled","disabled");
    fname.classList.remove("is-valid");
    fname.classList.add("is-invalid");
    nameAlert.classList.remove("d-none");
    nameAlert.classList.add("d-block");
   }
};

phone.onkeyup = function()
{
  var phonePattern = /^[0-9]{10}$/;
  if(phonePattern.test(phone.value))
   {
    next2.removeAttribute("disabled");
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
    phoneAlert.classList.add("d-none");
   }
   else
   {
    next2.setAttribute("disabled","disabled");
    phone.classList.remove("is-valid");
    phone.classList.add("is-invalid");
    phoneAlert.classList.remove("d-none");
    phoneAlert.classList.add("d-block");
   }
};
submit.onclick = function()
{
   Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 3500
    });
};
function func(e)
{
 event.preventDefault();
};

$(window).scroll(function(){
  let t = $(window).scrollTop();
   if(t >= 40)
   {
      $(".navbar").css("background-color","#c6b6a7");
   }
   else
   {
      $(".navbar").css("background-color","transparent");
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
   } else {
     
      $('.topBtn').css('display','none')
   }
 });
 
 
 
 $('.topBtn').click(function(){
   $(window).scrollTop(0)
 })
 /*top button*/