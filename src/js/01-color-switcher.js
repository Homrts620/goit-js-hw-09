const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop');
const background = document.querySelector("body");

let timerId = null;
stopBtn.disabled = true;


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        background.style.backgroundColor = getRandomHexColor()
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
