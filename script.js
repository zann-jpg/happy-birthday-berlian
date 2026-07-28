const PASSWORD = "11111";

const lockScreen = document.getElementById("lockScreen");
const popup = document.getElementById("popup");
const website = document.getElementById("website");

const loginBtn = document.getElementById("loginBtn");
const startBtn = document.getElementById("startBtn");
const password = document.getElementById("password");

loginBtn.onclick = function () {

    if(password.value === PASSWORD){

        lockScreen.style.display = "none";
        popup.style.display = "flex";

    }else{

        alert("Password salah ❤️");

        password.value="";

    }

}

startBtn.onclick = function(){

    popup.style.display = "none";

    website.style.display = "block";

    document.body.style.overflowY="auto";

}

const kata = [

"🌷 Terima kasih sudah hadir di hidupku.",
"💖 Semoga kamu selalu bahagia.",
"🌸 Jangan lupa senyum ya.",
"❤️ Aku selalu mendoakan yang terbaik buat kamu.",
"✨ Kamu spesial."

];

function flower(){

const random = Math.floor(Math.random()*kata.length);

document.getElementById("flowerText").innerHTML = kata[random];

}

document.body.style.overflow="hidden";

password.addEventListener("keypress",function(e){

if(e.key==="Enter"){

loginBtn.click();

}

});
