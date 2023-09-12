import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          stacked: true,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Message Statistics",
          align: "left",
        },
        subtitle: {
          text: "Last 30 days",
          align: "right",
          offsetX: -30,
          offsetY: 0,
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "category",
          categories: [], // Leave this empty for dynamically generated date labels
        },
        yaxis: {
          min: 0,
          labels: {
            formatter: function (value) {
              return Math.floor(value);
            },
          },
        },
        annotations: {
          xaxis: [
            {
              x: 15, // Set an example annotation position (you can adjust this as needed)
              borderColor: "#333",
              label: {
                borderColor: "#333",
                style: {
                  fontSize: "12px",
                  color: "#fff",
                  background: "#333",
                },
                text: "Current Date",
              },
            },
          ],
        },
        fill: {
          opacity: 0.5,
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
      },
    };
  }

  componentDidMount() {
    const today = new Date();
    const dateLabels = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dateLabels.push(date.toLocaleString("default", { month: "long", day: "numeric" }));
    }

    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: dateLabels,
        },
      },
    }));
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={650}
        />
      </div>
    );
  }
}

export default AreaChart;
