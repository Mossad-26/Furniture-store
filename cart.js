// نجيب الديف اللي هنعرض فيه الكروت
let cartDiv = document.querySelector(".cards");

// نقرأ البيانات من localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// لو الكارت فاضي
if (cartItems.length === 0) {
    cartDiv.innerHTML = "<p>🛒 الكارت فاضي حالياً</p>";
} else {
    // نعرض كل منتج
    cartItems.forEach(item => {
        cartDiv.innerHTML += `
        <div class="pruchase_cart">
            <img src="${item.image}" alt="">
            <div class="pruchase_info">
                <h3>${item.category}</h3>
                <h1>${item.name}</h1>
                <div class="price_count">
                    <div class="price">
                        <p>Price:</p>
                        <span>$ ${item.price}</span>
                    </div>
                    <div class="count">
                        <p>Count:</p>
                        <span>${item.count}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    });
}
