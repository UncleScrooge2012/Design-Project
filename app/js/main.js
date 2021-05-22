window.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.querySelector('.menu__icon'),       
        menuBody = document.querySelector('.menu__body'),        
        documentClientWidth = document.documentElement.clientWidth;      
        
  btnBurger.addEventListener('click', (e) => {
    if(e.target == btnBurger){
      btnBurger.classList.toggle('active');
      document.querySelector('.menu__body').classList.toggle('active');
    }
  });
  
  const menuBtn = document.createElement('a');
  
  if(documentClientWidth < 490 ){       
    menuBtn.classList.add('menu__btn', 'btn');
    menuBtn.textContent = 'Заказать звонок';
    
    menuBody.append(menuBtn);
  } else {
    menuBtn.remove();
   
  }



});