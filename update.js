let id = new URLSearchParams(window.location.search).get("id");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector("table tbody").innerHTML += `
            <tr>
                <td>${data.id}</td>
                <td><input type="text" id="name" value="${data.name}"></td>
                <td><input type="number" id="price" value="${data.unitPrice}"></td>
                <td><input type="number" id="stock" value="${data.unitsInStock}"></td>
                <td><button>Submit</button></td>
            </tr>
        `;

       

        document.querySelector("button").addEventListener("click", () => {

            const nameInp = document.querySelector("#name").value;
            const priceInp = document.querySelector("#price").value;
            const stockInp = document.querySelector("#stock").value;

            const obj = {
                name: nameInp,
                unitPrice: priceInp,
                unitsInStock: stockInp
            };

            axios.patch("https://northwind.vercel.app/api/products/"+ id, obj).then(res => window.location = "./index.html")
    });
})