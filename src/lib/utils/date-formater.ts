export const dateFormater = (date: Date, code: string = 'en-uk') =>
	new Intl.DateTimeFormat(code).format(date);
