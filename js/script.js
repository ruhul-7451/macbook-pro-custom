function updateInvoiceField(customItem, price) {
    const basePrice = document.getElementById(customItem);
    basePrice.innerText = 0;
    const updatePrice = parseInt(basePrice.innerText + price);
    basePrice.innerText = updatePrice;

    /* Calculate Total */
    calculateTotal();
};

function calculateTotal() {
    const basePrice = parseInt(document.getElementById('base-price').innerText) + parseInt(document.getElementById('extra-memory-cost').innerText) + parseInt(document.getElementById('extra-storage-cost').innerText) + parseInt(document.getElementById('delivery-charge').innerText);
    // basePrice3 = basePrice + basePrice2;
    document.getElementById('sub-total-cost').innerText = basePrice;
    document.getElementById('total-cost').innerText = basePrice;
}


document.getElementById('memory-optn-8gb').addEventListener('click', function () {
    updateInvoiceField('extra-memory-cost', 0);
});

document.getElementById('memory-optn-16gb').addEventListener('click', function () {
    updateInvoiceField('extra-memory-cost', 180);
});
document.getElementById('storage-optn-256gb').addEventListener('click', function () {
    updateInvoiceField('extra-storage-cost', 280);
});
document.getElementById('storage-optn-512gb').addEventListener('click', function () {
    updateInvoiceField('extra-storage-cost', 380);
});
document.getElementById('storage-optn-1tb').addEventListener('click', function () {
    updateInvoiceField('extra-storage-cost', 500);
});
document.getElementById('free-delivery').addEventListener('click', function () {
    updateInvoiceField('delivery-charge', 0);
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateInvoiceField('delivery-charge', 20);
});

document.getElementById('apply-coupon').addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode == 'stevekaku') {
        const totalAmountText = document.getElementById('total-cost');
        const totalAmount = totalAmountText.innerText;
        const discountPrice = totalAmount - totalAmount * .2;
        totalAmountText.innerText = discountPrice;
    }
});