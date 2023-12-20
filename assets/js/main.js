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

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const time = new Date();
    const y = time.getFullYear();
    const mo = time.getMonth();
    const d = time.getDay();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    let year = y;
    let month = months[mo];
    let day = days[d];
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

    console.log(time.getFullYear());
    clock.innerHTML = `
    <div class = 'col w-100 h-100 d-flex flex-column justify-content-center align-items-center position-relative'> 
        <p class='display-1 text-light text-center digital-font w-100' id ='my-clock'>${hour}:${minutes}:${second} </p> 
        <div class = 'd-flex flex-column'>
            <small class = 'text-light' >${day}, ${month}</small>
            <small class = 'text-light' >${year}</small>
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
