//App entry point
import "/src/styles/main.css";
import ToDo from "./modules/todo.js";
import Project from "./modules/project.js";
import AppStateManager from "./modules/appState.js";

// Create initial todo list test item
const importantTask = new ToDo(
  "Incredibly Important task",
  "Work on the Javascript Section on The Odin Project",
  "3rd of May",
  "High priority",
  ["Bonus task 1", "Bonus task 2"],
  false
);

const theOdinProject = new Project("JavaScript Section", []);
theOdinProject.addToDoListItem(importantTask);

const appStateManager = new AppStateManager([]);
appStateManager.addToProjectsArray(theOdinProject);

//Load from localStorage when the app starts. Console.log() first. Add DOM elements later
console.log(appStateManager.getProjectsArray());

// Now test ToDo methods and save after each change
importantTask.toggleCompletion();
appStateManager.saveToLocalStorage();

importantTask.addChecklistItem(
  "Talk to Mr Maeda about your projects especially Javascript"
);
appStateManager.saveToLocalStorage();

importantTask.priority = "Low priority";
appStateManager.saveToLocalStorage();

console.log(importantTask);
console.log(theOdinProject);
console.log(appStateManager.getProjectsArray());