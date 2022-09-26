const polBtn = document.getElementById('policy-btn')
const polCont = document.getElementById('pol-container')
const polCloser = document.getElementById('pol-closer')

let closerControl = false
let polControl = false

polBtn.addEventListener('click', () => {
    if (polControl === false) {
        polCont.classList.add('pol-on');
        polCont.classList.remove('pol-off');
        polControl = true
    }
})
polCloser.addEventListener('click', () => {
    if (polControl === true) {
        polCont.classList.remove('pol-on');
        polCont.classList.add('pol-off');
        polControl = false
    }
})