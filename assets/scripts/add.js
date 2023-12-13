const form = document.querySelector("form");
const imgInp = document.querySelector(".image-input");
const formName = document.querySelector(".nameform");
const formCat = document.querySelector(".catform");

form.addEventListener("submit", function (event) {
    event.preventDefault()
    let obj = {}
    let src = imgInp.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(src);
    reader.onload = function (e) {
        obj = {
            link: formName.value,
            text: formCat.value,
            image: e.target.result
        }
        axios.post("http://localhost:3000/card", obj)
        window.location="./index.html"
    };
})