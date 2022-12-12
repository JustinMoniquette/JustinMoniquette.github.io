//Activate menu button
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

//Open writing pdf
function Open(story) {
    window.open(story, "_blank");
}
