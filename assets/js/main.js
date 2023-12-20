const choronometerPage = document.getElementById('chronometer-col');
const clockPage = document.getElementById('clock-col');
const king = document.getElementById('king');


// ...... chronometer page ......
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


// ...... clock page ......
clockPage.addEventListener('click', () => {
    king.innerHTML = '';
    king.style.background = 'rgb(25, 25, 25)'

    const time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    let hour = h < 10 ? '0' + h : h;
    let minutes = m < 10 ? '0' + m : m;
    let second = s < 10 ? '0' + s : s;;

    const clock = document.createElement('div');
    clock.classList.add('row', 'vh-100', 'vw-100', 'justify-content-center', 'align-items-center');

    setInterval(() => {

        const time = new Date();
        const h = time.getHours();
        const m = time.getMinutes();
        const s = time.getSeconds();
        hour = h < 10 ? '0' + h : h;
        minutes = m < 10 ? '0' + m : m;
        second = s < 10 ? '0' + s : s;

        const myClock = document.getElementById('my-clock');

        myClock.innerText = hour + ':' + minutes + ':' + second;
    }, 1000)

    clock.innerHTML = `
                <div class = 'col w-100 h-100 d-flex align-items-center position-relative'> 
                    <p class='display-1 text-light text-center digital-font w-100' id ='my-clock'>${hour}:${minutes}:${second} </p> 
                    <button class="btn btn-dark position-absolute top-0 mt-3 back-btn rounded-5" id='back-btn'>back</button>
                </div>
            `;

    king.appendChild(clock);

})
