export type LanguageOptions = 'ar' | 'en' | 'tr';

export type UserAdminEntity = {
	id: string;
	first_name: string;
	last_name: string;
	age: number;
	username: string;
	created_by_admin: string;
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
	last_name: string;
	photo: string;
	update: Date;
	username: string;
	verified: boolean;
};

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
	profile: string;
	start_date: Date;
	status: 'done' | 'scheduled' | 'ongoing' | 'postponed';
	students: number;
	title: string;
	updated: Date;
	volunteers: string[];
	wage_id: string;
};
