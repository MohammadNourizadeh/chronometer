const choronometerPage = document.getElementById('chronometer-col');
const clockPage = document.getElementById('clock-col');
const king = document.getElementById('king');

choronometerPage.addEventListener('click', () => {
    king.innerHTML = '';

    const second = '00';
    const minutes = '00';
    const hour = '00';

    const chronometer = document.createElement('div');
    chronometer.classList.add('container', 'vh-100', 'vw-100', 'd-flex', 'justify-content-center', 'align-items-center');

    chronometer.innerHTML = `
    <div class="row flex-column justify-content-center align-items-center">
        <div class="col h2 p-5 text-center d-flex"><p class = "mx-5">${hour}</p> : <p class = "mx-5">${minutes}</p> : <p class = "mx-5">${second}</p></div>
        <div class="col d-flex justify-content-center h2"><button class="btn btn-success px-5">start</button></div>
    </div>
    `;

    king.appendChild(chronometer);
})


clockPage.addEventListener('click', () => {
    king.innerHTML = '';
    king.style.background = 'rgb(25, 25, 25)'

    const time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    let hour = h;
    let minutes = m;
    let second = s;

    const clock = document.createElement('div');
    clock.classList.add('container', 'vh-100', 'vw-100', 'd-flex', 'justify-content-center', 'align-items-center');

    setInterval(() => {

        const time = new Date();
        const h = time.getHours();
        const m = time.getMinutes();
        const s = time.getSeconds();
        hour = h < 10 ? '0' + h : h;
        minutes = m < 10 ? '0' + m : m;
        second = s < 10 ? '0' + s : s;

        const myHour = document.getElementById('my-hour');
        const myMinutes = document.getElementById('my-minutes');
        const mysecond = document.getElementById('my-second');

        myHour.innerText = hour;
        myMinutes.innerText = minutes;
        mysecond.innerText = second;
    }, 1000)

    clock.innerHTML = `
            <div class="row">
                <div class="col d-flex"><p class = "mx-5 digital-font" id ="my-hour" style="color: white;">${hour}</p> <span class = "digital-font" style="color: white;">:</span> <p class = "mx-5 digital-font" id ="my-minutes" style="color: white;">${minutes}</p> <span class = "digital-font" style="color: white;">:</span> <p class = "mx-5 digital-font" id ="my-second" style="color: white;">${second}</p></div>
            </div>
            `;

    king.appendChild(clock);

})