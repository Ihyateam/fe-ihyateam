import type { ComponentType } from 'svelte';

type BaseEntity = {
	id: string;
	collectionId: string;
	collectionName: string;
	updated: Date;
	created: Date;
};

export type UserAdminEntity = {
	first_name: string;
	last_name: string;
	age: number;
	username: string;
	created_by_admin: string;
} & BaseEntity;

export type CityEntity = {
	city_name: string;
	country_id: string;
} & BaseEntity;

export type UserEntity = {
	age: number;
	first_name: string;
	last_name: string;
	telphone: string;
	username: string;
	email: string;
	emailVisibility: boolean;
	isAdmin: boolean;
	verified: boolean;
	photo_id: string;
	address_id: string;
	created_at: Date;
} & ExpandPhotoEntity &
	BaseEntity;

export type ActivityEntity = {
	city_id: string;
	created_by: string;
	description: string;
	end_at: Date;
	id: string;
	photo_id: string;
	start_at: Date;
	students: number;
	title: string;
	wage_id: string;
} & ExpandPhotoEntity &
	BaseEntity &
	ExpandVolunteersList;

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

export type TaskEntity = {
	user_id: string;
	activity_id: string;
	hours: number;
	is_paid: true;
	effort_date: Date;
	created_data: Date;
	payment_data: Date;
} & BaseEntity;

export type CommuteEntity = {
	user_id: string;
	activity_id: string;
	hours: number;
	is_paid: true;
	commute_date: Date;
	created_data: Date;
	payment_data: Date;
	comment: string;
} & BaseEntity;

type Currency = {
	currency_name: string;
	currency_country: string;
	symbol: string;
} & BaseEntity;

export type WageEntity = {
	commuting_hour_rate: number;
	working_hour_rate: number;
	currency_id: string;
} & ExpandCurrencyEntity &
	BaseEntity;

type PhotoEntity = {
	photo: string;
	last_update: Date;
} & BaseEntity;

export type ExpandPhotoEntity = {
	expand?: {
		photo_id?: PhotoEntity;
	};
};

type ExpandCurrencyEntity = {
	expand?: {
		currency_id?: Currency;
	};
};

type ExpandVolunteersList = {
	expand: {
		volunteers?: UserEntity[];
	};
};
