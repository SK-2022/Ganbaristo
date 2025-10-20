// In the uiHelpers file its ok to have a collection of small helper functions on their own that are exported individually.

// Here, toDoListTitle is only a string that represents the title of the todolistitem.
export function printCompletionMessage(toDoListTitle) {
  console.log(`${toDoListTitle} has been completed!`);
}

// Checks if the to do list item is completed and then prints it out in the console. Here 'todo' represents the entire object itself.
export function checkCompletion(todo) {
  if (todo.isCompleted) {
    printCompletionMessage(todo.title);
  }
}
