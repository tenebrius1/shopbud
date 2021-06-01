document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
  var gradient = ctx.createLinearGradient(0, 0, 0, 225);
  gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
  gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
  // Line chart
  new Chart(document.getElementById("chartjs-dashboard-line"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales ($)",
        fill: true,
        backgroundColor: gradient,
        borderColor: window.theme.primary,
        data: [
          2115,
          1562,
          1584,
          1892,
          1587,
          1923,
          2566,
          2448,
          2805,
          3438,
          2917,
          3327
        ]
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        intersect: false
      },
      hover: {
        intersect: true
      },
      plugins: {
        title: {
          display: true,
          text: 'Razer Deathadder'
        },
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.0)"
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 1000
          },
          display: true,
          borderDash: [3, 3],
          gridLines: {
            color: "rgba(0,0,0,0.0)"
          }
        }]
      }
    }
  });
  new Chart(document.getElementById("chartjs-dashboard-line1"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales ($)",
        fill: true,
        backgroundColor: gradient,
        borderColor: window.theme.primary,
        data: [
          2115,
          1562,
          1584,
          1892,
          1587,
          1923,
          2566,
          2448,
          2805,
          3438,
          2917,
          3327
        ]
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        intersect: false
      },
      hover: {
        intersect: true
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.0)"
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 1000
          },
          display: true,
          borderDash: [3, 3],
          gridLines: {
            color: "rgba(0,0,0,0.0)"
          }
        }]
      }
    }
  });
  new Chart(document.getElementById("chartjs-dashboard-line2"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales ($)",
        fill: true,
        backgroundColor: gradient,
        borderColor: window.theme.primary,
        data: [
          2115,
          1562,
          1584,
          1892,
          1587,
          1923,
          2566,
          2448,
          2805,
          3438,
          2917,
          3327
        ]
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        intersect: false
      },
      hover: {
        intersect: true
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.0)"
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 1000
          },
          display: true,
          borderDash: [3, 3],
          gridLines: {
            color: "rgba(0,0,0,0.0)"
          }
        }]
      }
    }
  });
});




document.addEventListener("DOMContentLoaded", function () {
  // Pie chart
  new Chart(document.getElementById("chartjs-dashboard-pie"), {
    type: "pie",
    data: {
      labels: ["Lazada", "Shopee", "Others"],
      datasets: [{
        data: [4306, 3801, 1689],
        backgroundColor: [
          window.theme.primary,
          window.theme.warning,
          window.theme.danger
        ],
        borderWidth: 5
      }]
    },
    options: {
      responsive: !window.MSInputMethodContext,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      cutoutPercentage: 75
    }
  });
});