var ctx = document.getElementById('chartWeekly').getContext('2d');
var data = [];
for (var i = 0; i < 4; i++) {
    data.push(Math.floor(Math.random() * 25));
}
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Paper', 'PMD', 'Textiles', 'Composts', 'Residual'],
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            position: 'bottom',
            padding: 20,
            labels: {
                fontSize: 20
            }
        },
        title: {
            display: true,
            text: 'Trash this week',
            padding: 25,
            fontSize: 25
        }
    }
});

var ctx = document.getElementById('chartMonthly').getContext('2d');
var data = [];
for (var i = 0; i < 4; i++) {
    data.push(Math.floor(Math.random() * 25));
}
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Paper', 'PMD', 'Textiles', 'Composts', 'Residual'],
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            position: 'bottom',
            padding: 20,
            labels: {
                fontSize: 20
            }
        },
        title: {
            display: true,
            text: 'Trash this month',
            padding: 25,
            fontSize: 25
        }
    }
});