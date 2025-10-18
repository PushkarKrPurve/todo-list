const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click',()=>{
    menu.classList.remove('-top-50');
    menu.classList.add("top-[45px]");
    open.classList.add('hidden');
    close.classList.remove('hidden'); 
})

close.addEventListener('click', ()=>{
    menu.classList.remove("top-[45px]");
    menu.classList.add("-top-50");
    open.classList.remove('hidden');
    close.classList.add('hidden');
})