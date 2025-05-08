const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const task = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((taskText) => {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";
  deleteBtn.addEventListener("click", () => {
    task.removeChild(li);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(deleteBtn);
  task.appendChild(li);
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
    task.removeChild(li);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(deleteBtn);
  task.appendChild(li);

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
});
