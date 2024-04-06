
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






// Function to create dots for each container
function createDotsForContainer(containerId) {
    const container = document.getElementById(containerId);
    const images = container.querySelectorAll('.single-image-div');
    const dotContainer = document.createElement('div');
    dotContainer.classList.add('dot-container');

    // Dynamically create dots based on the number of .single-image-div elements
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = index; // Store the index for later use
        dotContainer.appendChild(dot);
    });

    // Insert the dotContainer after the .mattonelle-container
    container.parentNode.insertBefore(dotContainer, container.nextSibling);
}

// Call createDotsForContainer for each container
createDotsForContainer('economy');
createDotsForContainer('commons');

// Function to highlight the first dot in each dot-container
function highlightFirstDot() {
    const dotContainers = document.querySelectorAll('.dot-container');
    dotContainers.forEach(dotContainer => {
        const dots = dotContainer.querySelectorAll('.dot');
        if (dots.length > 0) {
            dots[0].classList.add('active');
        }
    });
}

// Call this function after creating dots for each container
highlightFirstDot();


function detectSwipe(element, callback) {
    console.log("detect swipe function");
    let touchstartX = 0;
    let touchendX = 0;
    let isSwiping = false; // Flag to track if a swipe is currently being processed

    element.addEventListener('touchstart', function(event) {
        if (!isSwiping) {
            touchstartX = event.changedTouches[0].screenX;
        }
    }, false);

    element.addEventListener('touchend', function(event) {
        if (!isSwiping) {
            touchendX = event.changedTouches[0].screenX;
            handleSwipe();
        }
    }, false);

    function handleSwipe() {
        let swipeDistance = Math.abs(touchendX - touchstartX);
        if (swipeDistance >= 10) {
            console.log("swipe");
            isSwiping = true; // Set the flag to true to indicate a swipe is being processed
            if (touchendX < touchstartX) {
                callback('left');
                console.log("sx");
            }
            if (touchendX > touchstartX) {
                callback('right');
                console.log("dx");
            }
            // Reset the flag after processing the swipe
            isSwiping = false;
        }
    }
}



// Initialize an object to store current indices for each container
let currentIndices = {
    economy: 0,
    commons: 0
};

// Modified handleSwipe function to accept containerId
function handleSwipe(containerId, direction) {
    console.log("handle direction");
    const container = document.getElementById(containerId);
    const dotContainer = container.nextElementSibling;
    const dots = dotContainer.querySelectorAll('.dot');

    // Update currentIndex for the specific container
    if (direction === 'left') {
        currentIndices[containerId] = Math.min(currentIndices[containerId] + 1, dots.length - 1); // Prevent going out of bounds
    } else if (direction === 'right') {
        currentIndices[containerId] = Math.max(currentIndices[containerId] - 1, 0); // Prevent going out of bounds
    }

    // Update dot highlighting
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndices[containerId]].classList.add('active');

    // Update displayed image based on currentIndex
    // This is a placeholder. You need to implement the logic to change the displayed image.
    // For example, you might change the src attribute of an img element to the src of the image at currentIndex.
}

// Update detectSwipe calls to pass containerId
myContainers.forEach(function(singleContainer) {
    detectSwipe(singleContainer, function(direction) {
        handleSwipe(singleContainer.id, direction);
    });
    console.log("swipe detected");
});
