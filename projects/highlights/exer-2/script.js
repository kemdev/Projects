// let body = document.body;
// let section = document.createElement('section')

// let container = document.createElement('section')
// let arrowLeft = document.createElement('span')
// arrowLeft.innerHTML += '<i class="fas fa-arrow-left"></i>'
// let arrowRight = document.createElement('span1')
// arrowRight.innerHTML += '<i class="fas fa-arrow-right"></i>'

// let img1 = document.createElement('img')
// let img2 = document.createElement('img')
// let img3 = document.createElement('img')
// let img4 = document.createElement('img')

// body.append(section)
// section.append(container, arrowLeft, arrowRight)
// container.append(img1, img2, img3, img4)
// img1.src = 'img1.jpg'
// img2.src = 'img2.jpg'
// img3.src = 'img3.jpg'
// img4.src = 'img4.jpg'


// body.style.cssText = 'display: grid; place-content: center; height: 100vh'
// section.style.cssText = 'width: 75vw; height: 60vh; margin: auto; display: flex; overflow: hidden; position: relative ';

// let containerHeight = container.offsetHeight;
// container.style.cssText = 'display: flex; position: relative; transition: all 1.5s ease 0s;'
// let img = section.querySelector('img')
//     // arrow left design
// arrowLeft.style.cssText = `color: rgb(255, 255, 255); position: absolute; font-size: 4em; top: 0px; bottom: 0px; background: rgba(0, 0, 0, 0.53); line-height: ${containerHeight}px`
// arrowLeft.classList.add('arrow');
// // arrow right design
// arrowRight.style.cssText = `color: rgb(255, 255, 255); position: absolute; font-size: 4em; top: 0px; bottom: 0px; background: rgba(0, 0, 0, 0.53); line-height: ${containerHeight}px; right: 0`
// arrowRight.classList.add('arrow');

// arrowLeft.addEventListener('click', () => {
//     goLeft()
// })
// let speed = 1.09

// function goLeft() {
//     for (let i = 1; i <= 2; i++) {
//         container.style.transform += `translateX(${-section.offsetWidth * speed}px)`
//         break;
//     }
// }

// function goRight() {
//     let currentTransorm = container.style.transform;
//     //console.log(currentTransorm)
//     for (let i = 1; i <= 2; i++) {
//         container.style.transform = `translateX(${section.offsetWidth * speed}px)`
//         break;
//     }
// }

// function fixEmpty() {
//     // if(container.style.transform > )

// }

// arrowRight.addEventListener('click', () => {
//         goRight()
//     })
//     // window.addEventListener('load', (event) => {
//     //     arrowRight.style.right = (container.offsetWidth - section.offsetWidth) + 'px'
//     // })

let images = document.querySelectorAll('img');
let leftArrow = document.querySelector('span.left');
let rightArrow = document.querySelector('span.right');
let score = 0;

rightArrow.addEventListener('click', function(ev) {
    score++;
    if (score === images.length) {
        score = 0;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${score * -50}vw, 0)`;
    }
});

leftArrow.addEventListener('click', function(ev) {
    score--;
    if (score < 0) {
        score = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${score * -50}vw, 0)`;
    }
});