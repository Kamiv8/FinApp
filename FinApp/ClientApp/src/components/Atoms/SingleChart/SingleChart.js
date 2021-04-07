import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { theme } from '../../../theme/MainTheme';

const SingleChart = ({ operations, allMoney }) => {
  // console.log(operations[0].map(x => x.price));
  // console.log(operations[0].map((x) => x.title));
  // console.log(operations[0].map((x) => x.currentMoney));
  let values = 0;
  let labels = '';
  if (operations !== null) {
    values = operations.map((x) => x.currentMoney);
    labels = operations.map((x) => x.date);
  }

  const color = () => {
    if (allMoney > 0) {
      return theme.green;
    }
    if (allMoney === 0) {
      return theme.orange;
    }
    return theme.red;
  };
  const optionsChart = {
    chartData: {
      labels,

      datasets: [
        {
          data: values,
          backgroundColor: color(),
          borderColor: [theme.white],
          borderWidth: 2,
        },
      ],
      options: {
        legend: {
          display: false,
        },
        simpeSize: 10,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
  };

  return (
    <>
      <Line data={optionsChart.chartData} options={optionsChart.chartData.options} />
    </>
  );
};

const mapStateToProps = ({ operations, allMoney }) => ({
  operations,
  allMoney,
});

export default connect(mapStateToProps)(SingleChart);
