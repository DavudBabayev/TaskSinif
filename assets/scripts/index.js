//////////NAVBAR//////////

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    }
    else{
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
});

//////////MENU//////////

const menu = document.querySelector(".menu-div");
function hideMenu() {
    document.querySelector(".menu-bg").style.display = "none";
}

document.querySelector("#click").addEventListener("click", ()=>{
    event.preventDefault();
    document.querySelector(".menu-bg").style.display = "block";
});

document.querySelector(".close").addEventListener("click", hideMenu());

document.addEventListener("click", (e)=>{
    if(!menu.contains(e.target) && e.target !== document.querySelector("#click")){
        hideMenu();
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hideMenu();
    }});

//////////DATA//////////