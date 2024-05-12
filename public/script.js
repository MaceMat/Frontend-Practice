const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});