// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

// Event Listners
todoButton.addEventListener('click', addToDo);
todolist.addEventListener('click', deleteCheck);


// functions
function addToDo(event) {
    // preventing from submitting
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark btn
    const tickedBtn = document.createElement('button');
    tickedBtn.innerHTML = '<i class="fas fa-check"></i>'
    tickedBtn.classList.add('ticked-btn')
    todoDiv.appendChild(tickedBtn)
    // delete btn
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn')
    todoDiv.appendChild(trashBtn)
    // append todoDiv
    todolist.appendChild(todoDiv)
    //
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    // delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //check todo
    if (item.classList[0] === 'ticked-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('ticked')
    }
}