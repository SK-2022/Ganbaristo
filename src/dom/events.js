import ToDo from "../modules/todo.js";
import ChecklistItem from "../modules/checklist.js";
import { renderTodosList } from "./render.js";

// Select all the necessary buttons and inputs
const createTodoButton = document.querySelector('.create-todo-button');
const todoTitle = document.querySelector('.to-do-list-title-input');
const todoDescription = document.querySelector('.to-do-list-description-input');
const dateInput = document.querySelector('.to-do-list-date-input');
const prioritySelect = document.querySelector('.to-do-list-priority-input');

// Example: reference to your current project (replace with your actual logic)
const projectsList = document.querySelectorAll('.project-list-item')
let currentProject; // You should set this to the active project in your app
//When any of the projects are clicked, they will become the current project. Add an event listener to all with the class 'project-list-item'
function handleSelectCurrentProjectClick() {
    projectsList.forEach(project => {
        project.addEventListener('click', () => {
            currentProject = project
        })
    })

}

// LOOK AT THE SECOND EXAMPLE OF THE EVENTS CODE FROM COPILOT

function handleCreateTodoClick(event) {
    event.preventDefault();

    // Get all the values from the inputs
    const title = todoTitle.value;
    const description = todoDescription.value;
    const dueDate = dateInput.value;
    const selectedOption = prioritySelect.options[prioritySelect.selectedIndex];
    const priority = selectedOption.value;

    // Create a new ToDo object (empty checklist, not completed)
    const newTodo = new ToDo(
        title,
        description,
        dueDate,
        priority,
        [],
        false
    );

    // Assign the todo to the correct project
    if (currentProject) {
        currentProject.addToDoListItem(newTodo);
        renderTodosList(currentProject.todosArray);
    } else {
        alert("No project selected!");
    }

    // Optionally, clear the form fields after creation
    todoTitle.value = "";
    todoDescription.value = "";
    dateInput.value = "";
    prioritySelect.selectedIndex = 0;
}

export function initEventListeners() {
    if (createTodoButton) {
        createTodoButton.addEventListener('click', handleCreateTodoClick);
    }
}