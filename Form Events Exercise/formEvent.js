const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty;
    addQuantityList(product, quantity)
});

function addQuantityList(product, quantity) {
    const list = document.querySelector("#list");
    const listElements = document.createElement("li");
    listElements.append(`${quantity.value} ${product.value}`);
    list.append(listElements);
    product.value = "";
    quantity.value = "";
}