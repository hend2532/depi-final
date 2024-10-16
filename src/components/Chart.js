import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CalorieWaterStepsChart = () => {
  const data = {
    labels: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
    datasets: [
      {
        label: 'Water Intake (L)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        data: [2, 2.5, 1.5, 3, 2.5, 2, 3.5], // بيانات استهلاك الماء
      },
      {
        label: 'Steps Taken',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        data: [5000, 7000, 6000, 8000, 9000, 7500, 10000], // بيانات عدد الخطوات
      },
      {
        label: 'Calories Burned',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        data: [200, 250, 150, 300, 250, 200, 350], // بيانات السعرات الحرارية
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Water Intake, Steps Taken, and Calories Burned',
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CalorieWaterStepsChart;
