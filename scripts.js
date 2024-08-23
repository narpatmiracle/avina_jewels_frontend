

// 
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlide(index) {
        document.querySelector('.dot.active').classList.remove('active');
        dots[index].classList.add('active');
        document.querySelector('.slider-wrapper').style.transform = `translateX(-${index * 80}%)`;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    function autoScroll() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateSlide(currentIndex);
    }

    // Set up automatic scrolling every 5 seconds
    setInterval(autoScroll, 5000);

    // Initialize the first slide
    updateSlide(currentIndex);

    // Optional: Add click event to manually change slides
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? dots.length - 1 : currentIndex - 1;
        updateSlide(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex === dots.length - 1) ? 0 : currentIndex + 1;
        updateSlide(currentIndex);
    });
});


var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    loop: true,
    loopedSlides: 3, // Adjust this based on the number of slides you have
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
    },
    breakpoints: {
        560: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


const testimonials = [
    {
        profilePicture: "./images/review/05.jpg",
        name: "Jamis john",
        title: "Principal Intranet Planner",
        quote: "Fantastic selection of diamonds and jewelry. I found exactly what I was looking for, and the purchase process was straightforward and secure. Highly satisfied!",
        overlayPicture: "./images/review/02.jpg",
        overlayName: "riya roy",
        overlayTitle: "Chief Branding Executive"
    },
    {
        profilePicture: "./images/review/02.jpg",
        name: "riya roy",
        title: "Marketing Manager",
        quote: "The service was outstanding, and the product quality exceeded my expectations. I will definitely recommend this to my colleagues.",
        overlayPicture: "./images/review/05.jpg",
        overlayName: "Jamis john",
        overlayTitle: "Creative Director"
    },
    // Add more testimonials here...
];

let currentTestimonialIndex = 0;

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.querySelector('.overlay-title img').src = testimonial.profilePicture;
    document.querySelector('.profile-picture img').src = testimonial.profilePicture;
    document.querySelector('.testimonial-content h3').textContent = testimonial.name;
    document.querySelector('.testimonial-content p').textContent = testimonial.title;
    document.querySelector('.testimonial-content blockquote p').textContent = testimonial.quote;
    document.querySelector('.profile-overlay img').src = testimonial.overlayPicture;
    document.querySelector('.profile-overlay h3').textContent = testimonial.overlayName;
    document.querySelector('.profile-overlay p').textContent = testimonial.overlayTitle;
}

document.querySelector('.prev-btn').addEventListener('click', function () {
    currentTestimonialIndex = (currentTestimonialIndex === 0) ? testimonials.length - 1 : currentTestimonialIndex - 1;
    updateTestimonial(currentTestimonialIndex);
});

document.querySelector('.next-btn').addEventListener('click', function () {
    currentTestimonialIndex = (currentTestimonialIndex === testimonials.length - 1) ? 0 : currentTestimonialIndex + 1;
    updateTestimonial(currentTestimonialIndex);
});

// Initialize the first testimonial
updateTestimonial(currentTestimonialIndex);