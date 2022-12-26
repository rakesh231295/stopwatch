// variable declare
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timer');
let int = null;


// start event function
document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(display,10);
});

// pause event function
document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int);
});

// reset event function
document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});


//display function
function display(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;  // when 1000ms increase the second
        if(seconds == 60){
            seconds = 0;
            minutes++;  // when 60s increase the minutes
            if(minutes == 60){
                minutes = 0;
                hours++;    // when 60m increase the hour
            }
        }
    }


    //concatenates milliseconds,seconds,minutes,hours
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
