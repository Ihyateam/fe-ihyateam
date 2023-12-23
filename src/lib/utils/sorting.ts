import type { ActivityEntity } from '$lib/types';

export function sort_by(
	arr: ActivityEntity[] = [],
	key: 'students' | 'start_date' | 'end_date',
	{ op = (p: number | string | Date) => Number(p), descending = true } = {}
) {
	if (arr.length === 0) return arr;

	const factor = descending ? 1 : -1;
	return arr.sort((a, b) => op(b[key]) * factor - op(a[key]) * factor);
}
