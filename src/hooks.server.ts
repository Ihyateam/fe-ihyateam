export async function handle({ event, resolve }) {
	const sessionID = event.cookies.get('session');

	if (sessionID) {
		event.locals.user = sessionID === '1' ? 'active' : 'disabled';
	}

	return resolve(event);
}
