import type { ActivityEntity } from '$lib/types';

export function sort_by(
	arr?: ActivityEntity[],
	key: keyof ActivityEntity,
	{ op = (p: any) => Number(p), descending = true } = {}
) {
	let factor = 1;
	if (!descending) {
		factor = -1;
	}
	return arr?.sort((a, b) => op(b[key]) * factor - op(a[key]) * factor);
}
