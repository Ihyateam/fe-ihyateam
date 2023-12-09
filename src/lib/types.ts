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
	address_id: string;
	age: number;
	collectionId: string;
	collectionName: string;
	created: string;
	created_by: string;
	email: string;
	emailVisibility: boolean;
	first_name: string;
	id: string;
	isActive: boolean;
	isAdmin: boolean;
	last_name: string;
	photo: string;
	updated: Date;
	username: string;
	verified: boolean;
};

export type ActivityStatus = 'done' | 'scheduled' | 'ongoing' | 'postponed';

export type ActivityEntity = {
	name: string;
	city_id: string[];
	collectionId: string;
	collectionName: string;
	created: Date;
	created_by: string;
	description: StringConstructor;
	end_date: Date;
	id: string;
	photo: string;
	start_date: Date;
	status: ActivityStatus;
	students: number;
	title: string;
	updated: Date;
	volunteers: string[];
	wage_id: string;
};

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
