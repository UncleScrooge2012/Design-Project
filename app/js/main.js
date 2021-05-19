window.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.querySelector('.menu__icon');       
        
  btnBurger.addEventListener('click', (e) => {
    if(e.target == btnBurger){
      btnBurger.classList.toggle('active');
      document.querySelector('.menu__body').classList.toggle('active');
    }
  });
  
});