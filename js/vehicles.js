function buildMPGChart() {
    const ctx = document.getElementById("vehicle-mpg-chart").getContext('2d');
    const vehicleMPG = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: 'MPG',
                data: [21, 18.9, 19, 14, 18.5, 17.5],
                borderWidth: 1
            }]
        }
    });
    return vehicleMPG;
}

function buildCostChart() {
    const ctx = document.getElementById('vehicle-cost-chart').getContext('2d');
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Fuel", "Maintenance", "Upgrade"],
            datasets: [{
                label: "YTD Cost",
                data: [1564, 342, 975],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ]
            }]
        }
    });
}

function initPage() {
    /* Init page after DOM is finished loading. */
    buildMPGChart();
    buildCostChart();
}

document.addEventListener('DOMContentLoaded', initPage);