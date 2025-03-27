$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,  
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("2025-07-25T16:00:00");

    function updateCountdown() {
        const timeLeft = countdown(targetDate);

        document.getElementById("days").textContent = String(timeLeft.days).padStart(2, "0");
        document.getElementById("hours").textContent = String(timeLeft.hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(timeLeft.minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(timeLeft.seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
