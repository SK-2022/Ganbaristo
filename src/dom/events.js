//Select all the necessary buttons
const createTodoButton = document.querySelector('.create-todo-button');

//Get todo title value
const todoTitle = document.querySelector('.to-do-list-title-input')
const todoTitleValue = todoTitle.value;

//Get description value
const todoDescription = document.querySelector('.to-do-list-description-input')
const todoDescriptionValue = todoDescription.value;

//Get date value
const dateInput = document.querySelector('.to-do-list-date-input');
const dateValue = dateInput.value; // This will be the selected date as a string

//Select priority Index
const prioritySelect = document.querySelector('.to-do-list-priority-input');
const selectedOption = prioritySelect.options[prioritySelect.selectedIndex];
const priorityIndex = selectedOption.getAttribute('data-index');

function handleCreateTodoClick(event) {
    // This prevents the default button behaviour like submitting a form.
    event.preventDefault() 

}

export function initEventListeners() {

}