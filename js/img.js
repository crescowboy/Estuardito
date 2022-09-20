const img = document.querySelector(".img");


function ampliarImagen(){
    img.classList.toggle("img_grande");
    
}

img.addEventListener("click", ampliarImagen);