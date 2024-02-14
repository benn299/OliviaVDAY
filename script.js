function showYesMessage() {
    alert("Yay! You said yes! Happy Valentine's Day!");
    showCatDancePanel();
}

function showNoMessage() {
    // Your existing "No" button logic
    var noButton = document.querySelector('#mainPanel button:nth-child(2)');
    jumpAround(noButton);
}

function jumpAround(element) {
    var maxX = window.innerWidth - element.offsetWidth;
    var maxY = window.innerHeight - element.offsetHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    element.style.position = 'absolute';
    element.style.left = newX + 'px';
    element.style.top = newY + 'px';

    setTimeout(function () {
        element.style.position = 'static';
    }, 500); // Reset position after 0.5 seconds
}
function showNoOptionPanel() {
    document.getElementById('mainPanel').style.display = 'none';
    document.getElementById('noOptionPanel').style.display = 'block';
}

function showCatDancePanel() {
    // Your logic to display the cat dance panel
    var noOptionPanel = document.getElementById('noOptionPanel');
    noOptionPanel.style.display = 'none';  // Hide the "No" panel
    var catDancePanel = document.getElementById('catDancePanel');
    catDancePanel.style.display = 'block';  // Show the cat dance panel
}
