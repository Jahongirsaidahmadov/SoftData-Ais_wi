import React from 'react'

import ReactApexChart from 'react-apexcharts'

const ApexChart = (props) => {
  const { data } = props;
  const state = {
    series: data,
    options: {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                label: 'Jami',
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: [`Yosh bolalar (0-10) - <b>${data && data[0]}</b>`, `O'smirlar (11-17) - <b>${data && data[1]}</b>`, `O'spirinlar (18-25) - <b>${data && data[2]}</b>`, `O'rta yoshdagilar (26-40) - <b>${data && data[3]}</b>`, `Katta yoshdagilar (41-60) - <b>${data && data[4]}</b>`, `Keksalar (61 dan...) - <b>${data && data[5]}</b>`],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      colors: ["#A461D8", "#FFC107", "#FF6B72", "#04D182", "#3E82F7", "#F07427"]
    },
  };

  return (
    <div id="chart">
      {
        data && 
          <ReactApexChart options={state.options} series={state.series} type="donut" height={400} />
      }
    </div>
  );
}

export default ApexChart