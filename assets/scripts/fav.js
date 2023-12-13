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

////////////DATA//////////

let cardnum = 3;
function showPage() {

    fetch('http://localhost:3000/favs')
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
    <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
    
    </div>
    `})
            document.querySelector("#select").addEventListener('change', (e) => {
                if (e.target.value == "Header") {
                    let dataS = data.sort((a, b) => {
                        return a.link.localeCompare(b.link);
                    });
                    document.querySelector(".sec22").innerHTML = ''
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
        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
        
        </div>
        `})
                }
                else if (e.target.value == "Text") {
                    let dataS1 = data.sort((a, b) => {
                        return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
                    });
                    document.querySelector(".sec22").innerHTML = ''
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
        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
        
        </div>
        `})
                }
                else if (e.target.value == 'All'){
                    document.querySelector(".sec22").innerHTML = ''
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
        <i class="bi bi-heart" id="heart" onclick="addFav(${card.id})"></i>
        
        </div>
        `})
                }
            })
        })
};
showPage()

document.querySelector(".load").addEventListener("click", () => {
    cardnum += 3;
    showPage()
})

//////////DELETE//////////

function deleteCard(id) {
    axios.delete(`http://localhost:3000/favs/${id}`)
    window.location.reload();
}