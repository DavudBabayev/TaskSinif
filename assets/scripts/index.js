//////////NAVBAR//////////

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    }
    else {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
});

//////////MENU//////////

const menu = document.querySelector(".menu-div");
function hideMenu() {
    document.querySelector(".menu-bg").style.display = "none";
}

document.querySelector("#click").addEventListener("click", () => {
    event.preventDefault();
    document.querySelector(".menu-bg").style.display = "block";
});

document.querySelector(".close").addEventListener("click", hideMenu());

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== document.querySelector("#click")) {
        hideMenu();
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hideMenu();
    }
});

//////////DATA//////////

let cardnum = 3;
function showPage(){

fetch('http://localhost:3000/card')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.slice(cardnum - 3, cardnum).forEach(card => {
            document.querySelector(".sec22").innerHTML += `
    <div>
    <img src="${card.image}" alt="">
    <a href="#"></a>
        <h4>${card.link}</h4>
    </a>
    <p>${card.text}</p>
    <span>
        <a><button  onclick="deleteCard(${card.id})" class="delete"><i class="bi bi-trash"></i> Delete</button></a>
        <a href="../update.html?id=${card.id}"><button class="update"><i class="bi bi-arrow-repeat"></i> Update</button></a>
        <a href="../info.html?id=${card.id}"><button class="info"><i class="bi bi-info-circle"></i> Info</button></a>
    </span>
    <i class="bi bi-heart" id="heart"></i>
    <i class="bi bi-heart-fill" id="heartFill"></i>
    </div>
    `})
    })
};
showPage()

document.querySelector(".load").addEventListener("click", ()=>{
    cardnum +=3;
    showPage()
})

//////////DELETE//////////

  function deleteCard(id){
        axios.delete(`http://localhost:3000/card/${id}`)
        window.location.reload();
    }

//////////UP-BUTTON//////////

document.querySelector('.up').addEventListener('click', ()=>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200){
        document.querySelector('.up').style.right = "20px"
        document.querySelector('.add').style.bottom = "70px"
    }
    else{
        document.querySelector('.up').style.right = "-100px"
        document.querySelector('.add').style.bottom = "20px"
    }
})