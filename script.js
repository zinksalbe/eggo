let countdown;

function startTimer() {
    let minutes = document.getElementById("timeInput").value;
    if (minutes < 1) return alert("Enter a valid time!");

    let timeLeft = minutes * 60;
    displayTime(timeLeft);

    countdown = setInterval(() => {
        timeLeft--;
        displayTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}

function displayTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    document.getElementById("timerDisplay").innerText =
        `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}
