const todoList = [];

renderNewTask();

function renderNewTask() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const taskObject = todoList[i];

    const activity = taskObject.task;
    const date = taskObject.date;
    const time = taskObject.time;

    const html = `<p>${activity} - - - Date: ${date} - - - Tim: ${time}
    <button class="done-button" onclick ="todoList.splice(${i}, 1); renderNewTask()">Delete</button>
    </p>`;
    todoListHtml += html;
  }

  document.querySelector(".task-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-task-input");
  const task = inputElement.value;

  const dateElement = document.querySelector(".js-date-input");
  const date = dateElement.value;

  const timeElement = document.querySelector(".js-time-input");
  const time = timeElement.value;

  todoList.push({
    task: task,
    date: date,
    time: time,
  });
  console.log(todoList);

  inputElement.value = "";

  renderNewTask();
}

const resetButton = document.querySelector(".js-reset-button");
resetButton.addEventListener("click", resetTodoList);

function resetTodoList() {
  todoList.length = 0;
  renderNewTask();
}
const copyButton = document.querySelector(".js-reset-button");
resetButton.addEventListener("click", copyTodoList);

function copyTodoList() {
  const listText = todoList
    .map(
      (taskObject) =>
        `${taskObject.task} - Date: ${taskObject.date} - Time: ${taskObject.time}`
    )
    .join("\n");
  navigator.clipboard
    .writeText(listText)
    .then(() => {
      alert("List copied to clipboard");
      // You can add a success message or any other desired behavior here
    })
    .catch((error) => {
      alert("Failed to copy list to clipboard:", error);
      // You can add an error message or any other desired behavior here
    });
}
