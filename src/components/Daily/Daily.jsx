import React from 'react';
import "./daily.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {

  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Units',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'orange',
      backgroundColor: 'orange',
      yAxisID: 'y',
    },
    {
      label: 'Total Sales',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'darkslateblue',
      backgroundColor: 'darkslateblue',
      yAxisID: 'y1',
    },
  ],
};


function Daily() {
  return (
    <section id='daily'>
      <div className="container">
        <h3 className='dailyTitle'>Daily Sales</h3>
        <div className="mx-3 chartContainer my-3">
          <Line options={options} data={data} />
        </div>
      </div>
    </section>
  )
}

export default Daily