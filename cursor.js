// // var cursor = document.querySelector(".cursor");
// let mouseX, mouseY;

const cursor = document.querySelector(".custom-cursor");

function hideMouse(){

  cursor.style.opacity = 0;
}


function mouseAppear(){
  cursor.style.opacity = 100;
}


//  const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//     mouseX = e.pageX;
//     mouseY = e.pageY;

    
//     cursor.style.left = mouseX - 30  + 'px';
//     cursor.style.top = mouseY - 30 + 'px';

// //     // document.getElementById('container').addEventListener('mouseover', function() {
// //     //     cursor.style.display = "none";
// //     // });
// //     //document.getElementById('container').addEventListener('mouseover', hideMouse);
    
// //     // document.getElementById('container').addEventListener('mouseout', function() {
// //     //   cursor.style.display = "block";
// //     // });
  

// })








// // document.addEventListener("DOMContentLoaded", function(event) {
  
// //   var initCursor = false;


// //   window.onmousemove = function(e) {
// //      mouseX = e.clientX;
// //      mouseY = e.clientY;

// //     if (!initCursor) {
// //       //  cursor.style.opacity = 1;
// //       TweenLite.to(cursor, 0.3, {
// //         opacity: 1
// //       });
// //       initCursor = true;
// //     }

// //     TweenLite.to(cursor, 0, {
// //       top: mouseY + "px",
// //       left: mouseX + "px"
// //     });
// //   };

// //   window.onmouseout = function(e) {
// //     TweenLite.to(cursor, 0.3, {
// //       opacity: 0
// //     });
// //     initCursor = false;
// //   };
// // });








document.addEventListener("DOMContentLoaded", function(event) {
  
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});
