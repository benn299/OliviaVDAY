var noButton = document.querySelector('#mainPanel button:nth-child(2)');
var isJumping = false;
var jumpInterval;

function showYesMessage() {
    alert("Yay! Let's celebrate this weekend!!!");
    showCatDancePanel();
    stopJumping();
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
        element.style.position = 'static';
        isJumping = false;  // Allow button to jump again after reaching the new position
        setTimeout(function () {
            jumpAround(element);  // Call jumpAround again after a delay
        }, 1000); // Delay for 1 second before the next jump
    }, 500); // Reset position after 0.5 seconds
}

function stopJumping() {
    // Clear the jumpInterval to stop the continuous jumping
    clearTimeout(jumpInterval);
}
function showCatDancePanel() {
    // Your logic to display the cat dance panel
    var noOptionPanel = document.getElementById('noOptionPanel');
    noOptionPanel.style.display = 'none';  // Hide the "No" panel
    var catDancePanel = document.getElementById('catDancePanel');
    catDancePanel.style.display = 'block';  // Show the cat dance panel
}
setTimeout(function () {
    jumpAround(noButton);
}, 1000); // Initial delay before starting the loop
