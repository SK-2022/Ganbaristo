//REMEMBER SOLID PRINCIPLES

export default class Project {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
  }

  // Add a single ToDo object to the project's todo array
  addToDoListItem(item) {
    this.todos.push(item);
  }

  // Remove a ToDo object at the specified index
  removeToDoListItem(index) {
    this.todos.splice(index, 1);
  }
}
