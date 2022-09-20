const menu = document.querySelector(".menu");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

open_menu.addEventListener("click", toggleMenu);
close_menu.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        const id = entry.target.getAttribute("id");
        const menuLinks = document.querySelector(`.menu a[href="#${id}"]`);
    
        if(entry.isIntersecting){
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLinks.classList.add("selected");
        }
    });
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    });

    const hash = menuLinks.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
})