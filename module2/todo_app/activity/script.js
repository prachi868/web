  
let addTodoButton = document.querySelector(".add-todo");
let todoInput= document.querySelector(".todo-input");
let todosList=document.querySelector(".todos-list-container");


todoInput.addEventListener("keypress" , function(e){
    if(e.key== "Enter"){
        addTodo();
    }
}); 
addTodoButton.addEventListener("click" , function(){
    addTodo();
});
 function addTodo(){
     let todoInputValue = todoInput.value;
    
           if(todoInputValue){
               appendTodo(todoInputValue);
               //it will empty the todo value
               todoInput.value=" ";
            }
 }

 function appendTodo(todo){
    let todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item");
    //<div class="todo=item"> </div>

    let pTag=document.createElement("p");
    pTag.classList.add("todo-input");
    pTag.textContent=todo;
    //<p class="todo-input">Learn CSS </p>

    let deleteTodoButton= document.createElement("button");
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent= "Delete";
      //<button class="delete-todo">Delete</button>
    deleteTodoButton.addEventListener("click" , deleteTodo);

    todoItemDiv.append(pTag);
    todoItemDiv.append(deleteTodoButton);
    todosList.append(todoItemDiv);

   // <div class="todo-item">
    //<p class="todo-input">Learn CSS</p>
    //<button class="delete-todo">Delete</button>
   //</div>
 }

 function deleteTodo(e){
     e.target.parentNode.remove();
 }
