let mattonellaEconomyNum = 13;
let mattonellaCommonsNum = 20;
let mattonellaCultureNum = 18;
let mattonellaPoliticsNum = 14;
let mattonellaTechnologyNum = 14;
let mattonellaFoodNum = 16;
let mattonellaNatureNum = 34;
let mattonellaWellbeingNum = 26;

let clickedImagePath;
let myWindowWidth = window.innerWidth;
let myImage = document.getElementById("selected-image");
let overlay = document.getElementById("overlay");
let imgEl;
let myImageWidth;

let myContainers = document.querySelectorAll(".mattonelle-container");

myContainers.forEach(function (singleContainer) {
  if (singleContainer.id == "economy") {
    for (let i = 0; i < mattonellaEconomyNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("economy");
      imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/economy/economic_${i}.jpg`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }
  if (singleContainer.id == "commons") {
    for (let i = 0; i < mattonellaCommonsNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("commons");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/commons/commons_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }

  if (singleContainer.id == "culture") {
    for (let i = 0; i < mattonellaCultureNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("culture");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/culture/culture_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }
  if (singleContainer.id == "politics") {
    for (let i = 0; i < mattonellaPoliticsNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("politics");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/politics/politics_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }

  if (singleContainer.id == "technology") {
    for (let i = 0; i < mattonellaTechnologyNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("technology");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/technology/technology_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }

  if (singleContainer.id == "food") {
    for (let i = 0; i < mattonellaFoodNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("food");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/food/food_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }

  if (singleContainer.id == "ecology") {
    for (let i = 0; i < mattonellaNatureNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("nature");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/nature/nature_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }
  if (singleContainer.id == "wellbeing") {
    for (let i = 0; i < mattonellaWellbeingNum; i++) {
      let mattonella = document.createElement("div");
      mattonella.classList.add("single-image-div");
      mattonella.classList.add("wellbeing");
      let imgEl = document.createElement("img");
      myImgPath = `./images/mattonelle/wellbeing/wellbeing_${i}.webp`;
      imgEl.src = myImgPath;
      mattonella.appendChild(imgEl);
      singleContainer.appendChild(mattonella);
    }
  }
});

document.addEventListener("load", function () {
  myImage.style.display = "none";
});

imgEl.addEventListener("load", function () {
  // The image has fully loaded, now you can get its width
  myImageWidth = imgEl.width; // or imgEl.naturalWidth for the original image width
  console.log("Image width:", myImageWidth);
});

// Define the click event handler function outside of setupImageClickListeners

function handleImageClick(event) {
  console.log(window.innerWidth);

  if (window.innerWidth > 743) {
    let escButton = document.getElementById("esc");
    clickedImagePath = event.target.src;
    console.log("image creation");
    myImage.style.display = "block";
    escButton.style.display = "block";
    overlay.style.display = "block";

    let selectedImage = document.createElement("img");
    selectedImage.classList.add("single-project");
    selectedImage.src = clickedImagePath;
    myImage.appendChild(selectedImage);

    escButton.addEventListener("click", function () {
      console.log("image destroying");
      myImage.style.display = "none";
      overlay.style.display = "none";
      escButton.style.display = "none";
      if (selectedImage.parentNode) {
        selectedImage.parentNode.removeChild(selectedImage);
      }
    });
  }
  if (window.innerWidth <= 743) {
    console.log("mobile click");
    // Open the clicked image in a new window
    let clickedImagePath = event.target.src;
    let newWindow = window.open("", "_blank");
    newWindow.document.write(
      "<html><head><title>Image Viewer</title></head><body>"
    );
    newWindow.document.write(
      '<img src="' + clickedImagePath + '" style="width:100vw; height:auto;">'
    );
    newWindow.document.write("</body></html>");
    newWindow.document.close();
  }
}

function setupImageClickListeners() {
  let allImages = document.querySelectorAll(".single-image-div");

  // Remove existing click event listeners
  allImages.forEach(function (singleImage) {
    singleImage.removeEventListener("click", handleImageClick);
  });

  // Check if the window width is greater than 744px
  //if (window.innerWidth >= 744) {
  // Hide any existing overlay
  myImage.style.display = "none";
  overlay.style.display = "none";

  // Add new click event listeners
  allImages.forEach(function (singleImage) {
    singleImage.addEventListener("click", handleImageClick);
  });
  // }
}

// Call the function initially to set up the click event listeners
setupImageClickListeners();

// Call the function again to re-setup the click event listeners on window resize
window.addEventListener("resize", function () {
  setupImageClickListeners();
  const windowWidth = window.innerWidth;
  containers = document.querySelectorAll(".mattonelle-container");

  containers.forEach((container) => {
    const dotContainer = container.nextElementSibling;
    if (windowWidth < 744) {
      // Show dots
      dotContainer.style.display = "flex";
    } else {
      // Hide dots
      dotContainer.style.display = "none";
    }
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const esc = document.getElementById('esc');
//     const svg = esc.querySelector('svg');
//     const vw = window.innerWidth / 100;
//     svg.querySelector('circle').style.strokeWidth = `${2 * vw}px`;
// });
