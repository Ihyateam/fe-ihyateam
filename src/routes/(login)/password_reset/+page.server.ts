export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        console.log(Object.fromEntries(data));

        return {
            status: 200,
            body: 'Password reset'
        }
    },
}