const arrObj = [{
    name: 'make dinner',
    dueDate: 2023-12-23,
}];

renderToDo();

function renderToDo(){
    let toDoListHTML = ``;

    for (let i = 0; i < arrObj.length; i++){
        const todoObj = arrObj[i];
        const name = todoObj.name;
        const date = todoObj.dueDate;
    
        const html = `
        <div>${name}</div>
        <div>${date}</div>   
            <button onclick= "
                arrObj.splice(${i}, 1);
                renderToDo();
            " class= "delete-todo-button">Delete</button> 
            `;
    
        toDoListHTML += html;
    }
    
    document.querySelector('.js-show')
        .innerHTML = toDoListHTML;
}

function addTodo(){
    let inputElem =  document.querySelector('.js-name-input');

    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElem.value;

    arrObj.push({
        name: name,
        dueDate: dueDate
    });

    inputElem.value = '';

    renderToDo();
}