const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    }
});

const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

function openSidebar() {
    navMenu.classList.add('active');
    overlay.classList.add('active');
}

function closeSidebar() {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
}

hamburger.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    event.target.reset();
}