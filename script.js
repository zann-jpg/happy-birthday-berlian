// Musik otomatis
window.addEventListener("load", () => {
    const music = document.getElementById("music");
    if (music) {
        music.volume = 0.5;

        music.play().catch(() => {
            document.body.addEventListener(
                "click",
                () => music.play(),
                { once: true }
            );
        });
    }
});

// Efek hati jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);
// Tombol scroll ke bawah
function nextSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Efek mengetik
function typeWriter(elementId, text, speed = 60) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

window.addEventListener("load", () => {
    typeWriter(
        "typing",
        "Happy Birthday Berlian Nayla Ramadhani Almarif ❤️",
        70
    );
});
// Animasi muncul saat discroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

window.addEventListener("load", () => {
    document.querySelectorAll("section, .card").forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 1s ease";

        observer.observe(el);
    });
});

// Pesan saat akhir halaman
window.addEventListener("scroll", () => {
    const scrollPos = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPos >= pageHeight - 10) {
        console.log("Happy Birthday Berlian ❤️");
    }
});