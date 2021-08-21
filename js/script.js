function updateInvoiceField(customItem, price) {
    const basePrice = document.getElementById(customItem);
    basePrice.innerText = 0;
    const updatePrice = parseInt(basePrice.innerText + price);
    basePrice.innerText = updatePrice;

    /* Calculate Total by calling funtion */
    calculateTotal();
};

function getItemPrice(item) {
    const itemPrice = parseInt(document.getElementById(item).innerText);
    return itemPrice;
}

function calculateTotal() {
    const itemsPriceTotal = getItemPrice('base-price') + getItemPrice('extra-memory-cost') + getItemPrice('extra-storage-cost') + getItemPrice('delivery-charge');

    /* Updating invoice field total prices */
    document.getElementById('sub-total-cost').innerText = itemsPriceTotal;
    document.getElementById('total-cost').innerText = itemsPriceTotal;
}


document.getElementById('memory-optn-8gb').addEventListener('click', function () {
    updateInvoiceField('extra-memory-cost', 0);
});

document.getElementById('memory-optn-16gb').addEventListener('click', function () {
    updateInvoiceField('extra-memory-cost', 180);
});
document.getElementById('storage-optn-256gb').addEventListener('click', function () {
    updateInvoiceField('extra-storage-cost', 0);
});
document.getElementById('storage-optn-512gb').addEventListener('click', function () {
    updateInvoiceField('extra-storage-cost', 100);
});
document.getElementById('storage-optn-1tb').addEventListener('click', function () {
    updateInvoiceField('extra-storage-cost', 180);
});
document.getElementById('free-delivery').addEventListener('click', function () {
    updateInvoiceField('delivery-charge', 0);
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateInvoiceField('delivery-charge', 20);
});

document.getElementById('apply-coupon').addEventListener('click', function () {
    const couponCodeField = document.getElementById('coupon-code');
    const couponCode = document.getElementById('coupon-code').value;
    couponCodeField.value = '';

    /* Coupon validation for 20% DISCOUNT */
    if (couponCode == 'stevekaku') {
        const totalAmountText = document.getElementById('total-cost');
        const totalAmount = totalAmountText.innerText;
        const discountPrice = totalAmount - totalAmount * .2;
        totalAmountText.innerText = discountPrice;
    }
});