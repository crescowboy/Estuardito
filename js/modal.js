const galeria = document.querySelector(".galeria img");

document.querySelectorAll(".galeria img").forEach(el=>{
    el.addEventListener("click",  function(ev){
        ev.stopPropagation();
        el.parentNode.classList.add("active");
        galeria.src = el.src;
        console.log("click");
        console.log(el);
    })
});

document.querySelectorAll(".galeria").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.classList.remove("active");
    })
})

