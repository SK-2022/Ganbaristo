import "./styles.css";

import chefImage from "./images/AlessandroSerenzahorizontal.jpg"; //This was VERY challenging to figure out. The reason I couldn't get chef alessandro's picture to come on was because I didn't import it. When using modules you have to import the pictures.
import { createHomepageElements } from "./modules/initial-page-load";
import { createAboutPageElements } from "./modules/about";
import { createMenu } from "./modules/menu";
import { createReservationForms } from "./modules/reserve-a-table";
 
console.log("Server running....");

//Loads the homepage and creates all elements with their appropriate styles
createHomepageElements();


//Create the tab switching logic HERE. Wipe current conets of div#content and run the correct module for the corresponding tab.

const homeButton = document.querySelector(".nav-bar-buttons.home");
const aboutButton = document.querySelector(".nav-bar-buttons.about");
const menuButton = document.querySelector(".nav-bar-buttons.menu");
const reserveTableButton = document.querySelector(".nav-bar-buttons.reserve");

//Adds the click function. Ensures the homepage is empty before appending anything.
  homeButton.addEventListener('click', () => createHomepageElements());
  aboutButton.addEventListener('click', () => createAboutPageElements(chefImage)); 
  menuButton.addEventListener('click', () => createMenu()) //I used the require.context() function to import all the images dynamically onto my menu WITHIN the menu.js menu

  // This adds the click function differently for the reserve page
  createReservationForms()