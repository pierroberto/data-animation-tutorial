document.addEventListener("DOMContentLoaded", event => {
  const Chart =  require('chart.js')

  Chart.Tooltip.positioners.custom = (elements, eventPosition) => {
      console.log('custom', elements, 'eventsposition', eventPosition)
      const { x, y } = eventPosition
      return {
          x,
          y,
      };
  }

  const ctx = document.getElementById('myChart')

  const type = 'bar'

  const custom = (tooltipModel) => {
    const tooltipEl = document.getElementById('chartjs-tooltip')
    console.log('elem', tooltipEl)
  }

  const options = {
    responsive: true,
    animationDuration: 5000,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
            },
        }],
    },
    animation: {
      easing: 'easeOutBounce',
      duration: 1500,
    },

    tooltips: {
      enabled: true,
      backgroundColor: '#5991AF',
    },

    legend: {
      display: false,
    },
  }

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#5991AF',
        borderColor: 'transparent',
        borderWidth: 1
    }],
  }

  const myChart = new Chart(ctx, { type, data, options })

  return true
})
