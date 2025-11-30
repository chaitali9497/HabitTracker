import styles from '../../css/Calendar.module.css';

// components
import Month from './Month';

// utils
import getMonthsCount from '../../utils/getMonthsCount';

function Calendar(props) {
	const { completedDays } = props;

	// Fixed: directly calculating startMonth & endMonth
	const startMonth = new Date(
		completedDays[completedDays.length - 1]?.date || new Date()
	);

	const endMonth = new Date();
	const monthsCount = getMonthsCount(startMonth, endMonth);

	const visibleMonthsCount = Math.max(
		monthsCount,
		monthsCount <= 4 ? monthsCount : monthsCount <= 8 ? 8 : 12
	);

	let months = [];

	// day style adjustments
	const dayGap = Math.max(2, 6 - (monthsCount - 1) * 2) + 'px';
	const dayBorderRadius = Math.max(3, 10 - monthsCount * 2) + 'px';
	const isDaySquare = monthsCount > 1;

	for (let index = 0; index < visibleMonthsCount; index++) {
		const date = new Date(
			startMonth.getFullYear(),
			startMonth.getMonth() + index,
			1
        );

		months.push(
			<Month
				key={index}
				{...props}
				{{
					date,
					visibleMonthsCount,
					isDaySquare,
					dayGap,
					dayBorderRadius,
				}}
			/>
		);
	}

	const calendarStyle = {
		gridTemplateColumns: `repeat(${monthsCount > 3 ? 4 : monthsCount}, 1fr)`
	};

	return (
		<div style={calendarStyle} className={styles.calendar}>
			{months.length <= 12 ? months : months.slice(-12)}
		</div>
	);
}

export default Calendar;
