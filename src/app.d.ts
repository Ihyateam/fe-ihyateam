import type { UserEntity } from '$lib/types';
import PocketBase from 'pocketbase';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb?: PocketBase;
		}
		interface PageData {
			user?: UserEntity;
		}
		// interface Platform {}
	}
}

export {};
