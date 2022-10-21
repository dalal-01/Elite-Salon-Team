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


// products section
var items = document.getElementsByClassName("col-md-3");
var slideitem = document.getElementById("slide-item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var price = document.getElementById("price");
var desc = document.getElementById("desc");
var icons = document.getElementById("icons");
var imgs = document.querySelectorAll("img");

let d;
let p;
let star;
let cname;
var index = 0;
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    var img = imgs[i].getAttribute("src");

    p = imgs[i].parentNode.childNodes[5].childNodes[3].innerHTML;
    d = imgs[i].parentNode.childNodes[3].innerHTML;
    cname = imgs[i].parentNode.childNodes[7].childNodes[1].className;
    icons.childNodes[9].setAttribute("class", cname);
    slideitem.childNodes[3].setAttribute("src", img);
    price.innerHTML = p;
    desc.innerHTML = d;
    slide.classList.add("active");

    index = i;
  });
}

close.addEventListener("click", function (e) {
  slide.classList.remove("active");
});
prev.addEventListener("click", function () {
  changeimg(index - 1);
});
next.addEventListener("click", function () {
  changeimg(index + 1);
});
function changeimg(i) {
  if (i >= items.length) index = 0;
  else if (i < 0) index = items.length - 1;
  else index = i;

  let img = items[index].childNodes[1].getAttribute("src");
  slideitem.childNodes[3].setAttribute("src", img);
  p = imgs[i].parentNode.childNodes[5].childNodes[3].innerHTML;
  d = imgs[i].parentNode.childNodes[3].innerHTML;
  cname = imgs[i].parentNode.childNodes[7].childNodes[1].className;
  icons.childNodes[9].setAttribute("class", cname);
  price.innerHTML = p;
  desc.innerHTML = d;
}
document.onkeydown = function (e) {
  if (e.keyCode == 37) prev.click();
  if (e.keyCode == 39) next.click();
  if (e.keyCode == 27) close.click();
};


/*marah*/
/*products bag*/
let bag = document.getElementById("bag");
let closeBtn = document.getElementById("closeBtn");
let bagList = document.getElementById("bagList");
let heartList = document.getElementById('heartList');
let heartBtn = document.getElementById("heartBtn");
let closeHeartBtn = document.getElementById("closeHeartBtn");
let removeItem = document.getElementsByClassName("removeItem");
let products = 0;
let heartProducts = 0;
let hearts = document.getElementsByClassName("fa-heart");


bag.addEventListener("click", function () {
  if (heartList.classList.contains("d-block")) {
    heartList.classList.add("d-none");
    heartList.classList.remove("d-block");
  } 

   if (bagList.classList.contains("d-none")) {
     bagList.classList.remove("d-none");
     bagList.classList.add("d-block");
   } else {
     bagList.classList.add("d-none");
     bagList.classList.remove("d-block");
   }
 });

 closeBtn.addEventListener("click", function () {
   bagList.classList.add("d-none");
   bagList.classList.remove("d-block");
 });

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  //cart
  for (let i = 0; i < removeItem.length; i++) {
    let button = removeItem[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantity = document.getElementsByClassName("quantity");
  for (let i = 0; i < quantity.length; i++) {
    let input = quantity[i];
    input.addEventListener("change", changeItemQuantity);
  }

  let addBasket = document.getElementsByClassName("addBasket");
  for (let i = 0; i < addBasket.length; i++) {
    let button = addBasket[i];
    button.addEventListener("click", addToCart);
  }
  //heart from slider
  let removeHeart = document.getElementsByClassName("removeHeart");
  for (let i = 0; i < removeHeart.length; i++) {
    let button = removeHeart[i];
    button.addEventListener("click", removeItemHeart);
  }
  let addHeart = document.getElementsByClassName("addHeart");
  for (let i = 0; i < addHeart.length; i++) {
    let button = addHeart[i];
    button.addEventListener("click", addToHeatList);
  }
  //add heart to cards
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", colorHeart);
  }
  //heart from cards
  for (let i = 0; i < hearts.length; i++) {
    let heart = hearts[i];
    heart.addEventListener("click", addToHeartListFromCard);
  }
}
//
function changeProductNo()
{
   let proNo = document.getElementById('proNo');
   proNo.innerHTML = products;
}
//remove Item from Cart
function removeCartItem(event)
{
   let buttonClicked = event.target;
   buttonClicked.parentElement.remove();
   updateTotal();
   products = products - 1;
   changeProductNo();
   changeHeight();
}
//update total
function updateTotal() {
  let bagItems = document.getElementsByClassName("bag-items")[0];
  let bagItem = document.querySelectorAll(".bag-item");
  let total = 0;
  for (let i = 0; i < bagItem.length; i++) {
    let cartItem = bagItem[i];
    let itemPrice = cartItem.getElementsByClassName("pro-price")[0];
    let itemQuantity = cartItem.getElementsByClassName("quantity")[0];
    let quantity = itemQuantity.value;
    let price = parseFloat(itemPrice.innerHTML.replace("$", ""));
    total = total + price * quantity;
  }
  document.getElementById("totalPrice").innerHTML = "$" + total;
}
//quantity changed
function changeItemQuantity(event)
{
   let input = event.target;
   if(isNaN(input.value) || input.value <=0)
   {
      input.value =1;
   }
   updateTotal();
}
//add to cart
function addToCart(event)
{
   let button = event.target;
   let img = slideitem.childNodes[3].getAttribute("src");
   let title = slideitem.childNodes[1].childNodes[1].innerHTML;
   let price = slideitem.childNodes[1].childNodes[3].innerHTML;
   addItemToCart(img,title,price);
   updateTotal();
}
//add item to cart
function addItemToCart(img,title,price)
{
   let bagItem = document.createElement('div');
   bagItem.classList.add("bag-item");
   let cartItemTitle = document.getElementsByClassName('pro-name');
   for(let i=0;i<cartItemTitle.length;i++)
   {
      if(cartItemTitle[i].innerText === title)
      {
         Swal.fire({
            title: 'FAIL TO ADD!',
            text: 'This product is already added!',
            imageUrl: `${img}`,
            imageWidth: 120,
            imageHeight: 120,
            imageAlt: 'Custom image',
          });
          return
      }
   }
   let bagItems = document.getElementsByClassName('bag-items')[0];
   let bagItemContent = 
   `
   <img src="${img}" alt="">
   <div class="pro-info pt-3 text-center">
     <h3 class="pro-name">${title}</h3>
     <div class="d-flex justify-content-center">
       <input type="number" value="1" class="quantity me-2">
       <p class="pro-price">${price} </p>
     </div>
   </div>
   <i class="fa-solid fa-trash removeItem"></i>
   `;
   bagItem.innerHTML = bagItemContent;
   bagItems.append(bagItem);
   bagItem.getElementsByClassName("removeItem")[0].addEventListener('click',removeCartItem);
   bagItem.getElementsByClassName("quantity")[0].addEventListener('click',changeItemQuantity);
   products = products + 1;
   changeProductNo();
   changeHeight();
}
//change cart height
function changeHeight()
{
  let bagList = document.getElementById("bagList");
  if(products>1)
  {
      bagList.style.bottom = "30%";
  }
  else
  {
    bagList.style.bottom = "50%";
  }
}

         /*products heart*/
heartBtn.addEventListener("click", function () {
  if (bagList.classList.contains("d-block")) {
    bagList.classList.add("d-none");
    bagList.classList.remove("d-block");
  } 
  if(heartList.classList.contains('d-none'))
  {
    heartList.classList.add('d-block');
    heartList.classList.remove('d-none');
  }
  else
  {
    heartList.classList.remove('d-block');
    heartList.classList.add('d-none');
  }
});

closeHeartBtn.addEventListener("click", function () {
  heartList.classList.add("d-none");
  heartList.classList.remove("d-block");
});
//remove item heart
function removeItemHeart(event)
{
   let buttonClicked = event.target;
   buttonClicked.parentElement.remove();
   heartProducts = heartProducts - 1;
   changeHeartHeight();
}
//add to heart list
function addToHeatList(event)
{
   let button = event.target;
   let img = slideitem.childNodes[3].getAttribute("src");
   let title = slideitem.childNodes[1].childNodes[1].innerHTML;
   let price = slideitem.childNodes[1].childNodes[3].innerHTML;
   addItemToHeart(img,title,price);
}
//add item to heart list
function addItemToHeart(img,title,price)
{
   let heartItem = document.createElement('div');
   heartItem.classList.add("heart-item");
   let heartItemTitle = document.getElementsByClassName('pro-heart-name');
   for(let i=0;i<heartItemTitle.length;i++)
   {
      if(heartItemTitle[i].innerText === title)
      {
         Swal.fire({
            title: 'FAIL TO ADD!',
            text: 'This product is already added!',
            imageUrl: `${img}`,
            imageWidth: 120,
            imageHeight: 120,
            imageAlt: 'Custom image',
          });
          return
      }
   }
   let heartItems = document.getElementsByClassName('heart-items')[0];
   let heartItemContent = 
   `
   <img src="${img}" alt="">
   <div class="pro-info pt-3 text-center">
     <h3 class="pro-heart-name">${title}</h3>
     <div class="d-flex justify-content-center">
       <p class="pro-price">${price} </p>
     </div>
   </div>
   <i class="fa-solid fa-heart faheart removeHeart"></i>
   `;
   heartItem.innerHTML = heartItemContent;
   heartItems.append(heartItem);
   heartItem.getElementsByClassName("removeHeart")[0].addEventListener('click',removeItemHeart);
   heartProducts = heartProducts + 1;
   changeHeartHeight();
}
//change heart height
function changeHeartHeight()
{
  if(heartProducts>2)
  {
    heartList.style.bottom = "30%";
  }
   else if(heartProducts>1)
  {
      heartList.style.bottom = "50%";
  }
  else
  {
    heartList.style.bottom = "70%";
  }
}
// add/remove color to heart button
function colorHeart(event)
{
    let button = event.target;
    if (button.classList.contains("text-danger")) {
      button.classList.remove("text-danger");
    } else {
      button.classList.add("text-danger");
    }
}
//add item to heart list from cards
function addToHeartListFromCard(event)
{
   let button = event.target;
   let img = button.parentElement.parentElement.childNodes[1].getAttribute('src');
   let title = button.parentElement.parentElement.childNodes[3].innerText;
   let price = button.parentElement.parentElement.childNodes[5].childNodes[3].innerText;
   addItemToHeartFromCard(img,title,price);
}
//add item to heart list
function addItemToHeartFromCard(img,title,price)
{
   let heartItem = document.createElement('div');
   heartItem.classList.add("heart-item");
   let heartItemTitle = document.getElementsByClassName('pro-heart-name');
   for(let i=0;i<heartItemTitle.length;i++)
   {
      if(heartItemTitle[i].innerText === title)
      {
          return
      }
   }
   let heartItems = document.getElementsByClassName('heart-items')[0];
   let heartItemContent = 
   `
   <img src="${img}" alt="">
   <div class="pro-info pt-3 text-center">
     <h3 class="pro-heart-name">${title}</h3>
     <div class="d-flex justify-content-center">
       <p class="pro-price">${price} </p>
     </div>
   </div>
   <i class="fa-solid fa-heart faheart removeHeart"></i>
   `;
   heartItem.innerHTML = heartItemContent;
   heartItems.append(heartItem);
   heartItem.getElementsByClassName("removeHeart")[0].addEventListener('click',removeItemHeart);
   heartProducts = heartProducts + 1;
   changeHeartHeight();
}


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