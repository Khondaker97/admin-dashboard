const sideMenu = document.querySelector('aside');
const closeBtn = document.querySelector('#close-btn');
const menuBtn = document.querySelector('#menu-btn');
const themeToggle = document.querySelector('.theme-toggler');


//Show Sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
});

//Close Sidebar 
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})

//Change theme
themeToggle.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})