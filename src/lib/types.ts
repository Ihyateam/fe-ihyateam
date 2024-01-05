import type { ComponentType } from 'svelte';

export type UserAdminEntity = {
	id: string;
	first_name: string;
	last_name: string;
	age: number;
	username: string;
	created_by_admin: string;
};

export type CityEntity = {
	id: string;
	city_name: string;
	country_id: string;
};

export type UserEntity = {
	age: number;
	id: string;
	collectionId: string;
	collectionName: string;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	emailVisibility: boolean;
	isAdmin: boolean;
	verified: boolean;
	photo_id: string;
	address_id: string;
	created_at: Date;
	updated: Date;
} & ExpandedEntity;

export type ActivityStatus = '0' | '1' | '2' | '3';

export type ActivityEntity = {
	city_id: string;
	collectionId: string;
	collectionName: string;
	created: Date;
	created_by: string;
	description: string;
	end_at: Date;
	id: string;
	photo_id: string;
	start_at: Date;
	status: ActivityStatus;
	students: number;
	title: string;
	updated: Date;
	wage_id: string;
} & ExpandedEntity;

export type SidebarComponentConfig = {
	id: string;
	attr: {
		[key: string]: {
			['data-tooltip']: string;
		};
	};
	props: {
		href: string;
		target: string;
	};
	adminRoleOnly?: boolean;
	Icon: ComponentType;
};

export type ExpandedActivityEntity = ActivityEntity & { expand: { volunteers?: UserEntity[] } };

export type TaskEntity = {
	user_id: string;
	activity_id: string;
	hours: number;
	is_paid: true;
	effort_date: Date;
	created_data: Date;
	payment_data: Date;
};

export type WageEntity = {
	id: string;
	collectionId: string;
	collectionName: string;
	commuting_hour_rate: number;
	working_hour_rate: number;
	currency: string;
	updated: Date;
	created: Date;
};

type PhotoEntity = {
	collectionId: string;
	id: string;
	photo: string;
	created: Date;
	updated: Date;
	last_update: Date;
};

export type ExpandedEntity = {
	expand?: {
		photo_id?: PhotoEntity;
	};
};
