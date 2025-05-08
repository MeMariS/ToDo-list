const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((taskText) => {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    const newTasks = tasks.filter((task) => {
      if (taskText === task) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
});

button.addEventListener("click", () => {
  const taskText = input.value;
  if (taskText === "") {
    alert("Введите название задачи");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    const newTasks = tasks.filter((task) => {
      if (taskText === task) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
});
