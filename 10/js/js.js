var items = document.getElementsByClassName('item');
var index = 0;
var goNextBtn = document.getElementById('goNext');
var goPreBtn = document.getElementById('goPre');

var clearAcitve = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
 }
 
var goIndex = function () {
    clearAcitve();
    items[index].className = 'item active';
}

var goPre = function () {
    if (index == 0) {
        index = 2;
    }
    else
    index -- ;
    goIndex();
}

var goNext = function () {
    if (index < 2) {
        index ++ ;
    }
    else
    index = 0 ;
    goIndex();
}
goPreBtn.addEventListener('click',function () {
    goPre();
})
goNextBtn.addEventListener('click',function () {
    goNext();
})
