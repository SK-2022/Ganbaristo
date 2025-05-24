//App entry point
import "/src/styles/main.css";

import ToDo  from "./modules/todo.js";
import Project from "./modules/project.js";

const importantTask = new ToDo(
    "Incredibly Important task",
    "Work on the Javascript Section on The Odin Project",
    "3rd of May",
    "High priority",
    ["Bonus task 1", "Bonus task 2"],
    false,
)

//Testing the functionality of the ToDo Class. Passed!
importantTask.toggleCompletion()
importantTask.addChecklistItem("Talk to Mr Maeda about your projects especially Javascript")
importantTask.priority = "Low priority"
console.log(importantTask)

//Testing the functionality of the Project Class. Passed!
const theOdinProject = new Project("JavaScript Section", [])

theOdinProject.addToDoListItem(importantTask)

console.log(theOdinProject)