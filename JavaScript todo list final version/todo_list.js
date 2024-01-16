const todoList = [
  { name: "Make dinner", dueDate: "2024-01-30" },
  { name: "Wash dishes", dueDate: "2024-01-12" },
];
//const todoList = ["Make dinner", "Wash dishes"];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div> ${name} </div>
    <div> ${dueDate} </div>        
      <button class="delete-toto-button" onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
      "> Delete </button>
    `;
    todoListHtml += html;
  }

  //console.log(todoListHtml);
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addtodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  //console.log(name);

  const dateInput = document.querySelector(".js-due-date");
  const dueDate = dateInput.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });
  console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}
