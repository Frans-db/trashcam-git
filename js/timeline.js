var labels = ['Paper', 'PMD', 'Textiles', 'Composts', 'Residual']

var ctx = document.getElementById('chartMonthlyDecember').getContext('2d');
var dataWeekly = [];
for (var i = 0; i < labels.length; i++) {
    dataWeekly.push(Math.floor(Math.random() * 25));
}
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: dataWeekly,
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
                fontSize: 30,
	        fontColor: "white",
		fontFamily: "Reem Kufi"
            }
        },
        title: {
            display: true,
            text: "December's total recycled: 234",
            padding: 25,
            fontSize: 35,
            fontColor: "white",
	    fontFamily: "Reem Kufi"
        }
    }
});

var ctx = document.getElementById('chartMonthlyNovember').getContext('2d');
var dataMonthly = [];
for (var i = 0; i < labels.length; i++) {
    dataMonthly.push(Math.floor(Math.random() * 25)) + dataWeekly[i];
}
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: dataMonthly,
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
                fontSize: 30,
                fontColor: "white",
      		fontFamily: "Reem Kufi"
            }
        },
        title: {
            display: true,
            text: "November's total recycled: 117",
            fontColor: "white",
	          fontFamily: "Reem Kufi",
            padding: 25,
            fontSize: 35
        }
    }
});
