function addTask() {
    var newTaskInput = document.getElementById("new-task");
    var taskText = newTaskInput.value;

    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    var todoList = document.getElementById("todo-list");
    var listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <input type="checkbox" class="task-checkbox">
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    todoList.appendChild(listItem);

    newTaskInput.value = "";
  }

  function deleteTask(button) {
    var listItem = button.parentNode;
    var todoList = document.getElementById("todo-list");
    todoList.removeChild(listItem);
  }