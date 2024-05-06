import type { UserEntity, AcceptLang } from '$lib/types';
import PocketBase from 'pocketbase';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb?: PocketBase;
			lang: AcceptLang;
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
