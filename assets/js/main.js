const choronometerPage = document.getElementById('chronometer-col');
const clockPage = document.getElementById('clock-col');
const king = document.getElementById('king');

// ........... variable ............

//chronometer variable
let sec = 0;
let min = 0;
let hou = 0;
let sumSec = 0;
let sumMin = 0;
let sumHou = 0;
let secondChanger;
let minChanger;
let houChanger;



//clock variable
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let time = new Date();
let y = time.getFullYear();
let mo = time.getMonth();
let d = time.getDay();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let year = y;
let month = months[mo];
let day = days[d];
let hour = h < 10 ? '0' + h : h;
let minutes = m < 10 ? '0' + m : m;
let second = s < 10 ? '0' + s : s;;




// ............ functions ..............

// chronometer functions
const start = () => {
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const stopBtn = document.getElementById('stop-btn');

    startBtn.classList.add('d-none');
    resetBtn.classList.remove('d-none');
    stopBtn.classList.remove('d-none');

    secondChanger = setInterval(() => {
        sumSec = +sec + 1
        if (sumSec === 60) {
            sec = '00';
        } else {
            sec = sumSec < 10 ? '0' + sumSec : sumSec;
        }

        const second = document.getElementById('second').innerText = sec;
    }, 1000)

    minChanger = setInterval(() => {
        if (sumSec === 60) {
            sumMin = +min + 1;
        }

        if (sumMin > 59) {
            min = '00';
        } else {
            min = sumMin < 10 ? '0' + sumMin : sumMin;
        }

        const minutes = document.getElementById('minutes').innerText = min;
    }, 1000)

    houChanger = setInterval(() => {
        if (sumMin === 60) {
            sumHou = +hou + 1;
        }

        if (sumHou > 59) {
            hou = '00';
        } else {
            hou = sumHou < 10 ? '0' + sumHou : sumHou;
        }

        const hours = document.getElementById('hours').innerText = hou;
    }, 1000)
}

const stop = () => {
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resumeBtn = document.getElementById('resume-btn');

    resetBtn.classList.remove('disabled');
    stopBtn.classList.add('d-none');
    resumeBtn.classList.remove('d-none');

    clearInterval(secondChanger);
    clearInterval(minChanger);
    clearInterval(houChanger);
}

const reset = () => {
    const resumeBtn = document.getElementById('resume-btn');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');

    resetBtn.classList.add('d-none', 'disabled');
    startBtn.classList.remove('d-none');
    resumeBtn.classList.add('d-none');

    sec = 0;
    min = 0;
    hou = 0;

    const second = document.getElementById('second').innerText = '0' + sec;
    const minutes = document.getElementById('minutes').innerText = '0' + min;
    const hours = document.getElementById('hours').innerText = '0' + hou;
}

const resume = () => {
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resumeBtn = document.getElementById('resume-btn');

    resetBtn.classList.add('disabled');
    stopBtn.classList.remove('d-none');
    resumeBtn.classList.add('d-none');

    secondChanger = setInterval(() => {
        sumSec = +sec + 1
        if (sumSec === 60) {
            sec = '00';
        } else {
            sec = sumSec < 10 ? '0' + sumSec : sumSec;
        }

        const second = document.getElementById('second').innerText = sec;
    }, 1000)

    minChanger = setInterval(() => {
        if (sumSec === 60) {
            sumMin = +min + 1;
        }

        if (sumMin > 59) {
            min = '00';
        } else {
            min = sumMin < 10 ? '0' + sumMin : sumMin;
        }

        const minutes = document.getElementById('minutes').innerText = min;
    }, 1000)
}




// ........... chronometer page ...........
choronometerPage.addEventListener('click', () => {
    king.innerHTML = '';

    const chronometer = document.createElement('div');
    chronometer.classList.add('row', 'vh-100', 'vw-100', 'justify-content-center', 'align-items-center', 'chronometer-row', 'position-relative');

    sumSec = 0;
    sumMin = 0;
    sumHou = 0;
    sec = sumSec < 10 ? '0' + sumSec : sumSec;
    min = sumMin < 10 ? '0' + sumMin : sumMin;
    hou = sumHou < 10 ? '0' + sumHou : sumHou;

    chronometer.innerHTML = `
        <div class="col d-flex flex-column justify-content-center align-items-center chronometer-div">
            <div class="p-5 rounded-4 bg-light shadow">
                <div class="numbers">
                    <p class="mx-5 text-center display-6">
                        <span id='hours'>${hou}</span>
                        <span>:</span>
                        <span id='minutes'>${min}</span>
                        <span>:</span>
                        <span id='second'>${sec}</span>
                    </p>
                </div>
                <div class="d-flex justify-content-center btns">
                    <button class="btn btn-outline-success mx-2 px-4" id="start-btn" onclick="start()">start</button>
                    <button class="btn btn-outline-secondary mx-2 px-4 d-none disabled" id="reset-btn" onclick="reset()">reset</button>
                    <button class="btn btn-outline-danger mx-2 px-4 d-none" id="stop-btn" onclick="stop()">stop</button>
                    <button class="btn btn-outline-success mx-2 px-3 d-none" id="resume-btn" onclick="resume()">resume</button>
                </div>
            </div>
        </div>
    `;

    // here i created my back-btn
    const backBtn = document.createElement('div');
    backBtn.classList.add('position-absolute', 'top-0', 'mt-3');
    backBtn.innerHTML = `    <button class="btn btn-dark rounded-5 back-btn">back</button>    `;

    // my back-btn eventlistener
    backBtn.addEventListener('click', () => {
        location.reload();
    })

    chronometer.appendChild(backBtn);
    king.appendChild(chronometer);
})




// ............... clock page ...............
clockPage.addEventListener('click', () => {
    king.innerHTML = '';

    const clock = document.createElement('div');
    clock.classList.add('row', 'vh-100', 'vw-100', 'justify-content-center', 'align-items-center', 'position-relative');

    setInterval(() => {

        time = new Date();
        y = time.getFullYear();
        mo = time.getMonth();
        d = time.getDay();
        h = time.getHours();
        m = time.getMinutes();
        s = time.getSeconds();
        year = y;
        month = months[mo];
        day = days[d];
        hour = h < 10 ? '0' + h : h;
        minutes = m < 10 ? '0' + m : m;
        second = s < 10 ? '0' + s : s;;

        const myClock = document.getElementById('my-clock').innerText = hour + ':' + minutes + ':' + second;
        const myWeekDay = document.getElementById('my-week-day').innerText = day;
        const myYear = document.getElementById('my-year').innerText = month + ',' + year;

    }, 1000)

    clock.innerHTML = `
    <div class = 'col w-100 h-100 d-flex justify-content-center align-items-center date-container'> 
            <div class = 'd-flex flex-column align-items-center p-5 text-bg-light rounded-4 shadow date-div'>
                <p class='display-1 text-center digital-font' id ='my-clock'>${hour}:${minutes}:${second}</p> 
                <span class='week-day' id='my-week-day'>${day}</span>
                <span class='year' id='my-year'>${month}, ${year}</span>
            </div>
    </div>
        `;

    // here i created my back-btn
    const backBtn = document.createElement('div');
    backBtn.classList.add('position-absolute', 'top-0', 'mt-3');
    backBtn.innerHTML = `    <button class="btn btn-dark rounded-5 back-btn">back</button>    `;

    // my back-btn eventlistener
    backBtn.addEventListener('click', () => {
        location.reload();
    })

    clock.appendChild(backBtn);
    king.appendChild(clock);

})
