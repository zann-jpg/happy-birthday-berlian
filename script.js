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
