// Sample data for the leaderboard
const leaderboardData = [
    { name: "Player 1", score: 300 },
    { name: "Player 2", score: 250 },
    { name: "Player 3", score: 200 },
    // Add more data as needed
];

// Function to generate the table content
function generateTable() {
    const table = document.getElementById("rankings");

    leaderboardData.forEach((player, index) => {
        const row = table.insertRow();
        const cellRank = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellScore = row.insertCell(2);

        cellRank.textContent = index + 1;
        cellName.textContent = player.name;
        cellScore.textContent = player.score;
    });
}

// Function to generate bar chart
function generateBarChart() {
    const ctx = document.getElementById("barChart").getContext("2d");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: leaderboardData.map(player => player.name),
            datasets: [{
                label: 'Scores',
                data: leaderboardData.map(player => player.score),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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

// Function to generate pie chart
function generatePieChart() {
    const ctx = document.getElementById("pieChart").getContext("2d");
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: leaderboardData.map(player => player.name),
            datasets: [{
                data: leaderboardData.map(player => player.score),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // Add more colors as needed
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // Add more colors as needed
                ],
                borderWidth: 1
            }]
        }
    });
}

// Call the functions to generate content
generateTable();
generateBarChart();
generatePieChart();
