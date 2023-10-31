export const actions = {
	login: async ({ cookies }) => {
		cookies.set('cabbar', 'I am testing what this does');
	}
};
