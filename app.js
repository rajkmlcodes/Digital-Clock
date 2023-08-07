function displayTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('session');


    // this code will check and set- AM or PM according to the time
    if(hours >= 12)
    {
        session.innerHTML = 'PM';
    }
    else
    {
        session.innerHTML = 'AM';
    }

    // this code will remove the 24 hours time format
    if(hours > 12)
    {
        hours = hours - 12;
    }

    // now we are updating the inner HTml text with real time
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(displayTime)