// REMEMBER SOLID PRINCIPLES

export default class Project {
  constructor(name, todosArray) {
    this.name = name;
    this.todosArray = todosArray;
  }

  // Add a single ToDo object to the project's todo array
  addToDoListItem(item) {
    this.todosArray.push(item);
  }

  // Remove a ToDo object at the specified index
  removeToDoListItem(index) {
    this.todosArray.splice(index, 1);
  }

  // Filters the todosArray for todos that aren't completed
  retrieveActiveToDos() {
    const activeTodos = this.todosArray.filter((todo) => !todo.completed);
    return activeTodos;
  }

  // Filters the todosArray for todos that are completed.
  retrieveCompletedToDos() {
    const completedTodos = this.todosArray.filter((todo) => todo.completed);
    return completedTodos;
  }
}
