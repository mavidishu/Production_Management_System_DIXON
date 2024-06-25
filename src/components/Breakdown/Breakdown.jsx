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
        '#483D8B',
        '#6495ED',
        '#7B68EE',
        '#6A5ACD',
        '#E6E6FA',
        '#AFEEEE',
      ],
      borderColor: [
        '#B0C4DE',
        '#B0C4DE',
        '#B0C4DE',
        '#B0C4DE',
        '#B0C4DE',
        '#B0C4DE',
      ],
      borderWidth:1,
    },
  ],
};



function Breakdown() {
  return (
    <section id='breadkdown'>
      <div className="containerBreakdown">
        <h3 className='breakdownTitle'>Product Breakdown</h3>
        <p>Breakdown of sales by category</p>
        <div className="pieContainer">
          <Pie data={data} />
        </div>
      </div>
    </section>
  )
}

export default Breakdown