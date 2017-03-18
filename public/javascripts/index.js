var deadline = '07 Apr 2017 22:00:00';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);

  var daysSpan = document.getElementById('days');
  var hoursSpan = document.getElementById('hours');
  var minutesSpan = document.getElementById('minutes');
  if (screen.width>=641) {
    var secondsSpan = document.getElementById('seconds');
  }

  function updateClock(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total<=0){
      clearInterval(timeinterval);
      clock.innerHTML = 'Nes 49, 1012 KD Amsterdam, Netherlands';
    }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);
}

function formatTimeLeft (days, hours, minutes, seconds){
  daysSpan.innerHTML
}

initializeClock('clock', deadline);
