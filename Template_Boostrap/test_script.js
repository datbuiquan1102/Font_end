document.addEventListener("DOMContentLoaded", function () {
    var updateButton = document.querySelector('.btn-primary[data-target="#updateModal"]');
    var updateNameInput = document.getElementById('update-name');
    var updateDescriptionInput = document.getElementById('update-description');
    var updatePriceInput = document.getElementById('update-price');
    var updateQuantityInput = document.getElementById('update-quantity');
    var imgProduct = document.getElementById('img_product');

    // Lắng nghe sự kiện khi nút "Update Product" được nhấn
    updateButton.addEventListener('click', function () {
        // Lấy thông tin từ các phần tử HTML tương ứng và điền vào các ô input
        var productName = document.getElementById('name_product').innerText;
        var description = document.getElementById('description_product').innerText;
        var price = document.getElementById('quantity').innerText;
        var quantity = document.getElementById('discount').innerText;

        updateNameInput.value = productName;
        updateDescriptionInput.value = description;
        updatePriceInput.value = price;
        updateQuantityInput.value = quantity;

        // Bạn có thể thêm các thông tin khác tùy thuộc vào cấu trúc HTML của bạn
    });
});