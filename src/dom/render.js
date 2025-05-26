import AppStateManager from "../modules/appState";
import ToDo from "../modules/todo";
import Project from "../modules/project";
import ChecklistItem from "../modules/checklist";

const addTaskButton = document.querySelector(".add-task-button");
const projectList = document.querySelector(".project-list");

//Go through the projects array and display them in the .project-list element.

export function renderProjectList(projectsArray) {
  //Clear the current list to avoid duplicates
  projectList.innerHTML = "";

  //Loop through each projecet and create a list item
  projectsArray.forEach(project => {
    const li = document.createElement("li");
    li.classList.add("project-list-item");

    //Create an anchor tag for the project name
    const anchorTag = document.createElement("a");
    anchorTag.href = "#";
    anchorTag.textContent = project.name;

    //Append the anchor to the list itme, and the list item to the project list.
    li.appendChild(anchorTag);
    projectList.appendChild(li);
  });
}

//How to test?
//Create a project array and STORE IT somewhere in a variable(Appstatemanager?)
//Access the project array through my renderProjectList function. 