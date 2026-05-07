document.addEventListener('DOMContentLoaded', function(){

    initParticles();

    initConfetti();

    initRSVPForm();
});

/* ============================================
    TRANSICION CINEMATOGRAFICA
   ============================================ */

function entrar(){

    const inicio = document.getElementById("inicio");

    const contenido = document.getElementById("contenido");

    // EFECTO CINEMATOGRAFICO

    inicio.style.transition = "all 1.5s ease";

    inicio.style.opacity = "0";

    inicio.style.transform = "scale(1.2)";

    setTimeout(() => {

        inicio.style.display = "none";

        contenido.classList.remove("oculto");

        contenido.style.animation = "fadeCinema 2s ease";

        launchConfetti();

    },1500);
}

/* ============================================
   CUENTA REGRESIVA EXACTA
   ============================================ */

const targetDate = new Date("May 16, 2026 16:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    // CALCULOS EXACTOS

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // MOSTRAR DATOS

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    // CUANDO LLEGUE EL DIA

    if(distance < 0){

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML =
        "<h2>🎓 ¡El gran día ha llegado! 🎉</h2>";
    }

},1000);

/* PARTICULAS */

function initParticles(){

    const particlesContainer = document.getElementById('particles');

    for(let i=0; i<30; i++){

        const particle = document.createElement('div');

        particle.className = 'particle';

        particle.style.left = Math.random()*100 + '%';

        particle.style.animationDelay = Math.random()*5 + 's';

        particlesContainer.appendChild(particle);
    }
}

/* CONFETI */

function initConfetti(){

    const confettiBtn = document.getElementById('confetti-btn');

    confettiBtn.addEventListener('click', () => {

        launchConfetti();
    });
}

function launchConfetti(){

    confetti({

        particleCount:150,

        spread:100,

        origin:{ y:0.6 }
    });
}

/* FORMULARIO */

function initRSVPForm(){

    const form = document.getElementById('rsvp-form');

    const message = document.getElementById('rsvp-message');

    form.addEventListener('submit', function(e){

        e.preventDefault();

        message.innerHTML = "🎉 Confirmación enviada correctamente";

        message.classList.remove('hidden');

        launchConfetti();

        form.reset();
    });
}