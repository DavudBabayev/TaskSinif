let id = new URLSearchParams(window.location.search).get("id");

const form = document.querySelector("form");
const imgInp = document.querySelector(".image-input");
const formName = document.querySelector(".nameform");
const formCat = document.querySelector(".catform");

fetch(`http://localhost:3000/card/${id}`)
    .then(res => res.json())
    .then(data => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const src = imgInp.files[0];

            let reader = new FileReader();

            reader.readAsDataURL(src);
            reader.onload = function (e) {
                const obj = {
                    link: formName.value,
                    text: formCat.value,
                    image: e.target.result
                };

                axios.patch(`http://localhost:3000/card/${id}`, obj)
                    .then(res => {console.log(res.data)
                    window.location = "../index.html";
                })};
                
        });
    });
