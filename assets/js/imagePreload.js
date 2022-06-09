var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "slideshow/0.jpg",
    "slideshow/1.jpg",
    "slideshow/2.jpg", 
    "slideshow/3.jpg",
    "slideshow/4.jpg",
    "slideshow/5.jpg",
    "slideshow/6.jpg",
    "slideshow/7.jpg",
    "slideshow/8.jpg",
    "slideshow/9.jpg"
)