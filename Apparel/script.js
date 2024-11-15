// สมมุติว่าเราต้องการเพิ่มสินค้าในตะกร้า
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item added to cart!');
    });
});
