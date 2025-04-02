
document.addEventListener('DOMContentLoaded', function() {
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
        const now = new Date();
        const diff = targetDate - now;
        if (diff <= 0) {
            document.getElementById("days").textContent = "0";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(1);
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submit-btn");
    const modal_section = document.getElementById("modal_section");
    const closeBtn = document.getElementById("close-modal");
    const nameInput = document.getElementById("nameInput");
    const errorTooltip = document.getElementById("error_tooltip");
    const errorModal = document.getElementById("error_modal");
    const closeErrorBtn = document.getElementById("close-error-modal");

    function fadeIn(element) {
        element.classList.remove("hidden");
        element.classList.add("opacity-0");
        void element.offsetWidth;
        element.classList.remove("opacity-0");
        element.classList.add("opacity-100");
    }
    function fadeOut(element, callback) {
        element.classList.remove("opacity-100");
        element.classList.add("opacity-0");
        
        setTimeout(() => {
            element.classList.add("hidden");
            if (callback) callback();
        }, 1000); 
    }

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const inputValue = nameInput.value.trim();

        // Если поле ПУСТОЕ
        if (inputValue === "") {
            fadeIn(errorTooltip);
            fadeIn(errorModal);
            
            nameInput.classList.remove("border-b-[#000]", "border-b");
            nameInput.classList.add("border-2", "border-red-500");

            setTimeout(() => fadeOut(errorTooltip), 10000);
            setTimeout(() => fadeOut(errorModal), 10000);
        } 
        else {
            if (!errorTooltip.classList.contains("hidden")) fadeOut(errorTooltip);
            if (!errorModal.classList.contains("hidden")) fadeOut(errorModal);
            
            nameInput.classList.remove("border-red-500", "border-2");
            nameInput.classList.add("border-b-[#000]", "border-b");
            
            fadeIn(modal_section);
        }
    });

    closeBtn.addEventListener("click", () => fadeOut(modal_section));
    closeErrorBtn.addEventListener("click", () => fadeOut(errorModal));
    
    modal_section.addEventListener("click", (e) => {
        if (e.target.classList.contains("fixed")) fadeOut(modal_section);
    });
    
    errorModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("fixed")) fadeOut(errorModal);
    });
});


