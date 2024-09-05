// Switch between categories
function openCategory(categoryId) {
    const categories = document.getElementsByClassName('category');
    const tabs = document.getElementsByClassName('tab')[0].getElementsByTagName('button');

    for (let i = 0; i < categories.length; i++) {
        categories[i].classList.remove('active');
        tabs[i].classList.remove('active');
    }

    document.getElementById(categoryId).classList.add('active');
    document.querySelector(`button[onclick="openCategory('${categoryId}')"]`).classList.add('active');
}

// Increase the quantity of a product
function increaseQuantity(productId) {
    const inputField = document.getElementById(productId);
    inputField.value = parseInt(inputField.value) + 1;
    updateCartList();
}

// Decrease the quantity of a product
function decreaseQuantity(productId) {
    const inputField = document.getElementById(productId);
    if (inputField.value > 0) {
        inputField.value = parseInt(inputField.value) - 1;
    }
    updateCartList();
}

// Calculate the total price and update the cart list
function calculateTotal() {
    // Prices for each product
    const prices = {
        product1: 6.00,
        product2: 12.00,
        product3: 5.00,
        product4: 10.00,
        product5: 13.00,
        product6: 18.00,
        product7: 8.00,
        product8: 3.00,
        product9: 3.00,
        product10: 2.00,
        product11: 5.00,
        product12: 6.00,
        product13: 5.00,
        product14: 4.00,
        product15: 5.00,
        product16: 5.00,
        product17: 5.00,
        product18: 5.00,
        product19: 6.00,
        product20: 6.00,
        product21: 5.00,
        product22: 4.00,
        product23: 23.00,
        product24: 23.00,
        product25: 23.00,
        product26: 5.00,
        product27: 9.00,
        product28: 9.00,
        product29: 9.00,
        product30: 9.00,
        product31: 9.00,
        product32: 6.00,
        product33: 8.00,
        product34: 8.00,
        product35: 8.00,
        product36: 7.00,
        product37: 7.00,
        product38: 7.00,
        product39: 5.00,
        product40: 5.00
    };

    let total = 0;
    let cartContent = '';
    for (let productId in prices) {
        const productQty = parseInt(document.getElementById(productId).value);
        if (productQty > 0) {
            const productTotal = productQty * prices[productId];
            total += productTotal;

            const productName = document.querySelector(`label[for="${productId}"]`).textContent;
            cartContent += `
                <div class="cart-item">
                    <span>${productName} x${productQty}</span>
                    <span>${productTotal.toFixed(2)}</span>
                </div>
            `;
        }
    }

    document.getElementById('totalPrice').textContent = `Total: ${total.toFixed(2)}`;
    document.getElementById('cartList').innerHTML = `<h2>Items Added:</h2>${cartContent}`;
}

// Reset the form and clear the cart list
function resetForm() {
    const inputs = document.querySelectorAll('.product input');
    inputs.forEach(input => input.value = 0);

    document.getElementById('totalPrice').textContent = 'Total: 0.00';
    document.getElementById('cartList').innerHTML = '<h2>Items Added:</h2>';
}

// Update the cart list when quantities change
function updateCartList() {
    calculateTotal();
}
