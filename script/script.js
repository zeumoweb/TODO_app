const btnAdd = document.querySelector('#btn-add');
let btnDelete = document.querySelectorAll('.btn-delete');

let inputValue = () => {
    window.task = document.querySelector('#task');
    return task.value;
};


let addToList = () => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let i = document.createElement('i');
    if (inputValue() != ''){
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


let delBtn = function(x){
    $(x.parentNode).addClass('animated');
    $(x.parentNode).fadeOut(500);
    // x.parentNode.parentNode.removeChild(x.parentNode);
};

// btnDelete.addEventListener('click', delBtn(this));
btnAdd.addEventListener('click', addToList);

// for(const btn of btnDelete){
//     console.log(btn);
//     btn.addEventListener('click', delBtn(this));
// };