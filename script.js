const taskInput = document.getElementById("taskinput");
const taskBtn = document.getElementById("taskbtn");
const tasklist = document.getElementById("tasklist");

taskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    tasklist.removeChild(li);
  });

 li.addEventListener("click", (e) => {
    if (e.target === deleteBtn) return;
    li.classList.toggle("completed");
  });

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  tasklist.appendChild(li);
  
  taskInput.value = "";
});
