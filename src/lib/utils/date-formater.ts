const dateTimeFormater = new Intl.DateTimeFormat('en-us', {
	day: '2-digit',
	year: 'numeric',
	month: '2-digit'
});

const inputDateReducer = (
	acc: { month: string; day: string; year: string },
	item: Intl.DateTimeFormatPart
) => {
	if (Object.keys(acc).includes(item.type)) {
		acc[item.type] = item.value;
	}
	return acc;
};

export const dateFormater = (date: Date, options: { forInputDate?: boolean } = {}) => {
	if (options.forInputDate) {
		const dateObj = dateTimeFormater
			.formatToParts(date)
			.reduce(inputDateReducer, { month: '', day: '', year: '' });
		return `${dateObj['year']}-${dateObj['month']}-${dateObj['day']}`;
	}
	return dateTimeFormater.format(date);
};
