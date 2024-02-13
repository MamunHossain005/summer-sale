const products = document.getElementsByClassName('btn-buy');
for(let product of products) {
    product.addEventListener('click', (event)=> {
        // product
        const productListElement = document.getElementById('list-product');
        const count = productListElement.childElementCount + 1;
        const newElement = document.createElement('p');
        let childElement;
        try {
            childElement = event.target.previousElementSibling.previousElementSibling;
            const text = childElement.textContent;
            newElement.innerHTML = `<span>${count}</span>. ${text}`;
            newElement.classList.add('text-lg');
            newElement.classList.add('font-semibold');
            productListElement.appendChild(newElement);
    
            //total price
            const priceText = event.currentTarget.previousElementSibling.innerText;
            const price = parseFloat(priceText);
            const totalPrice = getValueById('total-price');
            const newTotalPrice = (totalPrice + price).toFixed(2);
            setTextById('total-price', newTotalPrice);
    
            // purchase button
            const checkTotalPrice = getValueById('total-price');
            const purchaseElement = document.getElementById('btn-purchase');
            const classStr = ['bg-pink-500', 'hover:text-pink-500', 'hover:bg-white', 'hover:ring-2', 'hover:ring-pink-600'];
            if(checkTotalPrice > 0) {
                purchaseElement.removeAttribute('disabled');
                purchaseElement.classList.add(...classStr);
            }
    
            //apply button
            const applyElement = document.getElementById('btn-apply');
            if(checkTotalPrice >= 200) {
                applyElement.removeAttribute('disabled');
                applyElement.classList.add(...classStr);
            }
        }
        catch(e) {

        }
    });
}

document.getElementById('btn-apply').addEventListener('click', ()=> {
    const couponField = document.getElementById('coupon-field');
    const coupon = couponField.value;
    const totalPriceAmount = getValueById('total-price');
    let discount;
    let totalAmount;
    if(coupon === 'SELL200') {
        discount = (totalPriceAmount * 0.2).toFixed(2);
        setTextById('discount', discount);
        totalAmount = (totalPriceAmount - discount).toFixed(2);
        setTextById('total', totalAmount);
        couponField.value = '';
    }
});

document.getElementById('btn-home').addEventListener('click', ()=> {
    document.getElementById('list-product').innerHTML = '';
    setTextById('total-price', '00.00');
    setTextById('discount', '00.00');
    setTextById('total', '00.00');
    const classStr = ['bg-pink-500', 'hover:text-pink-500', 'hover:bg-white', 'hover:ring-2', 'hover:ring-pink-600'];
    btnPurchase = document.getElementById('btn-purchase');
    btnPurchase.setAttribute('disabled', '');
    btnPurchase.classList.remove(...classStr);
    btnApply = document.getElementById('btn-apply');
    btnApply.setAttribute('disabled', '');
    btnApply.classList.remove(...classStr);
});



