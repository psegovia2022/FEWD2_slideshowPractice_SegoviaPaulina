/*
simple slideshow
1. Store all the images
2. assign class of active to an image
3. keep track of which image is currently displayed (.active)
4. keep active class for specified time
5. remove/add the active class to the next image
6. continually loop
*/


//-----------------------------------------------------------
//-----------------------------------------------------------
// FIRST METHOD
//-----------------------------------------------------------
//-----------------------------------------------------------

// const images = document.querySelectorAll('.slideshow img');
// console.log(images);
// let currentIndex = 0;

// function showImage(index) {
//     images[currentIndex].classList.remove('active');
//     images[index].classList.add('active');
//     currentIndex = index;
// }

// setInterval(() => {
//     let nextIndex = currentIndex + 1;
//     if(nextIndex >= images.length) {
//         nextIndex = 0;
//     }
//     showImage(nextIndex);
// }, 3000)


//-----------------------------------------------------------
//-----------------------------------------------------------
// SECOND METHOD
//-----------------------------------------------------------
//-----------------------------------------------------------

const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showImage(index) {
    images[currentIndex].classList.remove('active');
    images[currentIndex].style.opacity = 0;
    images[index].classList.add('active');
    images[index].style.opacity = 1;
    currentIndex = index;
}

images.forEach((image, index) => {
    image.style.opacity = 0;
    image.addEventListener('load', () => {
        if(index === 0) {
            image.classList.add('active');
            image.style.opacity = 1;
        }
    })
})

setInterval(() => {
    let nextIndex = currentIndex + 1;
    if(nextIndex >= images.length) {
        nextIndex = 0;
    }
    showImage(nextIndex);
}, 3000);














// let time = 3000;

// images[currentIndex].classList.add('active');

// setInterval( () => {
//     images[currentIndex].classList.remove('active');
//     currentIndex++;
  
//     if (currentIndex === images.length) {
//         index = 0; 
    
//     images[currentIndex].classList.add('active');
//     }
//   }, time);


// for(i = currentIndex; i <= images.length; i++) {
//     images.forEach(img => {
//         img[currentIndex].classList.add('active');
//     })
// }



// for(i = currentIndex; i <= images.length; i++) {
//     images.forEach(img => {
//         img[currentIndex].classList.add('active');
//         img.classList.remove('.active');
//     })
// }
