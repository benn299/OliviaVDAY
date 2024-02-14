function showYesMessage() {
    alert("Yay! You said yes! Happy Valentine's Day!");
    showCatDancePanel();
}

function showNoMessage() {
    // Your existing "No" button logic
    var noButton = document.querySelector('#mainPanel button:nth-child(2)');
    noButton.disabled = true;
    noButton.classList.add('jumping-no');
    setTimeout(function () {
        noButton.disabled = false;
        noButton.classList.remove('jumping-no');
    }, 500); // Allow button to be clicked again after 0.5 seconds
}

function showNoOptionPanel() {
    document.getElementById('mainPanel').style.display = 'none';
    document.getElementById('noOptionPanel').style.display = 'block';
}

function showCatDancePanel() {
    document.getElementById('mainPanel').style.display = 'none';
    document.getElementById('catDancePanel').style.display = 'block';
}
