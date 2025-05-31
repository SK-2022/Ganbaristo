import ToDo from "../modules/todo.js";
import ChecklistItem from "../modules/checklist.js";
import { renderTodosList } from "./render.js";
import appStateManager from "../modules/appState.js";

// Select all the necessary buttons and inputs
const createTodoButton = document.querySelector(".create-todo-button");
const todoTitle = document.querySelector(".to-do-list-title-input");
const todoDescription = document.querySelector(".to-do-list-description-input");
const dateInput = document.querySelector(".to-do-list-date-input");
const prioritySelect = document.querySelector(".to-do-list-priority-input");

//Current Project selection logic
let currentProject = null;

function handleSelectCurrentProjectClick(event) {
  const clickedItem = event.target.closest(".project-list-item");
  if (!clickedItem) return;

  const index = clickedItem.getAttribute("data-index");
  currentProject = appStateManager.projectsArray[index]; // or your projects array

  renderTodosList(currentProject.todosArray);
}

function handleCreateTodoClick(event) {
  event.preventDefault();

  // Get all the values from the inputs
  const title = todoTitle.value;
  const description = todoDescription.value;
  const dueDate = dateInput.value;
  const selectedOption = prioritySelect.options[prioritySelect.selectedIndex];
  const priority = selectedOption.value;

  // Create a new ToDo object (empty checklist, not completed)
  const newTodo = new ToDo(title, description, dueDate, priority, [], false);

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
    createTodoButton.addEventListener("click", handleCreateTodoClick);
  }
  // Attach the event listener to the parent UL for delegation:
  const projectList = document.querySelector(".project-list");
  if (projectList) {
    projectList.addEventListener("click", handleSelectCurrentProjectClick);
  }
}
