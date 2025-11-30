import styles from '../../css/WeekdayChart.module.css';

// utils
import getCompletionCountPerDay from '../../utils/getCompletionCountPerDay';

// chart js
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function WeekdayChart({
	options = {},
	days = [],
	frequency = 1,
	color = "#4b7bec"
}) {

	const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	// ensure 7 values — fallback to zeros
	let data = getCompletionCountPerDay(days, frequency) || [];
	if (data.length < 7) {
		data = [...data, ...Array(7 - data.length).fill(0)];
	}

	// reorder Mon → Sun
	const labels = [...WEEKDAYS.slice(1), WEEKDAYS[0]];
	const values = [...data.slice(1), data[0]];

	const chartData = {
		labels,
		datasets: [{
			label: 'WeekdayChart',
			data: values,
			backgroundColor: color,
			borderRadius: 10,
			borderSkipped: false
		}]
	};

	const finalOptions = {
		responsive: true,
		maintainAspectRatio: false,
		...options
	};

	return <Bar data={chartData} options={finalOptions} />;
}

export default WeekdayChart;
