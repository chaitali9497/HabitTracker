import styles from '../../css/MonthlyChart.module.css';

// utils
import getCompletionCountPerMonth from '../../utils/getCompletionCountPerMonth';

// chart js
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler
);

function MonthlyChart({ options = {}, days = [], frequency = 1, color = "#4b7bec" }) {

	const MONTHS = [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	// Ensure always 12 values for chart
	let data = getCompletionCountPerMonth(days, frequency) || [];
	if (data.length < 12) {
		data = [...data, ...Array(12 - data.length).fill(0)];
	}

	const chartData = {
		labels: MONTHS,
		datasets: [
			{
				label: 'MonthlyChart',
				data,
				pointBackgroundColor: '#e6e6e6',
				pointBorderWidth: 0,
				borderColor: color,
				tension: 0.4,
				fill: true,
				backgroundColor: (context) => {
					const chart = context.chart;
					if (!chart || !chart.ctx || !chart.chartArea) return "transparent";

					const { ctx, chartArea: { top, bottom } } = chart;
					const gradient = ctx.createLinearGradient(0, top, 0, bottom);

					gradient.addColorStop(0, color);
					gradient.addColorStop(1, 'transparent');
					return gradient;
				},
			}
		]
	};

	const finalOptions = {
		responsive: true,
		maintainAspectRatio: false,
		...options
	};

	return <Line data={chartData} options={finalOptions} />;
}

export default MonthlyChart;
