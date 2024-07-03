import { writable, derived, type Writable, type Readable } from 'svelte/store';

const TIMEOUT = 3000;

export type NotificationType = 'default' | 'danger' | 'warning' | 'info' | 'success';

export type Notification = { id: string; type: NotificationType; message: string; timeout: number };

export function createNotificationStore(_timeout: number = TIMEOUT): Readable<Notification[]> & {
	send: (message: string, type?: NotificationType, timeout?: number) => void;
} {
	const _notifications = writable<Notification[]>([]);

	function send(message: string, type: NotificationType = 'default', timeout = _timeout) {
		_notifications.update(
			(state) => [...state, { id: id(), type, message, timeout }] as Notification[]
		);
	}

	const notifications = derived<Writable<Notification[]>, Notification[]>(
		_notifications,
		($notifications, set) => {
			set($notifications);
			if ($notifications.length) {
				const timer = setTimeout(
					() => _notifications.update((state) => state.slice(1)),
					$notifications[0].timeout
				);

				return () => {
					clearTimeout(timer);
				};
			}
		}
	);

	const { subscribe } = notifications;

	return {
		subscribe,
		send
	};
}

function id() {
	return '_' + Math.random().toString(36).substring(2, 11);
}
