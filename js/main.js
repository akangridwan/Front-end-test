// nav
let btnNav= document.querySelector('.header nav .btn-nav'),
    navMenu= document.querySelector('.header nav .nav-menu');

    btnNav.addEventListener('click', ()=>{
        navMenu.classList.toggle('show-drop');
    })