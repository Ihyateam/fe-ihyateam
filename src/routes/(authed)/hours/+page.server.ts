export async function load({ locals, parent }) {
	const { user } = await parent();
	let efforts = (await locals.pb?.collection('effort').getFullList()) as any[];
	let commutes = (await locals.pb?.collection('commute').getFullList()) as any[];

	efforts = efforts.filter((effort) => effort.user_id === user.id);
	commutes = commutes.filter((effort) => effort.user_id === user.id);
	return {
		efforts,
		commutes
	};
}
