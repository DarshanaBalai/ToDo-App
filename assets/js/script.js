const taskForm =document.querySelector("#form");
const inputTask = document.querySelector(".addInput");
const addTask = document.querySelector(".addSubmit");
const task = document.querySelector("#taskContainer");

taskForm.addEventListener('submit', (e) => {
e.preventDefault();

const addedTask = inputTask.value;

const task_container = document.createElement('div');
task_container.classList.add('containerTask')

const task_content = document.createElement('div');
task_content.classList.add('taskContent');

task_container.appendChild(task_container);





}


