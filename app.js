// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

// Event Listners
document.addEventListener('DOMContentLoaded', getTodos)
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
    saveLocalTodos(todoInput.value)
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
        removeLocalTodos(todo)
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

// LOCAL STORAGE

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// function saveLocalTodos(todo) {

//     let todos;
//     if (localStorage.getItem("todos" === null)) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li')
        newTodo.innerText = todo;
        // saveLocalTodos(todoInput.value)
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
    });
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}