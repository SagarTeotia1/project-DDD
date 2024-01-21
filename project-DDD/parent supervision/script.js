// Sample data for leaderboard and progress graph
const leaderboardData = [
    { name: "User1", score: 120 },
    { name: "User2", score: 90 },
    { name: "User3", score: 80 },
    { name: "User4", score: 60 },
    { name: "User5", score: 40 },
];

const progressData = [30, 60, 90, 120, 150];

function setTimeLimit() {
    var timeLimit = document.getElementById("timeLimit").value;

    if (timeLimit === "" || isNaN(timeLimit) || timeLimit <= 0) {
        showMessage("Please enter a valid positive number for the time limit.");
        return;
    }

    // Here, you can add logic to store the time limit, such as sending it to a server or using browser storage.

    showMessage("Time limit set successfully: " + timeLimit + " minutes");
}

function showMessage(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
}

function updateLeaderboard() {
    const leaderList = document.getElementById("leaderList");
    leaderList.innerHTML = ""; // Clear existing entries

    leaderboardData.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.name}: ${entry.score} minutes`;
        leaderList.appendChild(li);
    });
}

function updateProgressGraph() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                label: 'Time Spent (minutes)',
                data: progressData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateProgressReport() {
    const reportText = document.getElementById("reportText");
    const totalUsage = progressData[progressData.length - 1];
    reportText.textContent = `Your child has spent a total of ${totalUsage} minutes online in the past 5 weeks.`;
}

// Initial updates
updateLeaderboard();
updateProgressGraph();
updateProgressReport();
