//App entry point
import "/src/styles/main.css";

import ToDo  from "./modules/todo.js";

const importantTask = new ToDo(
    "Incredibly Important task",
    "This task must be done ASAP",
    "3rd of May",
    "High priority",
    ["Bonus task 1", "Bonus task 2"],
    false,
)

console.log(importantTask)