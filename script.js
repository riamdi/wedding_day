function startSlideshow(slideshowClass) {
    let indexValue = 0; 
    const images = document.querySelectorAll('.' + slideshowClass);
    function SlideShow() {
        images[indexValue].classList.add("hidden");
        indexValue = (indexValue + 1) % images.length;
        images[indexValue].classList.remove("hidden");
    }
    setInterval(SlideShow, 4000);
}
startSlideshow('slideshow1');
startSlideshow('slideshow2');