const productData = [
    // Category 1: Essen
    { id: 'product1', name: 'Kalbsbratw. m. Brot', price: 7, category: 'Essen' },
    { id: 'product2', name: 'Kalbsbratw. m. Pommes', price: 12, category: 'Essen' },
    { id: 'product3', name: 'Klöpfer m. Brot', price: 6, category: 'Essen' },
    { id: 'product4', name: 'Klöpfer m. Pommes', price: 10, category: 'Essen' },
    { id: 'product5', name: 'Schw. Steak m. Brot', price: 13, category: 'Essen' },
    { id: 'product6', name: 'Schw. Steak m. Pommes', price: 18, category: 'Essen' },
    { id: 'product12', name: 'Kalbsbratw. m. Pommes', price: 6, category: 'Essen' },
    { id: 'product7', name: 'Rösti Nature', price: 8, category: 'Essen' },
    { id: 'product8', name: '+ Speck', price: 3, category: 'Essen' },
    { id: 'product9', name: '+ Käse', price: 3, category: 'Essen' },
    { id: 'product10', name: '+ Ei', price: 2, category: 'Essen' },
    { id: 'product11', name: 'SoftIce', price: 5, category: 'Essen' },
    { id: 'product44', name: 'Kuchen 2.-', price: 2, category: 'Essen' },
    { id: 'product45', name: 'Kuchen 3.-', price: 3, category: 'Essen' },
    { id: 'product46', name: 'Kuchen 4.-', price: 4, category: 'Essen' },
    { id: 'product47', name: 'Torten', price: 5, category: 'Essen' },

    // Category 2: Getränke
    { id: 'product13', name: 'Mineral mit/ohne', price: 4, category: 'Getränke' },
    { id: 'product14', name: 'Mate', price: 4, category: 'Getränke' },
    { id: 'product15', name: 'Rivella', price: 5, category: 'Getränke' },
    { id: 'product16', name: 'Cola', price: 5, category: 'Getränke' },
    { id: 'product17', name: 'IceTea', price: 5, category: 'Getränke' },
    { id: 'product18', name: 'Focus Water', price: 5, category: 'Getränke' },
    { id: 'product48', name: 'Citro', price: 5, category: 'Getränke' },
    { id: 'product19', name: 'Suure Most mit/ohne', price: 6, category: 'Getränke' },

    // Subcategory: Getränke
    { id: 'product21', name: 'Bier', price: 5, category: 'Getränke' },
    { id: 'product22', name: 'Bier Alk. frei', price: 4, category: 'Getränke' },

    // Subcategory: Getränke
    { id: 'product23', name: 'Weisswein', price: 20, category: 'Getränke' },
    { id: 'product24', name: 'Rose', price: 20, category: 'Getränke' },
    { id: 'product25', name: 'Rotwein', price: 20, category: 'Getränke' },

    // Subcategory: Getränke
    { id: 'product41', name: 'Kaffee', price: 4, category: 'Getränke' },
    { id: 'product42', name: 'Kaffe-Lutz', price: 5, category: 'Getränke' },
    { id: 'product43', name: 'Kaffee-Berghof', price: 7, category: 'Getränke' },

    // Category 3: Bar
    { id: 'product26', name: 'Shot', price: 4, category: 'Bar' },
    
    // Subcategory: Bar
    { id: 'product27', name: 'Gin Tonic', price: 9, category: 'Bar' },
    { id: 'product28', name: 'Aperol Spritz', price: 9, category: 'Bar' },
    { id: 'product29', name: 'Gummibärli', price: 9, category: 'Bar' },
    { id: 'product30', name: 'Martini Cola', price: 9, category: 'Bar' },
    { id: 'product31', name: 'Madlejäger', price: 9, category: 'Bar' },
    { id: 'product34', name: 'Schlössli Drink', price: 9, category: 'Bar' },
    { id: 'product35', name: 'Lillet', price: 9, category: 'Bar' },

    // Subcategory: Bar
    { id: 'product20', name: 'Bier', price: 5, category: 'Bar' },
    { id: 'product32', name: 'Smirnov Ice', price: 6, category: 'Bar' },
    { id: 'product33', name: 'Smirnov mit Schuss', price: 8, category: 'Bar' },
    { id: 'product49', name: 'Mate mit Schuss', price: 8, category: 'Bar' },

    // Subcategory: Bar
    { id: 'product36', name: 'Virgin Sunrise', price: 7, category: 'Bar' },
    { id: 'product37', name: 'Schlösslimatte', price: 7, category: 'Bar' },
    { id: 'product38', name: 'Wilder Martini', price: 7, category: 'Bar' },
    { id: 'product40', name: 'Gin Alk. frei', price: 7, category: 'Bar' },
    { id: 'product50', name: 'Bier Alk. frei', price: 4, category: 'Bar' },
    { id: 'product51', name: 'Mineral mit/ohne', price: 4, category: 'Bar' },
    { id: 'product52', name: 'Rivella', price: 5, category: 'Bar' },
    { id: 'product53', name: 'Cola', price: 5, category: 'Bar' },
    { id: 'product54', name: 'IceTea', price: 5, category: 'Bar' },
    { id: 'product55', name: 'Focus Water', price: 5, category: 'Bar' },
    { id: 'product57', name: 'Citro', price: 5, category: 'Bar' },
    { id: 'product56', name: 'RedBull', price: 5, category: 'Bar' }
];

let cart = {}; // Keeps track of product quantities

// Batch render products dynamically into categories
function renderProducts() {
    const categoryContainers = {
        category1: document.getElementById('category1'),
        category2: document.getElementById('category2'),
        category3: document.getElementById('category3')
    };

    productData.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <label for="${product.id}">${product.name}</label>
            <button data-product-id="${product.id}" data-action="decrease">-</button>
            <input type="number" id="${product.id}" value="0" min="0" readonly>
            <button data-product-id="${product.id}" data-action="increase">+</button>
        `;
        categoryContainers[product.category].appendChild(productDiv);
    });
}

// Handle category switching
function openCategory(categoryId) {
    document.querySelectorAll('.category').forEach(category => {
        category.classList.remove('active');
    });
    document.getElementById(categoryId).classList.add('active');
}

// Update cart and quantity display
function updateQuantity(productId, action) {
    if (!cart[productId]) cart[productId] = 0;
    
    if (action === 'increase') {
        cart[productId]++;
    } else if (action === 'decrease' && cart[productId] > 0) {
        cart[productId]--;
    }

    document.getElementById(productId).value = cart[productId];
    updateCartList();
}

// Use event delegation to handle button clicks
document.body.addEventListener('click', function (e) {
    if (e.target.dataset.productId) {
        const productId = e.target.dataset.productId;
        const action = e.target.dataset.action;
        updateQuantity(productId, action);
    }
});

// Calculate total price and update the cart
function calculateTotal() {
    let total = 0;
    let cartContent = '';

    productData.forEach(product => {
        const qty = cart[product.id] || 0;
        if (qty > 0) {
            const productTotal = qty * product.price;
            total += productTotal;

            cartContent += `
                <div class="cart-item">
                    <span>${product.name} x${qty}</span>
                    <span>${productTotal.toFixed(2)}</span>
                </div>
            `;
        }
    });

    document.getElementById('totalPrice').textContent = `Total: ${total.toFixed(2)}`;
    document.getElementById('cartList').innerHTML = `<h2>Produkte:</h2>${cartContent}`;
}

// Reset the form and cart
function resetForm() {
    cart = {};
    document.querySelectorAll('.product input').forEach(input => {
        input.value = 0;
    });

    document.getElementById('totalPrice').textContent = 'Total: 0.00';
    document.getElementById('cartList').innerHTML = '<h2>Produkte:</h2>';
}

function updateCartList() {
    calculateTotal();
}

// Initial rendering of products
renderProducts();
