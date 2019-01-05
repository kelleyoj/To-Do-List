var addBtn = document.querySelector("#add-to-list");
var input = document.querySelector('.input');
var newLi = document.querySelector('.input button');
var ul = document.querySelector('ul');

init();

addBtn.addEventListener('click', function () {
    input.classList.toggle("visible");
    ul.classList.toggle('li-click-style');
});

$("ul").on("click","#remove",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

newLi.addEventListener('click', function(){
    var userInput = document.querySelector('#input');
    var li = document.createElement("li");
    var data = userInput.value;
    userInput.value = '';
    li.innerHTML = '<span id="remove"><i class="far fa-times-circle"></i></span>' + data;
    ul.append(li);
});

function init(){
    // ul.classList.add('li-click-style');
}

