import { fail, redirect, type ServerLoad } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

const responses = {
  de: {
    errorAdm:
      'ein Fehler aufgetreten, bitte kontaktieren Sie den Administrator, um das Problem zu lösen.',
    errorMsg: 'Das Kennwort oder der Benutzername, den Sie eingegeben haben, ist falsch.',
    errorDis: 'Ihr Konto wurde deaktiviert, bitte kontaktieren Sie den Administrator.'
  },
  en: {
    errorAdm: 'An error occurred, please contact the administrator to solve the problem.',
    errorMsg: 'The password or username you entered is incorrect',
    errorDis: 'Your account has been disabled, please contact the administrator.'
  },
  ar: {
    errorAdm: 'حدث خطأ رجاءاً تواصل مع المسؤول لحل المشكلة.',
    errorMsg: 'كلمة السر أو اسم المستخدم الذي أدخلته غير صحيح',
    errorDis: 'تم تعطيل حسابك، يرجى التواصل مع المسؤول.'
  }
};

export const load: ServerLoad = async function({ locals: { security }, url }) {
  if (security.isAlreadyAuthenticated()) {
    redirect(302, url.searchParams.get('redirect') ?? '/');
  }

  return {}
}

export const actions = {
  default: async ({ request, locals, url }) => {
    const { pb, lang } = locals;
    const targetUrl = url.searchParams.get('redirect') || '/';

    const loginData = Object.fromEntries(await request.formData()) as {
      username: string;
      password: string;
    };

    try {
      if (!pb?.authStore.isValid) {
        await pb
          ?.collection('users')
          .authWithPassword(loginData.username, loginData.password, { expand: 'photo_id' });
      }
    } catch (err) {
      if (err instanceof ClientResponseError) {
        if (err.status === 403) {
          return fail(err.status, { ...err.data, message: responses[lang].errorDis });
        }
        return fail(401, { message: responses[lang].errorMsg });
      }
      return fail(500, {
        message: responses[lang].errorAdm
      });
    }

    redirect(301, targetUrl);
  }
};
