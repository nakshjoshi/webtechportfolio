// Typing effect
const text = "Nakshatra Joshi";
const typingText = document.getElementById('typing-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.onload = typeWriter;



// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name.length < 2) {
        alert('Please enter a valid name');
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (message.length < 10) {
        alert('Message must be at least 10 characters long');
        return;
    }
    
    // If validation passes, you can add code here to handle form submission
    alert('Message sent successfully!');
    contactForm.reset();
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.parentElement.getAttribute('data-progress') || '90%';
        }
    });
}

window.addEventListener('scroll', animateProgressBars);


// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Typing effect for roles
const roles = [
    "Software Engineer",
    "Backend Developer",
    "GenAI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.getElementById('role-text');

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    } else {
        setTimeout(typeRole, isDeleting ? 100 : 200);
    }
}

typeRole();

// Quotes Functionality
const quotes = [
    "First, solve the problem. Then, write the code.",
    "Code is like humor. When you have to explain it, it's bad.",
    "The best way to predict the future is to implement it.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to learn a new programming language is by writing programs in it."
];

const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', getRandomQuote);
getRandomQuote();

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    darkModeToggle.innerHTML = document.body.getAttribute('data-theme') === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});