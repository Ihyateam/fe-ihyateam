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

type ExpandUseryEntityAsCreatedBy = {
	expand: {
		created_by?: UserAdminEntity;
	};
};

type ExpandCityEntityAsCreatedBy = {
	expand: {
		city_id?: CityEntity;
	};
};

type ExpandWageEntityAsCreatedBy = {
	expand: {
		wage_id?: WageEntity;
	};
};

export type ActivityEntity = {
	city_id: string;
	created_by: string;
	description: string;
	id: string;
	students: number;
	title: string;
	wage_id: string;
	photo_id: string;
	start_at: Date;
	end_at: Date;
} & ExpandPhotoEntity &
	BaseEntity &
	ExpandVolunteersList &
	ExpandUseryEntityAsCreatedBy &
	ExpandCityEntityAsCreatedBy &
	ExpandWageEntityAsCreatedBy;

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
	at_date: Date;
	created_data: Date;
	payment_data: Date;
	comment: string;
} & BaseEntity;

export type CommuteEntity = {
	user_id: string;
	activity_id: string;
	hours: number;
	is_paid: true;
	at_date: Date;
	created_data: Date;
	payment_data: Date;
	comment: string;
} & BaseEntity;

export type CurrencyEntity = {
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
		currency_id?: CurrencyEntity;
	};
};

type ExpandVolunteersList = {
	expand: {
		volunteers?: UserEntity[];
	};
};

export type Metrics = {
	users: number;
	activities: number;
	hours: number;
	balance: number;
	top_volunteers?: any[];
};

export type AcceptLang = 'ar' | 'en' | 'de';