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
task_content.classList.add('task_Content');

task_container.appendChild(task_container);

const addedInput = document.createElement('input');
addedInput.classList.add("added_input")
addedInput.type = "text";
addedInput.value = addedTask;
addedInput.setAttribute('readonly', 'readonly');

task_content.appendChild(addedInput);

const buttons = document.createElement('div');
buttons.classList.add('button');

const editButton = document.createElement('div');
editButton.classList.add('editButton');
editButton.innerText = "Edit";

const deleteButton = document.createElement('div');
deleteButton.classList.add('deleteButton');
deleteButton.innerText = "Delete";

buttons.appendChild(editButton);
buttons.appendChild(deleteButton);

task_container.appendChild(buttons);

}


