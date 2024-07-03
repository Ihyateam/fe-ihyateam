import { error, type RequestEvent } from '@sveltejs/kit';
import type { AuthModel } from 'pocketbase';

const config = {
	ar: {
		error: {
			message: 'هذا المسار يحتاج إلى صلاحيات إدارية.'
		}
	}
};

export class Security {
	private readonly user?: AuthModel;

	constructor(private readonly event: RequestEvent) {
		this.user = this.event.locals.pb?.authStore.model;
	}

	safelyClearAuth() {
		try {
			this.event.locals.pb?.authStore.clear();
		} catch (e) {
			console.log('safelyClearAuth: clearing auth went wrong:\n', e);
			throw new Error('safelyClearAuth: clearing auth went wrong');
		}
	}

	isAlreadyAuthenticated() {
		if (this.event.locals.pb?.authStore.isValid || this.user) {
			return true;
		}
		return false;
	}

	isAuthenticated() {
		if (!this.user) {
			error(401, 'unauthorized');
		}
		return this;
	}

	isAdmin() {
		if (!this.user?.isAdmin) {
			error(403, config['ar'].error.message);
		}
		return this;
	}

	isActivityUser(
		project: {
			activity_id: string;
			user_id: string;
			created: string;
			update: string;
		}[]
	) {
		if (!this.user || !project.map((projectUser) => projectUser.user_id).includes(this.user.id)) {
			error(403, 'ask the admin to add you to the project.');
		}
		return this;
	}

	isInternalAccount() {
		if (!this.user || !this.user.email?.endsWith('@ihyateam.org')) {
			error(403, 'this route is available only for internal accounts (ends with @ihyateam.org)');
		}
		return this;
	}
}
