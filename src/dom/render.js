const addTaskButton = document.querySelector('.add-task-button');
const projectList = document.querySelector('.project-list');
const todosListParentContainer = document.querySelector('.to-do-list-parent-container');

// Go through the projects array and display them in the .project-list element.

export function renderProjectList(projectsArray) {
  // Clear the current list to avoid duplicates
  projectList.innerHTML = '';

  // Loop through each project and create a list item
  projectsArray.forEach((project, index) => {
    const li = document.createElement('li');
    li.classList.add('project-list-item');
    // Add attribute for access to the index as set by the parameter
    li.setAttribute('data-index', index); //

    // Create an anchor tag for the project name
    const anchorTag = document.createElement('a');
    anchorTag.href = '#';
    anchorTag.textContent = project.name;

    // Append the anchor to the list item, and the list item to the project list.
    li.appendChild(anchorTag);
    projectList.appendChild(li);
  });
}

// Render the checklist items for each respective todo.
export function renderChecklistItems(checklist) {
  const ul = document.createElement('ul');
  ul.classList.add('checklist');

  checklist.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('checklist-item');

    // Optionally, use a checkbox to show completion
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.done;

    const label = document.createElement('span');
    label.textContent = item.title;

    if (item.done) {
      li.classList.add('done');
    }

    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  });

  return ul;
}

// Go through todos array and display them in the
export function renderTodosList(todosArray) {
  // Clear the current list to avoid duplicates
  todosListParentContainer.innerHTML = '';

  // Loop through each to do and create a div for it
  todosArray.forEach((todo) => {
    // Create the todo item container
    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add('to-do-list-container');

    // Create the checklist button for each to do item. Change to COMPLETION button later
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-button');
    doneButton.textContent = 'done';

    // Set a custom attribute or class based on completion
    // If the todo.completed is true.
    if (todo.completed) {
      doneButton.setAttribute('data-completed', 'true');
      todoListContainer.classList.add('completed');
    } else {
      doneButton.setAttribute('data-completed', 'false');
      todoListContainer.classList.remove('completed');
    }

    // Create the todo title container for the title.
    const todoTitleDiv = document.createElement('div');
    todoTitleDiv.classList.add('to-do-title');
    todoTitleDiv.textContent = todo.title;

    // Create the todo description container
    const todoDescription = document.createElement('div');
    todoDescription.classList.add('to-do-description');
    todoDescription.textContent = todo.description;

    // Create the todo date and priority parent container
    const dateAndPriorityContainer = document.createElement('div');
    dateAndPriorityContainer.classList.add('date-and-priority-container');

    // Create the todo date container
    const todoDate = document.createElement('div');
    todoDate.classList.add('to-do-date');
    todoDate.textContent = `Date: ${todo.dueDate}`;

    // Create the todo priority container
    const todoPriority = document.createElement('div');
    todoPriority.classList.add('to-do-priority');
    todoPriority.textContent = `Priority: ${todo.priority}`;

    // Add a class based on priority value
    if (todo.priority === 'High') {
      todoPriority.classList.add('priority-high');
    } else if (todo.priority === 'Medium') {
      todoPriority.classList.add('priority-medium');
    } else if (todo.priority === 'Low') {
      todoPriority.classList.add('priority-low');
    }

    // Add the checklist button and title to the todo container, then append it to the parent container
    todoListContainer.appendChild(doneButton);
    todoListContainer.appendChild(todoTitleDiv);
    todoListContainer.appendChild(todoDescription);

    todoListContainer.appendChild(dateAndPriorityContainer);
    dateAndPriorityContainer.appendChild(todoDate);
    dateAndPriorityContainer.appendChild(todoPriority);

    const checklistUl = renderChecklistItems(todo.checklist);
    todoListContainer.appendChild(checklistUl);

    todosListParentContainer.appendChild(todoListContainer);
  });
}

// Renders the currently selected project's title on the page.
export function renderProjectTitle(projectName) {
  const projectTitleDiv = document.querySelector('.project-title');
  if (projectTitleDiv) {
    projectTitleDiv.textContent = projectName;
  }
}
