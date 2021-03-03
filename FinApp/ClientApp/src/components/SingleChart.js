import React, { Component } from 'react';
import { Line,Bar } from 'react-chartjs-2';
import { theme } from '../theme/MainTheme';



class SingleChart extends Component {
  state = {
    chartData: {
      labels: [new Date().getDate(), 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          data: [200, 250, 500, 1100, -900, 300],
          backgroundColor: [
            theme.green

          ],
          borderColor: [
            theme.white,

          ],
          borderWidth: 2,
        },
      ],
    options: {
        legend: {
            display: false,
        },
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
  }
    }

  render() {
    return <Line data={this.state.chartData} options={this.state.chartData.options} />;
  }
}

export default SingleChart;