var todoName = document.querySelector('.todoName');
var taskList = document.querySelector('.list');
var addTodoButton = document.querySelector('.addTodo--button');

addTodoButton.addEventListener('click',addTodo);

function addTodo(){
  if(todoName.value.length == 0 || todoName.value == 'Enter Something Todo Name!'){
    todoName.value = 'Enter Something Todo Name!';
  }
  else{
      var listItem = document.createElement("li");
      listItem.className = 'listItem';


      var listItemText = document.createElement('p');
      listItemText.className = "listItemText";
      listItemText.textContent = todoName.value;
      listItemText.style.textDecoration = 'none';
      listItem.appendChild(listItemText);
      taskList.appendChild(listItem);
      taskList.className = 'todoItems';


      var TodoRemove = document.createElement('button');
      TodoRemove.className = 'todoRemove--button';
      TodoRemove.textContent = 'X';
      listItem.appendChild(TodoRemove);
      todoName.value = '';


      listItemText.addEventListener('click',completeTask);
      TodoRemove.addEventListener('click',removeTodo);


      function removeTodo(){
          this.parentNode.parentNode.removeChild(this.parentNode);
      }

      function completeTask(){
          if(listItemText.style.textDecoration == 'none'){
              listItemText.style.textDecoration = 'line-through';
          }
          else
          {
              listItemText.style.textDecoration = 'none';
          }
      }
  }
}
