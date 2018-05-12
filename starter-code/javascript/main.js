var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(seconds, minutes) {
    printSeconds(seconds);
    printMinutes(minutes);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {

    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    chronos.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
}

function setSplitBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
}

function setStartBtn() {
    chronos.stopClick();
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
}

function setResetBtn() {
    chronos.resetClick();
    printMinutes("00");
    printSeconds("00");
    
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        setStopBtn();
    } else if (btnLeft.innerHTML === "STOP"){
        setStartBtn();
    }
    // chronos.startClick();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    
    if (btnRight.innerHTML === "SPLIT"){
        setSplitBtn();
    } else if (btnRight.innerHTML === "RESET"){
        setResetBtn();   
    }
});

let chronos = new Chronometer();