import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const { 'reset-target': target } = Object.fromEntries(data) as { 'reset-target': string };

    if (target && target.includes('@')) {
      console.log({ email: target });
    } else {
      console.log({ username: target });
    }

    return {
      status: 200,
      body: 'Password reset'
    }
  },
}
