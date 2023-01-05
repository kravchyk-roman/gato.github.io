const navDrop = document.querySelectorAll('.nav-item');
const select = document.querySelectorAll('.select');

const navBtn = document.querySelector('.nav-btn');
const mobNav = document.querySelector('.nav-block');
const body = document.querySelector('body');


navBtn.addEventListener('click', () => {
  mobNav.classList.toggle('active');
  body.classList.toggle('nav-open');
});
 
navDrop.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

select.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

 




