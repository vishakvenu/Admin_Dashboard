import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# Highest',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#fff',
    },
    {
      label: '# Minimum',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: '#fff',
    },
    {
      label: '# Average',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: '#fff',
    },
  ],
};

const options = {
  scales: {
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true
      }
    },
    x: {
      stacked: true
    }
  }
};

const Charts = () => (
  <>
    <Bar data={data} options={options} className="check"/>
  </>
);

export default Charts;