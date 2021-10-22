import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#fff',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#fff',
      yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const Chart3 = () => (
  <>
    <Line data={data} options={options} className="check3" />
  </>
);

export default Chart3;