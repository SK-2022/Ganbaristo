//Remember to use solid code principles
import {  printCompletionMessage  } from "../dom/uiHelpers";

export class ToDo {
  // The constructor initializes the properties of the ToDo object
  static nextId = 1;

  constructor(title, description, dueDate, priority, checklist, completed) {
    this.id = ToDo.id++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.completed = completed;
  }

  editToDoListItem(details) {
    if (details.title) this.title = details.title;
    if (details.description) this.description = details.description;
    if (details.dueDate) this.dueDate = details.dueDate;
    if (details.priority) this.priority = details.priority;
  }

  //This toggles whether the todo list item is completed(true) or not completed(false)
  toggleCompletion() {
    this.completed = !this.completed
  }

}

function checkCompletion() {
    if (this.completed) {
      printCompletionMessage(this.title);
    } 
  }

