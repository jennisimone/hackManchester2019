let myChart;

function renderChart() {
    let ctx = document.getElementById("myChart").getContext('2d');

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'This week',
                data: [],
            }]
        },
    });
}

function addAllData() {
    addData(priceData);
}

function addData(newData) {
    myChart.data.datasets[0].data = newData;
    myChart.update();
}
