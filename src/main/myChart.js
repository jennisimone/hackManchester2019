let myChart;

function renderChart() {
    let ctx = document.getElementById("myChart").getContext('2d');

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: calendar.allDates,
            datasets: [{
                label: 'This week',
                data: [],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }],
        xAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
            }
        },
    });
}

function addAllData() {
    addData(priceData);
}

function addData(newData) {
    myChart.data.datasets[0].data = newData;
    myChart.resize();
    myChart.update();
}
