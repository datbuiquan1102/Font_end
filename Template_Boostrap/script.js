$(document).ready(function () {

    // saveData();
    findAll();
    addProducts();
    function saveData() {
        const products = [
            {
                id: 1,
                name: "Iphone2",
                quantity: 100,
                price: 100000,
                discount: 8,
                description: "Xanh sach dep",
                image: "img/8.jpg"
            },
            {
                id: 1,
                name: "SamSung 1",
                quantity: 123,
                price: 15000000,
                discount: 10,
                description: "Mau Hong",
                image: "img/8.jpg"
            },
            {
                id: 1,
                name: "Apple Watch",
                quantity: 123,
                price: 20000000,
                discount: 12,
                description: "Moi 99%",
                image: "img/8.jpg"
            },
            {
                id: 1,
                name: "Oppo 5",
                quantity: 123,
                price: 4000000,
                discount: 10,
                description: "Xanh do",
                image: "img/8.jpg"
            },
            {
                id: 1,
                name: "Iphone 10",
                quantity: 123,
                price: 8000000,
                discount: 10,
                description: "Moi 100%",
                image: "img/8.jpg"
            }
        ]
        var jsonProducts = JSON.stringify(products);
        localStorage.setItem("products", jsonProducts);
    }

    function findAll() {
        const jsonProducts = localStorage.getItem("products");
        const products = JSON.parse(jsonProducts);
        let list_products = ``;
        products.forEach(product => {
            list_products += `
                <div class="col-12 col-sm-3 product_1 p-3">
                <img src="${product.image}" class="img-fluid" alt="Product Image" id="img_product">
                <div class="mt-2" id="name_product">
                    <h3>${product.name}</h3>
                </div>
                <div class="mt-2" id="description_product">
                    <h4>${product.description}</h4>
                </div>
                <h3 class="normal mt-2" id="price">
                    <span class="span_2" id="quantity">${product.price}</span>
                    <span class="span_3 col_1" id="discount">${product.price - (product.price * (product.discount / 100))}</span>
                </h3>
                <div class="span_1">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <button type="button" class="btn btn-success mt-2">ADD TO CART</button>
            </div>
        `
        });
        $("#products").append(list_products);

    }
    
    function addProducts() {
        $("#add_btn").click(function () {
            const name = $("#name").val();
            const description = $("#description").val();
            const price = $("#price").val();
            const quantity = $("#quantity").val();
            const image = $("#image").val()
            const existingProducts = JSON.parse(localStorage.getItem("products"));
            const newProduct = {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                image: image
            }
            existingProducts.push(newProduct);
            localStorage.setItem("products", JSON.stringify(existingProducts));
        })
    }




});