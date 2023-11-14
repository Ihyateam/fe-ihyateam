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
