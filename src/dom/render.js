const addTaskButton = document.querySelector(".add-task-button");
const projectList = document.querySelector(".project-list");
const todosListParentContainer = document.querySelector(
  ".to-do-list-parent-container"
);

//Go through the projects array and display them in the .project-list element.

export function renderProjectList(projectsArray) {
  //Clear the current list to avoid duplicates
  projectList.innerHTML = "";

  //Loop through each project and create a list item
  projectsArray.forEach((project) => {
    const li = document.createElement("li");
    li.classList.add("project-list-item");

    //Create an anchor tag for the project name
    const anchorTag = document.createElement("a");
    anchorTag.href = "#";
    anchorTag.textContent = project.name;

    //Append the anchor to the list item, and the list item to the project list.
    li.appendChild(anchorTag);
    projectList.appendChild(li);
  });
}

// Go through todos array and display them in the
export function renderTodosList(todosArray) {
  //Clear the current list to avoid duplicates
  todosListParentContainer.innerHTML = "";

  //Loop through each to do and create a div for it
  todosArray.forEach((todo) => {
    //Create the todo item container
    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("to-do-list-container");

    //Create the checklist button for each to do item
    //COME BACK HERE LATER FOR CHECKLIST FUNCTIONALITY
    const checklistButton = document.createElement("button");
    checklistButton.classList.add("checklist-button");
    checklistButton.textContent = "done";

    //Create the todo title container for the title.
    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.classList.add("to-do-title");
    todoTitleDiv.textContent = todo.title;

    //Create the todo description container
    const todoDescription = document.createElement("div");
    todoDescription.classList.add("to-do-description");
    todoDescription.textContent = todo.description;

    //Create the todo date and priority parent container
    const dateAndPriorityContainer = document.createElement("div");
    dateAndPriorityContainer.classList.add("date-and-priority-container");

    //Create the todo date container
    const todoDate = document.createElement("div");
    todoDate.classList.add("to-do-date");
    todoDate.textContent = todo.dueDate;

    //Create the todo priority container
    const todoPriority = document.createElement("div");
    todoPriority.classList.add("to-do-priority");
    todoPriority.textContent = todo.priority;

    // Add the checklist button and title to the todo container, then append it to the parent container
    todoListContainer.appendChild(checklistButton);
    todoListContainer.appendChild(todoTitleDiv);
    todoListContainer.appendChild(todoDescription);

    todoListContainer.appendChild(dateAndPriorityContainer);
    dateAndPriorityContainer.appendChild(todoDate);
    dateAndPriorityContainer.appendChild(todoPriority);
    todosListParentContainer.appendChild(todoListContainer);
  });
}

export function renderChecklistItems(checklist) {}
