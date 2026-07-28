
const passwordBenar="berlian";


function cekPassword(){


let password =
document.getElementById("password").value;


if(password===passwordBenar){


document.getElementById("login")
.style.display="none";


document.getElementById("main")
.style.display="block";



document.getElementById("music")
.play();


buatHati();


}

else{


document.getElementById("error")
.innerHTML=
"Password salah ❤️";


}


}





function surprise(){


document.getElementById("pesan")
.innerHTML=

"💖 Terima kasih sudah menjadi seseorang yang spesial. Happy Birthday Berlian ❤️🎂";


}



function buatHati(){


setInterval(()=>{


let hati=document.createElement("div");


hati.className="hati";

hati.innerHTML="❤️";


hati.style.left=
Math.random()*100+"%";


hati.style.fontSize=
(Math.random()*30+10)+"px";


hati.style.animationDuration=
(Math.random()*3+3)+"s";


document.body.appendChild(hati);



setTimeout(()=>{

hati.remove();

},5000);



},300);



}
