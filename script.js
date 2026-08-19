const passwordBenar = "111111";
let entered = "";
const wishes = [
  "Semoga semua target baikmu tahun ini bisa tercapai. ✨",
  "Semoga selalu dikelilingi orang-orang yang tulus. 🌷",
  "Semoga kesehatan, kebahagiaan, dan keberuntungan selalu menyertai. 🤍",
  "Semoga ada banyak cerita indah yang bisa kamu kenang tahun ini. 🌸",
  "Semoga setiap usaha baikmu membuahkan hasil yang membanggakan. 💫",
  "Semoga hari ini menjadi awal dari tahun yang lebih menyenangkan. 🎂"
];

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }, 1800);
});

function pressKey(key){
  if(entered.length >= 6) return;
  entered += key;
  updatePin();
  if(entered.length === 6) setTimeout(checkPin,180);
}

function clearPin(){
  entered = "";
  updatePin();
  document.getElementById("wrong").textContent = "";
}

function updatePin(){
  document.getElementById("pin").textContent =
    entered.padEnd(6,"•").split("").join(" ");
}

function checkPin(){
  if(entered === passwordBenar){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    window.scrollTo(0,0);
  }else{
    document.getElementById("wrong").textContent = "Kode salah. Coba lagi ya 💕";
    entered = "";
    updatePin();
  }
}

function showFlower(icon,text){
  document.getElementById("modalFlower").textContent = icon;
  document.getElementById("modalText").textContent = text;
  document.getElementById("flowerModal").classList.remove("hidden");
}
function closeFlower(){
  document.getElementById("flowerModal").classList.add("hidden");
}

function toggleMusic(){
  const music = document.getElementById("music");
  if(music.paused) music.play().catch(()=>{});
  else music.pause();
}

function pickWish(){
  const wish = wishes[Math.floor(Math.random()*wishes.length)];
  const jar = document.getElementById("jar");
  jar.style.transform = "rotate(8deg) scale(1.1)";
  setTimeout(()=>jar.style.transform="",250);
  document.getElementById("wish").textContent = wish;
}
