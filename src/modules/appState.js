// This is a central place to store all projects and handle app-wide actions like adding/deleting a project or saving to localStorage.
import Project from './project.js';

class AppStateManager {
  constructor(projectsArray) {
    this.projectsArray = projectsArray;
  }

  // Add a project to the AppStateManager
  addToProjectsArray(project) {
    this.projectsArray.push(project);
    this.saveToLocalStorage();
  }

  // Remove a project from the AppStateManager
  removeFromProjectsArray(index) {
    this.projectsArray.splice(index, 1);
    this.saveToLocalStorage();
  }

  // Save the projects array (and todos) to localStorage
  saveToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projectsArray));
  }

  // Retrieve the projects array from localStorage, always return an array. Also return the projects array in the form of a real object thats usable, hence the use of mapping.
  getProjectsArray() {
    const loadedProjects = JSON.parse(localStorage.getItem('projects'));
    this.projectsArray = Array.isArray(loadedProjects)
      ? loadedProjects.map((proj) => new Project(proj.name, proj.todosArray))
      : [];
    return this.projectsArray;
  }
}

const appStateManager = new AppStateManager([]);
// You only need ONE instance of appStateManager hence exporting it and not the class as a whole
export default appStateManager;
