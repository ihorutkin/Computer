;(function(){
    var showPopup = function(target){
        target.classList.add('is-active');
    };
    var closePopup = function(target){
        target.classList.remove('is-active');
    };
    MyLib.body.addEventListener('click', function(e){
        var target = e.target;
        var popupClass = MyLib.closestAttr(target, 'data-popup');
        if(popupClass === null){
            return;
        }
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);
        if(popup){
            showPopup(popup);
            MyLib.toggleScroll();
        }
    });
    MyLib.body.addEventListener('click', function(e){
        var target = e.target;
        if(target.classList.contains('popup-close') || 
          target.classList.contains('popup-inner')){
            console.log(target);
            var popup = MyLib.closestItemByClass(target, 'popup');

            closePopup(popup);
            MyLib.toggleScroll();
        }
    });
    MyLib.body.addEventListener('keydown', function(e){
        if(e.keyCode !== 27){
            return;
        }
        var popup = document.querySelector('popup.is-active');
        if(popup){
            closePopup(popup);
            MyLib.toggleScroll();
        }
    });
})();