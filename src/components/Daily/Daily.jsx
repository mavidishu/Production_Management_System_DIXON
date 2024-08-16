import React, { useEffect, useState } from 'react';
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
      beginAtZero: true,
      ticks: {
        stepSize: 1,       // Set scale increments to 1
        precision: 0,      // Ensure no decimal points
      },
    },
    // y1: {
    //   type: 'linear',
    //   display: true,
    //   position: 'right',
    //   grid: {
    //     drawOnChartArea: false,
    //   },
    // },
  },
};

const labels = ['Jan 2021', 'Aug 2022', 'Mar 2023', 'Apr 2024'];




function Daily() {
  let [hiring,setHiring] = useState([]);
  useEffect(()=>{
    const fetchEmployeeDate = async()=>{  
      const response = await fetch("http://localhost:5000/employees/insight");
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setHiring(jsonResponse);
    }
    fetchEmployeeDate();
  },[])
  const data = {
    labels,
    datasets: [
      {
        label: 'No of Employees',
        data: hiring,
        borderColor: 'black',
        backgroundColor: 'orange',
        yAxisID: 'y',
      },
    ],
  };
  return (
          <Line options={options} data={data} />
  )
}

export default Daily