const security = "http://localhost:3000/card"


let searchArray = []


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

let page = 1;

function showPage() {

    fetch(`${security}?_page=${page}&_limit=3`).then(response => response.json()).then(data => {
        searchArray.push(data)
        console.log(data);
        data.forEach(card => {
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
    <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
    
    </div>
    `})
        document.querySelector("#select").addEventListener('change', (e) => {

            if (e.target.value == "Ascending") {
                let dataS = data.sort((a, b) => {
                    return (a.id - b.id);
                });
                document.querySelector(".sec22").innerHTML = ''
                data.forEach(card => {
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
        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
        
        </div>`
                })
            }
            else if (e.target.value == "Decending") {
                let dataS1 = data.sort((a, b) => {
                    return (b.id - a.id);
                });
                document.querySelector(".sec22").innerHTML = ''
                data.forEach(card => {
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
        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
        
        </div>`
                })
            }
            else if (e.target.value == 'Default') {
                document.querySelector(".sec22").innerHTML = ''
                showPage()
            }
        })
        return searchArray.flat()
    })
        .then(data => {
            document.querySelector("#search").addEventListener("input", (e) => {
                let value = e.target.value
                if (value !== null) {
                    data.filter(s => {
                        document.querySelector(".sec22").innerHTML = ``
                        return s.link.toLowerCase().includes(value.toLowerCase())
                    }).forEach(card => {
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
                        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
                        
                        </div>`
                    })
                }
                else {
                    document.querySelector(".sec22").innerHTML = ``
                    data.forEach(card => {
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
                        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
                        
                        </div>`
                    })
                }
            })
        })
};
showPage()

document.querySelector(".load").addEventListener("click", () => {
    page++;
    showPage()
})

//////////DELETE//////////

function deleteCard(id) {
    axios.delete(`http://localhost:3000/card/${id}`)
    window.location.reload();
}

//////////UP-BUTTON//////////

document.querySelector('.up').addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('.up').style.right = "20px"
        document.querySelector('.add').style.bottom = "70px"
        document.querySelector('.fav').style.bottom = "120px"
    }
    else {
        document.querySelector('.up').style.right = "-100px"
        document.querySelector('.add').style.bottom = "20px"
        document.querySelector('.fav').style.bottom = "70px"
    }
});

//////////FAVORITES//////////

function addFav(id) {
    axios.get("http://localhost:3000/card/" + id)
        .then(res => {
            axios.post("http://localhost:3000/favs", res.data)
        })
}