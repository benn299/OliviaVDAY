var noButton = document.querySelector('#mainPanel button:nth-child(2)');
var isJumping = false;

function showYesMessage() {
    alert("Yay! Let's celebrate this weekend!!!");
    showCatDancePanel();
}

function showNoMessage() {
    if (!isJumping) {
        // Your existing "No" button logic
        jumpAround(noButton);
        
    }
}

function jumpAround(element) {
    isJumping = true;
    var maxX = window.innerWidth - element.offsetWidth;
    var maxY = window.innerHeight - element.offsetHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    element.style.position = 'absolute';
    element.style.left = newX + 'px';
    element.style.top = newY + 'px';

    setTimeout(function () {
        isJumping = false;  // Allow button to jump again after reaching the new position
    }, 500); // Reset flag after 0.5 seconds
}


function showCatDancePanel() {
    // Your logic to display the cat dance panel
    var noOptionPanel = document.getElementById('noOptionPanel');
    noOptionPanel.style.display = 'none';  // Hide the "No" panel
    var catDancePanel = document.getElementById('catDancePanel');
    catDancePanel.style.display = 'block';  // Show the cat dance panel
    
}
