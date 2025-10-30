let arrow_up = document.getElementById("arrow_up");
let arrow_down = document.getElementById("arrow_down");
let number = document.querySelector("span");
let blue_frun = document.querySelector(".color_1");
let brown_frun = document.querySelector(".color_2");
let trkwas_frun = document.querySelector(".color_3");
let gray_frun = document.querySelector(".color_4");
let main_image = document.getElementById("main_image");
let y = 0;


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