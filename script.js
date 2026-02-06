function moveButton() {
    const x = Math.random() * (window.innerWidth - document.getElementById('noBtn').offsetWidth);
    const y = Math.random() * (window.innerHeight - document.getElementById('noBtn').offsetHeight);
    document.getElementById('noBtn').style.left = `${x}px`;
    document.getElementById('noBtn').style.top = `${y}px`;
}

function sayYes() {
    document.getElementById('question').innerHTML = "Yay! I knew you'd say yes! 🥰";
    document.querySelector('.buttons').style.display = 'none';
}
