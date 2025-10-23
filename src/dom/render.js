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

// Go through todos array and display them in the
export function renderTodosList(todosArray) {
  // Clear the current list to avoid duplicates
  todosListParentContainer.innerHTML = '';

  // Loop through each to do and create a div for it
  todosArray.forEach((todo, index) => {
    // Create the todo item container
    const todoListContainer = document.createElement('div');
    todoListContainer.classList.add('to-do-list-container');

    // Create the completion button for each to do item.
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-button');
    doneButton.textContent = 'done';

    // Wire up toggle behaviour for the completion button. Remember, you have access to each todo object within this loop. Thats why this works.
    doneButton.addEventListener('click', () => {
      todo.toggleCompletion();
      doneButton.setAttribute('data-completed', todo.completed ? 'true' : 'false');
      todoListContainer.classList.toggle('completed', todo.completed);
    });

    // Create the delete button
    const todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('todo-delete-button');
    todoDeleteButton.textContent = 'delete';

    // Wire up click behavior for deletion.
    todoDeleteButton.addEventListener('click', () => {
      // Removes the todo object from the todosarray and erases the HTML
      todosArray.splice(index, 1);
      todoListContainer.innerHTML = '';
    });

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

    todoListContainer.appendChild(todoDeleteButton);

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

// Renders the project name input dialog box

export function renderProjectAdditionDialogBox() {
  // Create the dialog box form
  const projectAdditionForm = document.querySelector('.project-addition-dialog-box');
  // Clears the form everytime to prevent duplicates
  projectAdditionForm.textContent = '';

  // Create the dialogue box text  div and insert text
  const projectAdditionDialogBoxTextDiv = document.createElement('div');
  projectAdditionDialogBoxTextDiv.classList.add('project-addition-dialog-box-text');
  projectAdditionDialogBoxTextDiv.textContent = 'Enter your new project title';

  // Create the project title container
  const projectTitleContainer = document.createElement('div');
  projectTitleContainer.classList.add('project-title-input-container');

  // Create input for project name
  const projectNameInput = document.createElement('input');
  projectNameInput.classList.add('project-title-input');
  projectNameInput.type = 'text';
  projectNameInput.name = 'title';
  projectNameInput.placeholder = 'My New Project';

  // Create button for adding the project name
  const projectSubmissionBtn = document.createElement('button');
  projectSubmissionBtn.classList.add('project-name-submission-btn');
  projectSubmissionBtn.type = 'submit';
  projectSubmissionBtn.textContent = 'Add project';

  // Append elements to their relevant containers
  projectAdditionForm.appendChild(projectAdditionDialogBoxTextDiv);
  projectAdditionForm.appendChild(projectTitleContainer);
  projectAdditionForm.appendChild(projectSubmissionBtn);

  projectTitleContainer.appendChild(projectNameInput);
}
