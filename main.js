let arrow_up = document.getElementById("arrow_up");
let arrow_down = document.getElementById("arrow_down");
let number = document.querySelector("span");
let blue_frun = document.querySelector(".color_1");
let brown_frun = document.querySelector(".color_2");
let trkwas_frun = document.querySelector(".color_3");
let gray_frun = document.querySelector(".color_4");
let main_image = document.getElementById("main_image");
let btn = document.getElementById("btn");
let cart = document.getElementById("cart");
let cart_span = document.createElement("span");
let cart_div = document.querySelector(".cart_div");
let y = 0;
cart_span.id="cart_span";
cart_span.style.cssText = " position: absolute;top: 51px;right: 47px;background-color: rgb(223, 7, 7);padding: 4px;border-radius: 70%;font-size: 6px;";
btn.onclick = function(){
    cart_div.appendChild(cart_span);

}
blue_frun.onclick = function(){
    main_image.src="/images/mid-century_Modern_home_chair-removebg-preview-baby_blue color.png";
}
brown_frun.onclick = function(){
    main_image.src="/images/mid-century_Modern_home_chair-removebg-preview-baj color.png";
}
trkwas_frun.onclick = function(){
    main_image.src="/images/mid-century_Modern_home_chair-removebg-preview-final image.png";
}
gray_frun.onclick = function(){
    main_image.src="/images/mid-century_Modern_home_chair-removebg-preview.png";
}
arrow_up.onclick = function() {
    number.innerHTML = ++y; 
}

arrow_down.onclick = function() {
    if (y > 0) {
    number.innerHTML = --y;
    }
};


// setInterval(function (){
//     document.body.style.cssText="background-color: black;";
//     document.body.style.cssText="background-color: white;";
// },2000)
// setInterval(function (){
//     document.body.style.cssText="background-color: black;";
// },4000)
// setInterval(function (){
//     document.body.style.cssText="background-color: #db8d20;";
    
// },6000)