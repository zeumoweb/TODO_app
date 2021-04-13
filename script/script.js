const btnAdd = document.querySelector('#btn-add');
let btnDelete = document.querySelectorAll('.btn-delete');
let ul = document.querySelector('ul');
let itemArray;

if(localStorage.getItem('items')){
    itemArray = JSON.parse(localStorage.getItem('items'))
}else{
    itemArray = []
}


let addToList = () => {    
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let i = document.createElement('i');
    if (inputValue() != ''){
        itemArray.push(inputValue())
        localStorage.setItem('items', JSON.stringify(itemArray))
        btn.className = "btn btn-sm btn-delete";
        i.className = "far fa-trash-alt";
        li.innerText = inputValue();
        btn.appendChild(i);
        btn.setAttribute('onclick', 'delBtn(this)');
        li.appendChild(btn);
        ul.appendChild(li);
        task.value = '';
    };
};
let addToListFromStorage = (item) => {    
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let i = document.createElement('i');
    btn.className = "btn btn-sm btn-delete";
    i.className = "far fa-trash-alt";
    li.innerText = item;
    btn.appendChild(i);
    btn.setAttribute('onclick', 'delBtn(this)');
    li.appendChild(btn);
    ul.appendChild(li);
};
let delFromStorage = (item) => {
    itemArray = JSON.parse(localStorage.getItem('items'));
    itemArray.splice(itemArray.indexOf(item), 1);
    localStorage.clear();
    localStorage.setItem('items', JSON.stringify(itemArray));
}
itemArray.forEach(i => {
    addToListFromStorage(i);
});

let delBtn = function(x){
    $(x.parentNode).addClass('animated');
    $(x.parentNode).fadeOut(500);
    delFromStorage(x.parentNode.value)
};

let inputValue = () => {
    window.task = document.querySelector('#task');
    return task.value;
};

btnAdd.addEventListener('click', addToList);

