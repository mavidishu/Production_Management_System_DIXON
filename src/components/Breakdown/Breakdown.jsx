import React, { useContext, useEffect } from 'react'
import "./breakdown.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import UserContext from '../../context/user/UserContext';

ChartJS.register(ArcElement, Tooltip, Legend);

function Breakdown() {
  let context = useContext(UserContext);
  let {productCategory,getProductCategory,productCategoryResult} = context;

  useEffect(()=>{
    getProductCategory();
  },[]);
  //misc 11
  const data = {
    labels: productCategoryResult,
    datasets: [
      {
        label: 'No of Products',
        data: productCategory,
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