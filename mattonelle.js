
let mattonellaEconomyNum = 12;
let mattonellaCommonsNum = 20;
let clickedImagePath;
let myWindowWidth = window.innerWidth;
let myImage = document.getElementById('selected-image');
let overlay = document.getElementById('overlay');



 

let myContainers = document.querySelectorAll(".mattonelle-container");
myContainers.forEach(function(singleContainer){
    if(singleContainer.id == "economy"){
        for(let i = 0; i < mattonellaEconomyNum; i++){
             let mattonella = document.createElement('div');
             mattonella.classList.add('single-image-div');
             mattonella.classList.add('economy');
             let imgEl = document.createElement("img");
              myImgPath = `./images/mattonelle/economy/economic_${i}.jpg`;
             imgEl.src = myImgPath;
             mattonella.appendChild(imgEl);
             singleContainer.appendChild(mattonella)
        }
    }
    if(singleContainer.id == "commons"){
        for(let i = 0; i < mattonellaCommonsNum; i++){
            let mattonella = document.createElement('div');
            mattonella.classList.add('single-image-div');
            mattonella.classList.add('commons');
            let imgEl = document.createElement("img");
             myImgPath = `./images/mattonelle/commons/commons_${i}.webp`;
            imgEl.src = myImgPath;
            mattonella.appendChild(imgEl);
            singleContainer.appendChild(mattonella)
       }
    }
    
    


})

// Define the click event handler function outside of setupImageClickListeners

function handleImageClick(event) {
    let escButton = document.getElementById('esc');
    clickedImagePath = event.target.src;
    console.log('image creation');
    myImage.style.display = "block";
    escButton.style.display ="block";
    overlay.style.display = "block";
    
    let selectedImage = document.createElement('img');
    selectedImage.classList.add('single-project');
    selectedImage.src = clickedImagePath;
    myImage.appendChild(selectedImage);

    escButton.addEventListener('click', function() {
        console.log('image destroying');
        myImage.style.display = "none";
        overlay.style.display = "none";
        escButton.style.display ="none";
        if (selectedImage.parentNode) {
            selectedImage.parentNode.removeChild(selectedImage);
        }
    })
}



function setupImageClickListeners() {
    let allImages = document.querySelectorAll(".single-image-div");

    // Remove existing click event listeners
    allImages.forEach(function(singleImage) {
        singleImage.removeEventListener("click", handleImageClick);
    });

    // Check if the window width is greater than 744px
    if (window.innerWidth > 744) {
        // Hide any existing overlay
        myImage.style.display = "none";
        overlay.style.display = "none";

        // Add new click event listeners
        allImages.forEach(function(singleImage){
            singleImage.addEventListener("click", handleImageClick);
        });
    }
}

// Call the function initially to set up the click event listeners
setupImageClickListeners();

// Call the function again to re-setup the click event listeners on window resize
window.addEventListener("resize", function() {
    setupImageClickListeners();
    const windowWidth = window.innerWidth;
    const containers = document.querySelectorAll('.mattonelle-container');

    containers.forEach(container => {
        const dotContainer = container.nextElementSibling;
        if (windowWidth < 744) {
            // Show dots
            dotContainer.style.display = 'flex';
        } else {
            // Hide dots
            dotContainer.style.display = 'none';
        }
    });
});
