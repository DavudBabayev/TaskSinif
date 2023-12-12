let id = new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:3000/card/${id}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.sec22').innerHTML += `
        <div>
    <img src="${data.image}" alt="">
    <a href="#"></a>
        <h4>${data.link}</h4>
    </a>
    <p>${data.text}</p>
   
    </div>
        `
    });