/*
Fai in modo che la variabile numeroIniziale si veda a video (al posto di 'N')
Fai partire il countdown al click sul button
Al termine del countdown richiama la funzione sveglia()""
*/ 

let numeroIniziale=10;

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#timer").innerHTML= numeroIniziale;

    document.querySelector("button").onclick=function(){
        countdown()
}
})

function countdown(){

    let timer = 10;
    setInterval(function(){
        if(timer > 0){
            document.querySelector("#timer").innerHTML = timer 
        }
        else if(timer == 0){
            sveglia();
        }
        
        timer--;

    }, 1000)
}

/*non c'è bisogno di modificare la funzione sveglia()*/
function sveglia()
{
    const audio=document.querySelector("audio");
    audio.currentTime=0.2;
    audio.play();
    document.getElementById("sveglia").style.display="block";
    setTimeout(function(){location.reload()},4800);
}


