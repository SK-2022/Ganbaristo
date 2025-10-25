// App entry point
import './styles/output.css';
import Project from './modules/project.js';
import appStateManager from './modules/appState.js';
import { renderProjectList, renderTodosList } from './dom/render.js';
import initEventListeners from './dom/events.js';
// import { renderChecklistItems } from './dom/render.js';

const theOdinProject = new Project('The Odin Project', []);
const theFitnessProject = new Project('The Fitness Project', []);

appStateManager.addToProjectsArray(theOdinProject);
appStateManager.addToProjectsArray(theFitnessProject);
// Load from localStorage when the app starts. Console.log() first. Add DOM elements later

renderProjectList(appStateManager.projectsArray);
renderTodosList(theOdinProject.todosArray);

initEventListeners();
