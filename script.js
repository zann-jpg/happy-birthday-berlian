const passwordBenar="berlian";


let musicOn=true;



// hilangkan loading

setTimeout(()=>{

document.getElementById("loading")
.style.display="none";


},2500);






function cekPassword(){


let pass=
document.getElementById("password").value;



if(pass===passwordBenar){


document.getElementById("login")
.style.display="none";


document.getElementById("main")
.style.display="block";



let music=
document.getElementById("music");


music.volume=.5;


music.play();



typing();



buatHati();


}

else{


document.getElementById("error")
.innerHTML=
"Password salah ❤️";


}



}





// TULISAN MENGETIK


function typing(){


let text=
"Happy Birthday BERLIAN NAYLA RAMADHANI ALMARIF ❤️";


let i=0;


let speed=70;


let timer=setInterval(()=>{


document.getElementById("typing")
.innerHTML+=text[i];


i++;


if(i>=text.length){

clearInterval(timer);

}


},speed);


}






// HATI JATUH


function buatHati(){


setInterval(()=>{


let h=document.createElement("div");


h.className="hati";


h.innerHTML="❤️";


h.style.left=
Math.random()*100+"%";


h.style.animationDuration=
(3+Math.random()*3)+"s";



document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},6000);



},200);



}






// MUSIC ON OFF


function musik(){


let music=
document.getElementById("music");



if(musicOn){


music.pause();


musicOn=false;


}

else{


music.play();


musicOn=true;


}



}






function surprise(){


document.getElementById("pesan")
.innerHTML=

"💖 Berlian, semoga selalu bahagia. Terima kasih sudah lahir ke dunia ❤️🎂";


}
// BUKA HADIAH

function openGift(){


document.getElementById("surat")
.style.display="flex";


buatConfetti();

buatBunga();


}



// TUTUP SURAT

function closeGift(){


document.getElementById("surat")
.style.display="none";


}





// CONFETTI

function buatConfetti(){


for(let i=0;i<80;i++){


let c=document.createElement("div");


c.className="confetti";


c.innerHTML="🎉";


c.style.left=
Math.random()*100+"%";


c.style.animationDuration=
(2+Math.random()*3)+"s";


document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},4000);


}


}




// BUNGA

function buatBunga(){


setInterval(()=>{


let b=document.createElement("div");


b.className="bunga";


b.innerHTML="🌸";


b.style.left=
Math.random()*100+"%";


b.style.animationDuration=
(4+Math.random()*5)+"s";



document.body.appendChild(b);



setTimeout(()=>{

b.remove();

},8000);



},300);



}
function jawabYa(){

document.getElementById("jawaban").innerHTML =
"❤️ Terima kasih sudah memberikan kesempatan. Semoga kita bisa membuat banyak cerita indah bersama ❤️";

}



function jawabNanti(){

document.getElementById("jawaban").innerHTML =
"😊 Tidak apa-apa, yang penting kamu tahu kalau kamu adalah seseorang yang spesial.";

  }
// BIKIN BINTANG


function buatBintang(){


let area =
document.querySelector(".stars");


for(let i=0;i<120;i++){


let star =
document.createElement("div");


star.className="star";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


star.style.animationDelay =
Math.random()*3+"s";


area.appendChild(star);


}


}



buatBintang();
