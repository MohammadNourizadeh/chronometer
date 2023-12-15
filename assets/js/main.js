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

        const clockInput = document.getElementById('clock-input');

        const time = new Date();
        const h = time.getHours();
        const m = time.getMinutes();
        const s = time.getSeconds();
        hour = h < 10 ? '0' + h : h;
        minutes = m < 10 ? '0' + m : m;
        second = s < 10 ? '0' + s : s;

        clockInput.value = hour + ':' + minutes + ':' + second;

        console.log(second);

    }, 1000)

    clock.innerHTML = `
            <div class="row flex-column justify-content-center align-items-center">
                <div class="col h2 d-flex"><input type="text" class = "border-0" id="clock-input" value="${hour}:${minutes}:${second}"></div>
            </div>
            `;

    king.appendChild(clock);

})