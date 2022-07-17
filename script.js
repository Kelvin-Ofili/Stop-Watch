let seconds = 00;
let tens = 00;
const appendTens = document.querySelector('#tens')
const appendSeconds = document.querySelector('#seconds')
const buttonStart = document.querySelector('#button-start')
const buttonStop = document.querySelector('#button-stop')
const buttonReset = document.querySelector('#button-reset')
let interval;

function startTimer(){
    tens ++
    if(tens < 9){
        appendTens.innerHTML = "0" + tens
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds ++;
        appendSeconds.innerHTML = "0" + seconds
        tens = 0;
        appendTens.innerHTML= "0" + 0
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
}

buttonStart.addEventListener("click", () => {
    interval = setInterval(startTimer);
})

buttonStop.addEventListener("click", () => {
    clearInterval(interval)
})

buttonReset.addEventListener("click", () => {
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
})