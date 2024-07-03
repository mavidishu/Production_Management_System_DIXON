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
import faker from 'faker';
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
      text: 'FY - 24 Production Overview',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];


export default function App() {
  let context = useContext(UserContext);
  let {yearSales,getYearSales} = context;
  console.log(yearSales);
  let data = {
    labels,
    datasets: [
      {
        label: 'Production',
        data: yearSales,
        backgroundColor: 'darkslateblue',
      },
      {
        label: 'Stock',
        data: [2300,1200,1700,650,500,1000,1000,1100,1600,3000,2200,2000], //array of data [order placed by company]
        backgroundColor: 'orange',
      },
    ],
  }
  useEffect(()=>{
    getYearSales();
  },[]);
  return <Bar options={options} data={data} />;
}