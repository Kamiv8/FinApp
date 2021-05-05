import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { theme } from '../../../theme/MainTheme';

const SingleChart = ({ operations, sortedOperation, history }) => {
  // console.log(operations[0].map(x => x.price));
  // console.log(operations[0].map((x) => x.title));
  // console.log(operations[0].map((x) => x.currentMoney));
  let values = 0;
  let labels = '';
  if (operations !== null) {
    values = operations.map((x) => x.currentMoney);
    labels = operations.map((x) => x.date);
  }
  if (history && sortedOperation !== null) {
    values = sortedOperation.map((x) => x.price);
    labels = sortedOperation.map((x) => x.date);
    values.reverse();
    labels.reverse();
  }

  const DataChart = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, '#20f08b');
    gradient.addColorStop(0.5, '#20f08b');
    gradient.addColorStop(1, '#07dfb1');
    return {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: gradient,
          borderColor: [theme.white],
          borderWidth: 2,
        },
      ],
    };
  };
  const OptionsChart = {
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
  };

  return (
    <>
      <Line data={DataChart} options={OptionsChart} />
    </>
  );
};

const mapStateToProps = ({ operations, sortedOperation }) => ({
  operations,
  sortedOperation,
});

export default connect(mapStateToProps)(SingleChart);
