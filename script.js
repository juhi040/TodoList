const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(event){
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; 
    

    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);
    todoInput.value="";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

function deleteTodo(event){
    const item = event.target;
    
    if(item.classList[0] === "trash-btn"){

        const todos = item.parentElement;
        todos.remove();
    }

    if(item.classList[0] === "complete-btn"){
        
        const todos = item.parentElement;

        todos.classList.toggle("completed");
    }
}

