import React from 'react'
import "./breakdown.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Clothings', 'Shoes', 'Electronics', 'Accessories', 'Groceries', 'Misc'],
  datasets: [
    {
      label: 'No of Products',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



function Breakdown() {
  return (
    <section id='breadkdown'>
      <div className="container my-3 mx-3">
      <h3 className='my-3'>Product Breakdown</h3>
      <p>Breakdown of sales by category</p>
      <div className="pieContainer">
        <Pie data={data} />
      </div>
      </div>
    </section>
  )
}

export default Breakdown