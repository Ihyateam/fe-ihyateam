import { writable, derived, type Writable, type Readable } from 'svelte/store';

const TIMEOUT = 3000;

export type NotificationType = 'default' | 'danger' | 'warning' | 'info' | 'success';

export type Notification = {
	id: string;
	type: NotificationType;
	message: string;
	notificationTimeToLive: number;
};

/**
 *
 * @param {number} notificationTime The time that a notification will be displayed `default: 3000 milliseconds`
 * @returns {Readable<Notification[]> & {send: (message: string, type?: NotificationType, notificationTimeToLive?: number)}} A store that can be used to send notifications
 */
export function createNotificationStore(notificationTime: number = TIMEOUT): Readable<
	Notification[]
> & {
	send: (message: string, type?: NotificationType, notificationTimeToLive?: number) => void;
} {
	const _notifications = writable<Notification[]>([]);

	function send(
		message: string,
		type: NotificationType = 'default',
		notificationTimeToLive = notificationTime
	) {
		_notifications.update(
			(state) => [...state, { id: id(), type, message, notificationTimeToLive }] as Notification[]
		);
	}

	const notifications = derived<Writable<Notification[]>, Notification[]>(
		_notifications,
		($notifications, set) => {
			set($notifications);
			if ($notifications.length) {
				const timer = setTimeout(
					() => _notifications.update((state) => state.slice(1)),
					$notifications[0].notificationTimeToLive
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
