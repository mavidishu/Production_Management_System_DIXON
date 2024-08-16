import React, { useContext, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import UserContext from '../../context/user/UserContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'FY - 24 Sales Overview',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];


export default function App() {
  let context = useContext(UserContext);
  let {yearSales,getYearSales} = context;
  console.log(yearSales);
  let data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: yearSales,
        backgroundColor: 'orange',
      }
    ],
  }
  useEffect(()=>{
    getYearSales();
  },[]);
  return <Bar options={options} data={data} />;
}