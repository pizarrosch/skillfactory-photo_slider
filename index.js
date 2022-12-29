// const imageContent = [
//   {
//     img: 'images/admiral-apt.png',
//     func1: function () {
//       firstImage.classList.add('anchor-gold');
//       secondImage.classList.remove('anchor-gold');
//       thirdImage.classList.remove('anchor-gold');
//     },
//     func2: function () {
//       firstCircle.classList.add('circle-white');
//       secondCircle.classList.remove('circle-white');
//       thirdCircle.classList.remove('circle-white');
//     }
//   },
//   {
//     img: 'images/sochi-thieves.png',
//     func1: function () {
//       firstImage.classList.remove('anchor-gold');
//       secondImage.classList.add('anchor-gold');
//       thirdImage.classList.remove('anchor-gold');
//     },
//     func2: function () {
//       firstCircle.classList.remove('circle-white');
//       secondCircle.classList.add('circle-white');
//       thirdCircle.classList.remove('circle-white');
//     }
//   },
//   {
//     img: 'images/patriotic.png',
//     func1: function () {
//       firstImage.classList.remove('anchor-gold');
//       secondImage.classList.remove('anchor-gold');
//       thirdImage.classList.add('anchor-gold');
//     },
//     func2: function () {
//       firstCircle.classList.remove('circle-white');
//       secondCircle.classList.remove('circle-white');
//       thirdCircle.classList.add('circle-white');
//     }
//   }
// ]
//
// const imageContainer = document.querySelector('.image');
// const firstImage = document.querySelector('.first-link');
// const secondImage = document.querySelector('.second-link');
// const thirdImage = document.querySelector('.third-link');
//
// firstImage.onclick = function () {
//   imageContainer.style.backgroundImage = `url(${imageContent[0].img})`;
//   imageContent[0].func1();
//   imageContent[0].func2()
// }
//
// secondImage.onclick = function () {
//   imageContainer.style.backgroundImage = `url(${imageContent[1].img})`;
//   imageContent[1].func1();
//   imageContent[1].func2()
// }
//
// thirdImage.onclick = function () {
//   imageContainer.style.backgroundImage = `url(${imageContent[2].img})`;
//   imageContent[2].func1();
//   imageContent[2].func2()
// }
//
// const firstCircle = document.querySelector('.circle-one');
// const secondCircle = document.querySelector('.circle-two');
// const thirdCircle = document.querySelector('.circle-three');
//
// firstCircle.onclick = function () {
//   imageContainer.style.backgroundImage = `url(${imageContent[0].img})`;
//   imageContent[0].func1();
//   imageContent[0].func2()
// }
//
// secondCircle.onclick = function () {
//   imageContainer.style.backgroundImage = `url(${imageContent[1].img})`;
//   imageContent[1].func1();
//   imageContent[1].func2()
// }
//
// thirdCircle.onclick = function () {
//   imageContainer.style.backgroundImage = `url(${imageContent[2].img})`;
//   imageContent[2].func1();
//   imageContent[2].func2()
// }
//
// const setImage = function (i) {
//   imageContainer.style.backgroundImage = `url(${imageContent[i].img})`;
//   imageContent[i].func1();
//   imageContent[i].func2()
// }
//
// const rightArrow = document.querySelector(".right-line");
// const leftArrow = document.querySelector(".left-line");
//
// let currentIndex = 0;
//
// rightArrow.addEventListener('click', function() {
//   setImage(currentIndex + 1);
//   currentIndex += 1;
//   for(let i = 0; i <= imageContent.length; i++) {
//     if(i > imageContent.length) {
//       setImage(0);
//     }
//   }
//
// })
//
// leftArrow.addEventListener('click', function() {
//   setImage(currentIndex - 1);
//   currentIndex -= 1;
//
// })