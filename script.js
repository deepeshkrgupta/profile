document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const typingAnimationElement = document.querySelector('.typing-animation');

const roles = [
    "Lead Developer II",
    "Full Stack Engineer",
    "Cloud & Microservices Specialist"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    const currentChar = currentRole.substring(0, charIndex);

    typingAnimationElement.textContent = currentChar;

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(type, 1200);
    }
}

type();

window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.progress-bar');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollProgress + '%';
});
