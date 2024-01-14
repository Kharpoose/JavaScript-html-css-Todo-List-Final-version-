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
    <p
        style="margin-bottom: 2px;  margin-top: 10px;">
        ${name} ${dueDate}  
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        "> Delete </button>
    </p>`;
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
