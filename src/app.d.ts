import type { UserEntity, AcceptLang } from '$lib/types';
import type { Security } from '$lib/security';
import PocketBase from 'pocketbase';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb?: PocketBase;
			lang: AcceptLang;
			security: Security;
		}
		interface PageData {
			user?: UserEntity;
		}
		interface PageState {
			showPage?: boolean;
		}
		// interface Platform {}
	}
}

export {};
