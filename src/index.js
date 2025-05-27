//App entry point
import "/src/styles/main.css";
import ToDo from "./modules/todo.js";
import Project from "./modules/project.js";
import AppStateManager from "./modules/appState.js";
import { prioritySelectionsArray } from "./modules/todo.js";
import ChecklistItem from "./modules/checklist.js";
import { renderProjectList } from "./dom/render.js";
import { renderTodosList } from "./dom/render.js";

// Create initial todo list test item
const importantTask = new ToDo(
  "Incredibly Important task",
  "Work on the Javascript Section on The Odin Project",
  new Date(),
  prioritySelectionsArray[2],
  [
    new ChecklistItem("Transfer money to Jennifer tonight", false),
    new ChecklistItem("Head to the Gym on Friday", true),
  ],
  false
);

const theOdinProject = new Project("The Odin Project", []);
const theFitnessProject = new Project("The Fitness Project", []);
theOdinProject.addToDoListItem(importantTask);

const appStateManager = new AppStateManager([]);
appStateManager.addToProjectsArray(theOdinProject);
appStateManager.addToProjectsArray(theFitnessProject);
//Load from localStorage when the app starts. Console.log() first. Add DOM elements later
console.log(appStateManager.getProjectsArray());

// Now test ToDo methods and save after each change
importantTask.toggleCompletion();
appStateManager.saveToLocalStorage();

importantTask.addChecklistItem(new ChecklistItem("Talk to Mr Maeda", false));
appStateManager.saveToLocalStorage();

//Toggle works property for checklist items
console.log(importantTask.checklist[0].toggleDone());
appStateManager.saveToLocalStorage();

console.log(importantTask);
console.log(theOdinProject);
console.log(appStateManager.getProjectsArray());

renderProjectList(appStateManager.projectsArray);
renderTodosList(theOdinProject.todosArray)
