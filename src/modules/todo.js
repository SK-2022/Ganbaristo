//Remember to use SOLID code principles
import {
  formatDistance,
  subDays,
  formatDistanceToNow,
  format,
  formatRelative,
  isAfter,
} from "date-fns";

export default class ToDo {
  // The constructor initializes the properties of the ToDo object
  static nextId = 1;

  constructor(title, description, dueDate, priority, checklist, completed) {
    this.id = ToDo.nextId++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.completed = completed;
  }

  //Allows users to edit each of the toDo list parameters
  editToDoListItem(details) {
    if (details.title) this.title = details.title;
    if (details.description) this.description = details.description;
    if (details.dueDate) this.dueDate = details.dueDate;
    if (details.priority) this.priority = details.priority;
  }

  //This toggles whether the todo list item is completed(true) or not completed(false)
  toggleCompletion() {
    this.completed = !this.completed;
  }

  //Checks if the todo list item is completed
  isCompleted() {
    return this.completed;
  }

  //Adds an item to the checklist array
  addChecklistItem(checklistItem) {
    this.checklist.push(checklistItem);
  }
  //Removes an item at the specified index in the checklist array
  removeChecklistItem(index) {
    this.checklist.splice(index, 1);
  }

  //Format the date for the due date of the to do list item.
  formatDate() {
    return format(new Date(this.dueDate), "PPPP");
  }

  //Checks if the first date is after the second one and returns the overdue notice if true and false if....well false.
  isOverdue() {
    return isAfter(new Date(), new Date(this.dueDate)) ? "This is overdue!" : false;
  }
}

//An array that has priorities to choose from.
export const prioritySelectionsArray = ["Low", "Medium", "High"];
