const imageContent = [
  {
    img: 'images/admiral-apt.png',
    text: 'Rostov-on-Don, Admiral',
    apt: `Rostov-on-Don <br> LCD admiral`,
    area: '81m2',
    repair_time: '3.5 months'
  },
  {
    img: 'images/sochi-thieves.png',
    text: 'Sochi Thieves',
    apt: `Sochi <br> Thieves`,
    area: '105m2',
    repair_time: '4 months'
  },
  {
    img: 'images/patriotic.png',
    text: 'Rostov-on-Don Patriotic',
    apt: `Rostov-on-Don <br> Patriotic`,
    area: '93m2',
    repair_time: '3 months'
  }
]

function setSlider() {
  let imageContainer = document.querySelector('.images');
  let arrowContainer = document.querySelector('.arrow-container');
  let dotContainer = document.querySelector('.dot-container');
  let aptNameContainer = document.querySelector('.list-container');
  let cityDescription = document.querySelector('.city-description');
  let areaDescription = document.querySelector('.area-description');
  let timeDescription = document.querySelector('.time-description');
  let request = document.querySelector('.request');

  function setImages() {
    imageContent.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? 'active' : 'inactive'}" style="background-image: url(${imageContent[index].img})" data-index='${index}'></div>`;
      imageContainer.innerHTML += imageDiv;
    })
  }

  function setDots() {
    imageContent.forEach((image, index) => {
      let dot = `<div class="circle n${index} ${index === 0 ? 'circle-white' : ''}" data-index='${index}'></div>`;
      dotContainer.innerHTML += dot;
    })
    dotContainer.querySelectorAll('.circle').forEach(dot => {
      dot.addEventListener('click', function () {
        moveSlider(this.dataset.index);
        dotContainer.querySelector('.circle-white').classList.remove('circle-white');
        this.classList.add('circle-white');
      })
    })
  }

  function setArrows() {
    arrowContainer.querySelectorAll('.line').forEach(arrow => {
      arrow.addEventListener('click', function () {
        let currentNumber = +imageContainer.querySelector('.active').dataset.index;
        let nextNum;
        if (arrow.classList.contains('left-line')) {
          nextNum = currentNumber === 0 ? imageContent.length - 1 : currentNumber - 1;
        } else {
          nextNum = currentNumber === imageContent.length - 1 ? 0 : currentNumber + 1;
        }
        moveSlider(nextNum);
      })
    })
  }

  function setDescription() {
    imageContent.forEach((image, index) => {
      let firstDescription = `<p class="description-paragraph p${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${imageContent[index].apt}</p>`
      let secondDescription = `<p class="description-paragraph p${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${imageContent[index].area}</p>`
      let thirdDescription = `<p class="description-paragraph p${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${imageContent[index].repair_time}</p>`
      let uponRequest = `<p class="description-paragraph p${index} ${index === 0 ? 'active' : ''}" data-index="${index}">Upon request</p>`
      cityDescription.innerHTML += firstDescription;
      areaDescription.innerHTML += secondDescription;
      timeDescription.innerHTML += thirdDescription;
      request.innerHTML += uponRequest;
    })
  }

  function setPicNames() {
    imageContent.forEach((image, index) => {
      let picName = `<li class="list-container-content n${index} ${index === 0 ? 'anchor-gold' : ''}" data-index="${index}">${imageContent[index].text}</li>`;
      aptNameContainer.innerHTML += picName;
    })

    aptNameContainer.querySelectorAll('.list-container-content').forEach(name => {
      name.addEventListener('click', function () {
        moveSlider(this.dataset.index);
      })
    })
  }

  function moveSlider(num) {
    imageContainer.querySelector('.active').classList.remove('active');
    imageContainer.querySelector('.n' + num).classList.add('active');
    dotContainer.querySelector('.circle-white').classList.remove('circle-white');
    dotContainer.querySelector('.n' + num).classList.add('circle-white');
    aptNameContainer.querySelector('.anchor-gold').classList.remove('anchor-gold');
    aptNameContainer.querySelector('.n' + num).classList.add('anchor-gold');
    cityDescription.querySelector('.active').classList.remove('active');
    cityDescription.querySelector('.p' + num).classList.add('active');
    areaDescription.querySelector('.active').classList.remove('active');
    areaDescription.querySelector('.p' + num).classList.add('active');
    timeDescription.querySelector('.active').classList.remove('active');
    timeDescription.querySelector('.p' + num).classList.add('active');
    request.querySelector('.active').classList.remove('active');
    request.querySelector('.p' + num).classList.add('active');
  }

  setImages();
  setArrows();
  setDots();
  setPicNames();
  setDescription();
}

document.addEventListener('DOMContentLoaded', setSlider);