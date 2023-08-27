import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Desktops",
					data: [10, 41, 35, 51, 49, 62, 69, 91, 100, 123, 111, 123],
				},
			],
			options: {
				chart: {
					height: 350,
					type: "line",
					zoom: {
						enabled: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "straight",
				},
				title: {
					text: "Message Statistics",
					align: "left",
				},
				subtitle: {
					text: "Last 30 days",
					align: "right",

					offsetX: -30, // Negative values to move to the right for elements that are right-aligned
					offsetY: 0,
				},

				grid: {
					row: {
						colors: ["#f3f3f3", "transparent"],
						opacity: 0.5,
					},
				},
				xaxis: {
					categories: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
				},
				annotations: {
					xaxis: [
						{
							x: "Sep",
							borderColor: "#333",
							label: {
								borderColor: "#333",
								style: {
									fontSize: "12px",
									color: "#fff",
									background: "#333",
								},
								text: "Last 30 days",
							},
						},
					],
				},
			},
		};
	}

	render() {
		return (
			<div id="chart">
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type="line"
					height={350}
				/>
			</div>
		);
	}
}

export default LineChart;
