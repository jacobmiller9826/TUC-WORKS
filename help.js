async function loadTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  const placeholderTasks = [
    { name: "Jake", task: "Fix swamp cooler", location: "85705" },
    { name: "Maria", task: "Need water delivered", location: "Southside" },
  ];

  placeholderTasks.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = `${t.task} (by ${t.name} in ${t.location})`;
    list.appendChild(li);
  });
}

document.getElementById("taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Task submitted! (Back end not connected yet)");
  e.target.reset();
});

loadTasks();
