const dateTimeFormater = new Intl.DateTimeFormat('en-us');

export const dateFormater = (date: Date) => dateTimeFormater.format(date);
