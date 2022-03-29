;(function(){
    window.MyLib = {};
    window.MyLib.body = document.querySelector('body');
    window.MyLib.closestAttr = function(item, attr){
        var node = item;
        while(node){
            var attrValue = node.getAttribute(attr);
            if(attrValue){
                return attrValue;
            }
            node = node.parentElement;
        }
        return null;
    };
    window.MyLib.closestItemByClass = function(item, className){
        var node = item;
        while(node){
            if(node.classList.contains(className)){
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };
    window.MyLib.toggleScroll = function(){
        MyLib.body.classList.toggle('no-scroll');
    };
})();