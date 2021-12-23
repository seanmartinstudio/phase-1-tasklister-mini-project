document.addEventListener("DOMContentLoaded", () => {
//We want to grab the form and all of the relevant input fields
const form = document.getElementById('create-task-form')

//Attached event listener now
form.addEventListener('submit', createTask)
})

function createTask(event) {
//Stop the form from trying to submit
event.preventDefault()
const input = document.getElementById('new-task-description')
const li = document.createElement('li')
li.innerText = input.value
//grab UL and append LI's to it
const ul = document.getElementById('tasks')
ul.appendChild(li)
}