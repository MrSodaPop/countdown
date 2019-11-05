$(document).ready(function(){
    init();
    setInterval(init,1000);
})

var init = function() {
    var timeRemaining = 1.5734356e+12 - Date.now()
    var hours = Math.floor(timeRemaining / 3600000);
    var days = Math.floor(hours / 24);
    hours = hours % 24
    var minutes = Math.floor((timeRemaining / 1000 - days*24*3600 - hours*3600) / 60);
    var seconds = Math.floor(timeRemaining / 1000 - days*24*3600 - hours*3600 - minutes * 60);
    if (days.toString().length === 1) {
        days = '0' + days.toString();
    }
    if (hours.toString().length === 1) {
        hours = '0' + hours.toString();
    }
    if (minutes.toString().length === 1) {
        minutes = '0' + minutes.toString();
    }
    if (seconds.toString().length === 1) {
        seconds = '0' + seconds.toString();
    }
    if (timeRemaining <= 0) {
        $('#clock').text('00 : 00 : 00 : 00');
        clearInterval(init);
    }
    else {
        $('#clock').text(days +' : ' + hours + ' : ' + minutes + ' : ' + seconds)
    }
    
}