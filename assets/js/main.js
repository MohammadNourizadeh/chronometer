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