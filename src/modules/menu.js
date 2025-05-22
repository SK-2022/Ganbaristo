// <!-- <div class="menu-container"> -->
//         <div class="first-line-of-menu">
//           <div class="menu-item-container">
//             <img
//               src="./images/Landscape pasta A.jpg"
//               alt="image of spaghetti in delicious white sauce"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/Landscape Pasta B.jpg"
//               alt="pasta balls in meat sauce"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/landscape pasta C.jpg"
//               alt="pasta in spices and green leaves"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//         </div>
//         <div class="second-line-of-menu">
//           <div class="menu-item-container">
//             <img
//               src="./images/landscape pasta D.jpg"
//               alt="macaroni pasta with some bread with butter"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/lansdscape italian meat.jpg"
//               alt="lamb chops"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//           <div class="menu-item-container">
//             <img
//               src="./images/Pasta B .jpg"
//               alt="spaghetti with shrimp and tomato"
//               class="menu-item-image"
//             />
//             <div class="menu-item-description">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
//               velit a amet et eius est omnis rerum sunt provident voluptatibus.
//             </div>
//           </div>
//         </div>
//       <!-- </div> -->

//Step 1 : Load all images in ./imagesfolder
const images = require.context('../images', false, /\.(png|jpe?g)$/)

//Step 2 : Helper function to get actual image path from filename
function getImagePath(filename){
  return images(`./${filename}`)
}

export function createMenu() {
    const menuData = [
      {
        src: "Landscape pasta A.jpg",
        alt: "image of spaghetti in delicious white sauce",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "Landscape Pasta B.jpg",
        alt: "pasta balls in meat sauce",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "landscape pasta C.jpg",
        alt: "pasta in spices and green leaves",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "landscape pasta D.jpg",
        alt: "macaroni pasta with some bread with butter",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "lansdscape italian meat.jpg",
        alt: "lamb chops",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
      {
        src: "Pasta B .jpg",
        alt: "spaghetti with shrimp and tomato",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit a amet et eius est omnis rerum sunt provident voluptatibus.",
      },
    ];
  
    const contentDiv = document.getElementById("content");
    //Empty the ContentDiv
    contentDiv.innerHTML = ""
    //Checks if there's anything in the content div
    if (!contentDiv) {
      console.error("No element with id 'content' found in the document.");
      return;
    }
  
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
  
    const firstLine = document.createElement("div");
    firstLine.className = "first-line-of-menu";
  
    const secondLine = document.createElement("div");
    secondLine.className = "second-line-of-menu";
  
    menuData.forEach((item, index) => {
      const container = document.createElement("div");
      container.className = "menu-item-container";
  
      const img = document.createElement("img");
      img.className = "menu-item-image";
      img.src = getImagePath(item.src); //Use the helper function to get the image filepath 
      img.alt = item.alt;
  
      const desc = document.createElement("div");
      desc.className = "menu-item-description";
      desc.textContent = item.description;
  
      container.appendChild(img);
      container.appendChild(desc);
  
      if (index < 3) {
        firstLine.appendChild(container);
      } else {
        secondLine.appendChild(container);
      }
    });
  
    menuContainer.appendChild(firstLine);
    menuContainer.appendChild(secondLine);
    contentDiv.appendChild(menuContainer);
  }
  