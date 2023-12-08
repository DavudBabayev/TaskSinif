let products = [];
const tableBody = document.querySelector("table tbody");
const searchInp = document.querySelector('input');

fetch("https://northwind.vercel.app/api/products")
    .then(res => res.json())
    .then(data => {
        products = data;
        data.forEach(product => {
            tableBody.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.unitPrice}</td>
                    <td>${product.unitsInStock}</td>
                    <td><a href="./update.html?id=${product.id}">Update</a></td>
                    <td><a href="./info.html?id=${product.id}">Info</a></td>
                </tr>
            `;
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });

searchInp.addEventListener("input", () =>{
    const searchText = searchInp.value.toLowerCase();

    const filtered = products.filter(elem => {
        return elem.name.toLowerCase().includes(searchText);
    })
    tableBody.innerHTML = '';
    filtered.forEach(product => {
        tableBody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.unitPrice}</td>
                <td>${product.unitsInStock}</td>
                <td><a href="./update.html?id=${product.id}">Update</a></td>
                <td><a href="./info.html?id=${product.id}">Info</a></td>
            </tr>
        `;})
})