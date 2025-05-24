//This is a central place to store all projects and handle app-wide actions like adding/deleting a project or saving to localStorage.
export default class AppStateManager { 
    constructor(projectsArray) {
      this.projectsArray = projectsArray
    }

    //Add a project to the AppStateManager
    addToProjectsArray(project) {
      this.projectsArray.push(project)
    }

    //Remove a project from the AppStateManager
    removeFromProjectsArray(index) {
      this.projectsArray.splice(index, 1)
    }
}