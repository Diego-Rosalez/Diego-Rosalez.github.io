const enlaces = document.getElementsByClassName("enlaces")[0];
const menu = document.getElementsByClassName("menu")[0];
const menui = document.getElementById("menu");
let abierto = false;


const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.4s ease-in-out";
}

menu.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }
    else{
        abierto=false;
    }
})

window.addEventListener("click", function(e){
    if(abierto){
        if(e.target!== menui ){
            toggleMenu();
            abierto = false;
        }
    }
})

window.addEventListener("resize", function(){
    if(screen.width>1000){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto=false;
       }    
    }
})
