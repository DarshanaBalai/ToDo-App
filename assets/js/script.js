console.log("done")

const taskForm =document.querySelector("#form");
const inputTask = document.querySelector(".addInput");
const addTask = document.querySelector(".addSubmit");
const task = document.querySelector("#taskContainer");

taskForm.addEventListener('submit', (e) => {
e.preventDefault();
console.log("done1")
const addedTask = inputTask.value;
if(!inputTask.value){
    alert("Please add your task");
    return;
}

const task_container = document.createElement('div');
task_container.classList.add('containerTask')

const task_content = document.createElement('div');
task_content.classList.add('task_Content');

task_container.appendChild(task_content);

const addedInput = document.createElement('input');
addedInput.classList.add("added_input")
addedInput.type = "text";
addedInput.value = addedTask;
addedInput.setAttribute('readonly', 'readonly');

task_content.appendChild(addedInput);
console.log("done2")
const buttons = document.createElement('div');
buttons.classList.add('button');

const editButton = document.createElement('div');
editButton.classList.add('editButton');
editButton.innerText = '<i class="fa-solid fa-pen-to-square"></i>';

const deleteButton = document.createElement('div');
deleteButton.classList.add('deleteButton');
deleteButton.innerText = '<i class="fas fa-check-circle"></i>';

buttons.appendChild(editButton);
buttons.appendChild(deleteButton);

task_container.appendChild(buttons);

task.appendChild(task_container);

inputTask.value = "";

editButton.addEventListener('click', (e) => {
    console.log("done3")
   if(editButton.innerText == '<i class="fa-solid fa-pen-to-square"></i>'){
// if (editButton.innerText.toLowerCase() == "edit"){
    addedInput.removeAttribute('readonly');
    editButton.innerText = '<i class="fa-solid fa-bookmark"></i>'; 
    addedInput.focus();
}else{
    editButton.innerText ='<i class="fa-solid fa-pen-to-square"></i>'; 
    addedInput.setAttribute("readonly", "readonly");
	}
    console.log("done4")
});

deleteButton.addEventListener('click', (e) => {
    task.removeChild(task_container);
    console.log("done5")
})

});



