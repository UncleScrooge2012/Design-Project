window.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.querySelector('.menu__icon'),
    menuBody = document.querySelector('.menu__body'),
    documentClientWidth = document.documentElement.clientWidth;

  btnBurger.addEventListener('click', (e) => {
    if (e.target == btnBurger) {
      btnBurger.classList.toggle('active');
      document.querySelector('.menu__body').classList.toggle('active');
    }
  });

  const menuBtn = document.createElement('a');

  if (documentClientWidth < 490) {
    menuBtn.classList.add('menu__btn', 'btn');
    menuBtn.textContent = 'Заказать звонок';

    menuBody.append(menuBtn);
  } else {
    menuBtn.remove();

  }

  ////// slider
  const slideImg = document.querySelectorAll('.slider__img'),
    slideArrowLeft = document.querySelector('.arrow-left'),
    slideArrowRigth = document.querySelector('.arrow-right'),
    slideTabs = document.querySelector('.slider__tabs'),
    slideTab = slideTabs.querySelectorAll('.slider__tab'),
    slideWrapper = document.querySelector('[data-slider]'),
    slideField = document.querySelector('.slider__inner'),
    sliderWidth = window.getComputedStyle(slideWrapper).width,
    dots = [];

  const createTabs = index => {
    slideTabs.innerHTML = '';
    for (let i = 0; i < index; i++) {
      const tab = document.createElement('span');
      tab.setAttribute('data-slide-to', i);
      tab.classList.add('slider__tab');
      if (i == 0) {
        tab.classList.add('slider__tab', 'active');
      }
      slideTabs.append(tab);
      dots.push(tab);

    }

  };

  let sliderIndex = 0,
    offset = 0;

  slideField.style.width = 100 * slideImg.length + '%';

  slideImg.forEach(img => {
    img.style.width = sliderWidth;
  });

  slideArrowRigth.addEventListener('click', e => {
    if (offset == +sliderWidth.slice(0, sliderWidth.length - 2) * (slideImg.length - 1)) {
      offset = 0;
    } else {
      offset += +sliderWidth.slice(0, sliderWidth.length - 2);
    }

    slideField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex == slideImg.length - 1) {
      sliderIndex = 0;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[sliderIndex].classList.add('active');

    } else {
      sliderIndex++;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[sliderIndex].classList.add('active');

    }



  });

  slideArrowLeft.addEventListener('click', e => {
    if (offset == 0) {
      offset = +sliderWidth.slice(0, sliderWidth.length - 2) * (slideImg.length - 1);
    } else {
      offset -= +sliderWidth.slice(0, sliderWidth.length - 2);
    }

    slideField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex == 0) {
      sliderIndex = slideImg.length - 1;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[sliderIndex].classList.add('active');

    } else {
      sliderIndex--;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[sliderIndex].classList.add('active');

    }

  });

  // dots.forEach(dot => {
  //   dot.addEventListener('click', e => {      
  //     const slideTo = e.target.getAttribute('data-slide-to');
      
  //     sliderIndex = slideTo;
  //     offset = +sliderWidth.slice(0, sliderWidth.length - 2) * (slideTo - 1);
  //     slideField.style.transform = `translateX(-${offset}px)`;
  //     dots.forEach(dot => dot.classList.remove('active'));
  //     dots[sliderIndex].classList.add('active');

  //   });
  // });

  
  // const showSlider = n => {

  //   if( n > slideImg.length - 1 ){
  //     sliderIndex = 0;
  //   }

  //   if( n < 0 ){
  //     sliderIndex = slideImg.length - 1;
  //   }
  //   slideImg.forEach(img => {        
  //       img.classList.add('hiden');     
  //       img.classList.remove('show');
  //   });

  //   slideImg[sliderIndex].classList.add('show');
  //   slideImg[sliderIndex].classList.remove('hiden');

  // };

  // const plusSlides = n =>{
  //   showSlider(sliderIndex += n);
  // };



  // slideArrowLeft.addEventListener('click',  e => {
  //   plusSlides(-1);
  // });
  // slideArrowRigth.addEventListener('click',  e => {
  //   plusSlides(1);
  // });


  createTabs(slideImg.length);
  // showSlider(sliderIndex);


});