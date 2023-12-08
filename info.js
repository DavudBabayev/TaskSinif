let id = new URLSearchParams(window.location.search).get("id");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector("div").innerHTML += `
            <span>
                <p>Mehsulun adi: ${data.name}</p>
                <p>Mehsulun qiymeti: ${data.unitPrice}</p>
                <p>Stokda var: ${data.unitsInStock}</p>
                <p>Qablashdirma: ${data.quantityPerUnit}</p>
            </span>
            <a href="./index.html">Esas sehifeye qayit</a>
        `
    });