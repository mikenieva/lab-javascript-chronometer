// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "0";
    this.seconds = "0";
}

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return parseInt(this.currentTime % 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    let result;
    if(number < 10){
        result = "0" + number.toString();
   } else {
        result = number.toString();
   }
   
   return result;
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};


Chronometer.prototype.startClick = function () {
    var chronos = this;
    this.intervalId = setInterval(function(){
        chronos.currentTime++;
        // console.log(chronos.currentTime);
        chronos.setTime();
        printTime(chronos.seconds, chronos.minutes);
    },1000);
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
