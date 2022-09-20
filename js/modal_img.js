let imagenes = [

    {img: "/img/1.jpeg"},
    {img: "/img/2.jpeg"},
    {img: "/img/3.jpeg"},
    {img: "/img/30.jpg"},
    {img: "/img/5.jpeg"},
    {img: "/img/6.jpeg"},
    {img: "/img/7.jpeg"},
    {img: "/img/8.jpeg"},
    {img: "/img/9.jpg"},
    {img: "/img/10.jpg"},
    {img: "/img/11.jpg"},
    {img: "/img/12.jpg"},
    {img: "/img/13.jpg"},
    {img: "/img/14.jpg"},
    {img: "/img/15.jpg"},
    {img: "/img/16.jpg"},
    {img: "/img/17.jpg"},
    {img: "/img/18.jpg"},
    {img: "/img/19.jpg"},
    {img: "/img/20.jpg"},
    {img: "/img/21.jpg"},
    {img: "/img/22.jpg"},
    {img: "/img/23.jpg"},
    {img: "/img/24.jpg"},
    {img: "/img/25.jpg"},
    {img: "/img/26.jpg"},
    {img: "/img/27.jpg"},
    {img: "/img/28.jpg"},
    {img: "/img/4.jpeg"},
    
    {img: "/img/31.jpeg"},
    {img: "/img/32.jpeg"},
    {img: "/img/33.jpeg"},
    {img: "/img/34.jpeg"},

    
    {img: "/img/35.jpeg"},
    {img: "/img/36.jpeg"},
    {img: "/img/37.jpeg"},
    {img: "/img/38.jpeg"},
    
    {img: "/img/39.jpeg"},
    {img: "/img/40.jpeg"},
    {img: "/img/41.jpeg"},
    {img: "/img/42.jpeg"},
    {img: "/img/43.jpeg"},
    {img: "/img/44.jpeg"},
    {img: "/img/45.jpeg"},
    {img: "/img/46.jpeg"},
    {img: "/img/47.jpeg"},
    {img: "/img/48.jpeg"},
    {img: "/img/49.jpeg"},

];

let contador = 0;
const contenedor = document.querySelector(".slideshow");
const overlay = document.querySelector(".overlay");
const galeria_imagenes = document.querySelectorAll(".galeria img");
const img_slideshow = document.querySelector(".slideshow img");

contenedor.addEventListener("click", function (event){
    let atras = contenedor.querySelector(".atras"),
    adelante = contenedor.querySelector(".adelante"),
    img = contenedor.querySelector("img"),
    tgt = event.target

    if (tgt == atras) {
        if(contador > 0){
            img.src = imagenes[contador - 1].img
            contador--
        }else{
            img.src = imagenes[imagenes.length - 1].img
            contador = imagenes.length - 1
        }   
    }else if(tgt == adelante){
        if(contador < imagenes.length - 1){
            img.src = imagenes[contador + 1].img
            contador++
        }else{
            img.src = imagenes[0].img
            contador = 0;
        }
    }
})

Array.from(galeria_imagenes).forEach(img =>{
    img.addEventListener("click", event =>{
        const imagen_seleccionada = +event.target.dataset.imgMostrar
        img_slideshow.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = "visible";
    })
})

document.querySelector(".btn_cerrar").addEventListener("click", () =>{
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
})