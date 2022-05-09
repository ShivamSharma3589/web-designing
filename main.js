let timer = 500;
const header = document.querySelector('.header');
const bgSlider = document.querySelector('.bg-slider');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const blanket = document.querySelector('.blanket');
const main = document.querySelector('.main')
const bubble = document.querySelectorAll('.bubble')
const navItem = document.getElementsByClassName('nav-item');

addEventListener('load', () =>{
    setTimeout(() => {
        bgSlider.style.left = '0'
    }, timer);
    setTimeout(() => {
        msg1.style.left = '0'
    }, timer += 1000);
    setTimeout(() => {
        msg2.style.left = '0'
    }, timer += 3000);
    setTimeout(() => {
        msg1.style.top = '-100vh'
    }, timer += 1000);
    setTimeout(() => {
        msg2.style.top = '-100vh'
        bgSlider.style.left = '100vw'
    }, timer += 2000);
    setTimeout(() => {
        blanket.style.top = '100vh'
    }, timer += 1000);
    setTimeout(() => {
        header.style.display = 'none'
        header.innerHTML = ''
        main.style.display = 'flex'
        for (let i = 0; i < bubble.length; i++) {
            bubble[i].style.display = 'block'
        }
    }, timer += 1000);
})
