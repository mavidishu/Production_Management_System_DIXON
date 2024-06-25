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
      text: 'Monthly Sales Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];


export default function App() {
  let context = useContext(UserContext);
  let {yearSales,getYearSales} = context;

  let data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: yearSales,
        backgroundColor: 'darkslateblue',
      },
      {
        label: 'Stock',
        data: [8000,5000,3000,6000,10000,6500,4000,5000,3000,2500,1100,4500], //array od data corresponding to labels
        backgroundColor: 'orange',
      },
    ],
  }
  useEffect(()=>{
    getYearSales();
  },[]);
  return <Bar options={options} data={data} />;
}