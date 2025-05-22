{
  /* HTML CODE For the javascript below 
  <div id="content">
       <main class="chef-pic-container">
        <img src="./images/AlessandroSerenzahorizontal.jpg" alt="Chef Alessandro Serenza focused on prepping the next meal" class="chef-pic">
       </main>
       <div class="chef-description"> 
        <h2 class="chef-description-headline">About Chef Alessandro Serenza</h2>

        <p class="chef-description-text"><strong>Passione. Precisione. Perfezione.</strong></p>
    
        <p class="chef-description-text">For Chef Alessandro Serenza, Italian cuisine is more than just food—it’s an art form, a lifelong pursuit of culinary excellence. Dedicated to crafting the pinnacle of Italian gastronomy, he focuses relentlessly on one thing and one thing only: perfection on the plate.</p>
    
        <p class="chef-description-text">Specializing in the delicate mastery of pasta, Chef Serenza transforms simple ingredients into unforgettable experiences. Every dish is a testament to his unwavering dedication, blending tradition with innovation to elevate Italian flavors to their purest form.</p>
    
        <p class="chef-description-text">Yet, beyond the kitchen’s intensity, Alessandro is as warm as the dishes he creates. His focus is unmatched, but so is his ability to make those around him feel welcome, creating an atmosphere where great food and great company come together in perfect harmony.</p>
    
        <p class="chef-description-text">Welcome to his world—where pasta is poetry, and passion is served on every plate.</p></div>
    </div> */
}

export function createAboutPageElements(imageSource) {
  const contentContainer = document.getElementById("content");
  //First make the content div EMPTY.
  contentContainer.innerHTML = "";
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("chef-pic-container");
  contentContainer.appendChild(mainContainer);

  const chefImage = document.createElement("img");
  chefImage.classList.add("chef-pic");
  chefImage.src = imageSource;
  chefImage.alt = "Chef Alessandro Serenza focused on prepping the next meal";
  mainContainer.appendChild(chefImage);

  const chefDescriptionContainer = document.createElement("div");
  chefDescriptionContainer.classList.add("chef-description");
  contentContainer.appendChild(chefDescriptionContainer);

  const chefTitleText = document.createElement("h2");
  chefTitleText.classList.add("chef-description-headline");
  chefTitleText.innerHTML = "About Chef Alessandro Serenza";
  chefDescriptionContainer.appendChild(chefTitleText);

  const chefDescriptionText1 = document.createElement("p");
  chefDescriptionText1.classList.add("chef-description-text");
  chefDescriptionText1.innerHTML = "Passione. Precisione. Perfezione.";
  chefDescriptionContainer.appendChild(chefDescriptionText1);

  const chefDescriptionText2 = document.createElement("p");
  chefDescriptionText2.classList.add("chef-description-text");
  chefDescriptionText2.innerHTML =
    "For Chef Alessandro Serenza, Italian cuisine is more than just food—it’s an art form, a lifelong pursuit of culinary excellence. Dedicated to crafting the pinnacle of Italian gastronomy, he focuses relentlessly on one thing and one thing only: perfection on the plate.";
  chefDescriptionContainer.appendChild(chefDescriptionText2);

  const chefDescriptionText3 = document.createElement("p");
  chefDescriptionText3.classList.add("chef-description-text");
  chefDescriptionText3.innerHTML =
    "Specializing in the delicate mastery of pasta, Chef Serenza transforms simple ingredients into unforgettable experiences. Every dish is a testament to his unwavering dedication, blending tradition with innovation to elevate Italian flavors to their purest form.";
  chefDescriptionContainer.appendChild(chefDescriptionText3);

  const chefDescriptionText4 = document.createElement("p");
  chefDescriptionText4.classList.add("chef-description-text");
  chefDescriptionText4.innerHTML =
    "Yet, beyond the kitchen’s intensity, Alessandro is as warm as the dishes he creates. His focus is unmatched, but so is his ability to make those around him feel welcome, creating an atmosphere where great food and great company come together in perfect harmony.";
  chefDescriptionContainer.appendChild(chefDescriptionText4);

  const chefDescriptionText5 = document.createElement("p");
  chefDescriptionText5.classList.add("chef-description-text");
  chefDescriptionText5.innerHTML =
    "Welcome to his world—where pasta is poetry, and passion is served on every plate.";
  chefDescriptionContainer.appendChild(chefDescriptionText5);
}
