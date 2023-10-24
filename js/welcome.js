let canvas = document.getElementById('particles');
let ctx = canvas.getContext('2d');

let particles = 30;
let particlesArray = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function Particle() {
    this.positionX = Math.round(Math.random() * canvas.width);
    this.positionY = Math.round(Math.random() * canvas.height);
    this.speedX = Math.round(Math.random() * 5 - 3);
    this.speedY = Math.floor(Math.random() * 4 + 1);
    this.size = Math.round(Math.random() * 2 + 1);
}

function createParticles() {
    for (let i = 0; i < particles; i++) {
        particlesArray.push(new Particle);
    }
    drawParticle();
}

function drawParticle() {
    let grad;
    let cx = canvas.width * 0.5;
    let cy = canvas.height * 0.5;

    grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
    grad.addColorStop(0.000, 'rgba(15, 12, 41, 1.000)');
    grad.addColorStop(0.490, 'rgba(48, 43, 99, 1.000)');
    grad.addColorStop(0.991, 'rgba(36, 36, 62, 1.000)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();

    ctx.fillStyle = 'rgba(249, 251, 250, .5)';
    ctx.strokeStyle = 'transparent';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "rgb(28, 213, 254)";
    ctx.beginPath();
    particlesArray.forEach(particle => {
        ctx.arc(particle.positionX, particle.positionY, particle.size, 0, Math.PI * 2, true);

        particle.positionX += particle.speedX;
        particle.positionY += particle.speedY;
        if (particle.positionX > canvas.width) {
            particle.positionX = 0;
        }
        if (particle.positionY > canvas.height) {
            particle.positionY = 0;
        }
        ctx.closePath();
    });
    ctx.fill();
    requestAnimationFrame(drawParticle);
}

window.onload = () => {
    createParticles();
}

window.onresize = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

canvas.addEventListener('click', evt => {
    let newParticle = new Particle;
    newParticle.positionX = evt.clientX;
    newParticle.positionY = evt.clientY;
    particlesArray.push(newParticle);
    drawParticle();
});

const welcomeText = document.getElementById('welcome-text');
const startButton = document.getElementById('start-button');

const welcomeMessage = "Bienvenido mi nombre es: ";
const myName = "Ulises Uriel Velazquez Velazquez";

let charIndex = 0;
let typingDelay = 50;

function typeWelcomeText() {
    const intervalId = setInterval(function () {
        if (charIndex < welcomeMessage.length) {
            welcomeText.innerHTML += welcomeMessage.charAt(charIndex);
            charIndex++;
        } else {
            welcomeText.innerHTML += `<span class="name-text">${myName}</span>`;
            startButton.style.display = "block";
            clearInterval(intervalId); // Detiene la animación cuando se completa
        }
    }, typingDelay);
}

typeWelcomeText();

startButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirige al usuario a la página "perfil.html"
});
