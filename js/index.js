var myImg = document.getElementsByClassName("item-img");
var lightBoxContainer = document.querySelector(".lightBox-container");
var lightBoxItem = document.querySelector(".lightBox-item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("icon-close")

var imgArray = [];
currentIndex = 0;

for (var i = 0; i < myImg.length; i++) {
    imgArray.push(myImg[i]);

    myImg[i].addEventListener("click", function(e) {
        lightBoxContainer.classList.add("show");
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";


        currentIndex = imgArray.indexOf(e.target);
    })
};
lightBoxContainer.addEventListener("click", function(e) {
    if (e.target == lightBoxContainer) {


        lightBoxContainer.classList.remove("show");
    }
})



function nextMove() {
    currentIndex++;
    if (currentIndex == imgArray.length) {
        currentIndex = 0;
    }
    lightBoxItem.style.backgroundImage = "url(" + imgArray[currentIndex].src + ")";


}
next.addEventListener("click", function() {
    nextMove();

})

function prevMove() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgArray.length - 1;
    }
    lightBoxItem.style.backgroundImage = "url(" + imgArray[currentIndex].src + ")";

}
prev.addEventListener("click", function() {
    prevMove();

})
close.addEventListener("click", function() {
    lightBoxContainer.classList.remove("show");
})
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
        lightBoxContainer.classList.remove("show");
    } else if (e.keyCode == 39) {
        nextMove();

    } else if (e.keyCode == 37) {
        prevMove();
    }
})