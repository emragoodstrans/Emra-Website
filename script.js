// Mobile nav
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
if(toggle){
  toggle.addEventListener('click', ()=>{
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
