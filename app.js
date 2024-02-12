let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let blue = document.querySelector('.blue')
let black = document.querySelector('.black')
let white = document.querySelector('.white')
let objects = document.querySelectorAll('.object');


red.addEventListener('click', () => {
    objects.forEach(object => {
        if (object.style.background !== 'red') {
            object.style.background = 'red';
        } else {
            object.style.background = 'white';
        }
    });
})
yellow.addEventListener('click', () => {
    objects.forEach(object => {
        if (object.style.background !== 'yellow') {
            object.style.background = 'yellow';
        } else {
            object.style.background = 'white';
        }
    });
})
blue.addEventListener('click', () => {
    objects.forEach(object => {
        if (object.style.background !== '#2596be') {
            object.style.background = '#2596be';
        } else {
            object.style.background = 'white';
        }
    });
})
black.addEventListener('click', () => {
    objects.forEach(object => {
        if (object.style.background !== 'black') {
            object.style.background = 'black';
        } else {
            object.style.background = 'white';
        }
    });
})
white.addEventListener('click', () => {
    objects.forEach(object => {
        object.style.background = 'white';
    });
})