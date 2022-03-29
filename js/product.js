;(function(){
    var catalog = document.querySelector('.catalog');
    if(catalog === null){
        return;
    }
    var changeProductModel = function(target){
        var product = MyLib.closestItemByClass(target, 'product');
        var previousBtnActive = product.querySelector('.Product-model.is-active');
        previousBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
        console.log(product); 
    };
    var changeProductOrderInfo = function(target){
        var product = MyLib.closestItemByClass(target, 'product');
        var order = document.querySelector('.popup-order');
        var productTitle = product.querySelector('.Product-title').textContent;
        var productModel = product.querySelector('.Product-model').textContent;
        var productPrice = product.querySelector('.Products-price-value').textContent;
        var productImg = product.querySelector('.Product-img').getAttribute('src');
        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);
        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrice;
        order.querySelector('.order-img').setAttribute('src', productImg);
        console.log(productTitle);
    };
    catalog.addEventListener('click', function(e){
        var target = e.target;
        if(target.classList.contains('Product-model')){
            e.preventDefault();
            changeProductModel(target);
        }
        if(target.classList.contains('Product-button')){
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });
})();