let _timer_text = document.getElementById('timer-text');
let _Progress_bar_value = document.querySelector('.progress-bar-value');
let prog_show = document.getElementById('prog-show');
let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');
let _start_over = document.getElementById('start-over');

let tmp = 0;
let prog;
let progress_started = false;
let _checked = false

//check the checkBox if it is checked when user starts again the program starts the progress bar from beginning

_start_over.addEventListener('click',setReset);
function setReset(){
    _checked = _start_over.checked;
}

//counter with millisecond
function timerCount() {
    let currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    let mil = currentDate.getMilliseconds();
    _timer_text.textContent = h + ' : ' + m + ' : ' + s + ' : ' + mil;
}
window.setInterval(timerCount, 1);




btnStart.addEventListener('click', start_stop_Progress);

//this function used form start and stop progress bar, if the control boolean (progress_start) has a true value it means
//the progress already started and must be stopped now. and vice versa
function start_stop_Progress() {
    if (progress_started == false) {
        //progress must start
        if(_checked==true) {
            _Reset();
        }
        prog = window.setInterval(_progressbar, 500);
        progress_started = true;
        btnStart.textContent = 'Stop';
    } else {
        //progress must stop
        clearInterval(prog);
        progress_started = false;
        btnStart.textContent = 'Start';
    }
}

//function reset if the checkbox checked this functions called from start_stop_Progress function
function _Reset(){
    _Progress_bar_value.style.width = '0%';
    tmp=0;
    prog_show.textContent='0%';
}

//the main function for progress bar
function _progressbar() {
    if (tmp < 100) {
        tmp += 1;
        _Progress_bar_value.style.width = tmp.toString() + '%';
        prog_show.textContent = tmp.toString() + '%';
    }
}
