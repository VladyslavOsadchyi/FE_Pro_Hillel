// ДЗ № 15.1 - TODO з WebStorage
const input = document.querySelector("#newTaskInput");
const btn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });
    const span = document.createElement("span");
    span.textContent = task.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks();
    });
    li.append(checkbox, span, deleteBtn);
    taskList.append(li);
  });
}

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;
  const newTask = {
    id: Date.now(),
    text: text,
    done: false,
  };
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  input.value = "";
});
renderTasks();
