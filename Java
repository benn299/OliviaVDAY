function showYesMessage() {
    alert("Yay! You said yes! Happy Valentine's Day!");
    showCatDancePanel();
}

function showNoMessage() {
    alert("Oh no! That's okay, maybe next time. Happy Valentine's Day!");
    showNoOptionPanel();
}

function showNoOptionPanel() {
    document.getElementById('mainPanel').style.display = 'none';
    document.getElementById('noOptionPanel').style.display = 'block';
}

function showCatDancePanel() {
    document.getElementById('mainPanel').style.display = 'none';
    document.getElementById('catDancePanel').style.display = 'block';
}
