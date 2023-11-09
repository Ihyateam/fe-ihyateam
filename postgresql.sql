CREATE TABLE "admins" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR,
  "last_name" VARCHAR,
  "photo_id" INTEGER,
  "username" VARCHAR
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR,
  "last_name" VARCHAR,
  "age" INTEGER,
  "email" VARCHAR,
  "isActive" boolean,
  "username" VARCHAR,
  "photo_id" INTEGER,
  "address_id" INTEGER,
  "created_at" timestamp,
  "created_by" INTEGER
);

CREATE TABLE "admin_login" (
  "username" VARCHAR PRIMARY KEY,
  "salt_hashed_password" VARCHAR,
  "last_login_date" timestamp,
  "session_token" VARCHAR UNIQUE,
  "session_created_at" timestamp,
  "session_expires_at" timestamp
);

CREATE TABLE "user_login" (
  "username" VARCHAR PRIMARY KEY,
  "salt_hashed_password" VARCHAR,
  "last_login_date" timestamp,
  "session_token" VARCHAR UNIQUE,
  "session_created_at" timestamp,
  "session_expires_at" timestamp
);

CREATE TABLE "user_role" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "role_id" INTEGER,
  "role_given_date" timestamp,
  "created_by" INTEGER,
  "created_at" timestamp
);

CREATE TABLE "role" (
  "id" SERIAL PRIMARY KEY,
  "role" INTEGER,
  "description" VARCHAR
);

CREATE TABLE "activity" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR,
  "description" VARCHAR,
  "created_by" INTEGER,
  "created_at" timestamp,
  "start_date" timestamp,
  "end_date" timestamp,
  "status" INTEGER,
  "wage_id" INTEGER,
  "photo_id" INTEGER,
  "city_id" INTEGER
);

CREATE TABLE "activity_volunteers" (
  "user_id" INTEGER,
  "activity_id" INTEGER,
  "created_by" INTEGER,
  "created_at" timestamp
);

CREATE TABLE "activity_responsibles" (
  "user_id" INTEGER,
  "activity_id" INTEGER,
  "responsible_type" INTEGER,
  "repsonsbility_date" timestamp,
  "created_by" INTEGER,
  "created_at" timestamp
);

CREATE TABLE "responsible_type" (
  "id" SERIAL PRIMARY KEY,
  "respnosible_type" INTEGER
);

CREATE TABLE "activity_city" (
  "activity_id" INTEGER,
  "cityId" INTEGER
);

CREATE TABLE "wage" (
  "id" SERIAL PRIMARY KEY,
  "working_hour_rate" float,
  "commuting_hour_rate" float,
  "currency_id" INTEGER
);

CREATE TABLE "commute" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "activity_id" INTEGER,
  "hours" float,
  "is_paid" boolean,
  "commute_date" timestamp,
  "created_date" timestamp,
  "paymnet_date" timestamp
);

CREATE TABLE "effort" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "activity_id" INTEGER,
  "hours" float,
  "is_paid" boolean,
  "effort_date" timestamp,
  "created_date" timestamp,
  "paymnet_date" timestamp
);

CREATE TABLE "spending" (
  "user_id" INTEGER,
  "receiptId" INTEGER,
  "activity_id" INTEGER,
  "currency_id" INTEGER,
  "amount" float,
  "comment" VARCHAR,
  "is_reimbursed" boolean,
  "last_update" timestamp,
  "date" timestamp,
  PRIMARY KEY ("user_id", "receiptId", "activity_id")
);

CREATE TABLE "receipt" (
  "id" SERIAL PRIMARY KEY,
  "photoId" INTEGER,
  "receiptType" INTEGER,
  "description" VARCHAR
);

CREATE TABLE "receipt_type" (
  "id" SERIAL PRIMARY KEY,
  "type" INTEGER,
  "name" VARCHAR
);

CREATE TABLE "photo" (
  "id" SERIAL PRIMARY KEY,
  "photo" VARCHAR,
  "photoType" INTEGER,
  "last_update" timestamp
);

CREATE TABLE "currency" (
  "id" SERIAL PRIMARY KEY,
  "currency_name" VARCHAR,
  "currency_country" INTEGER
);

CREATE TABLE "address" (
  "id" SERIAL PRIMARY KEY,
  "city_id" INTEGER,
  "district" VARCHAR,
  "street" VARCHAR,
  "neighborhood" VARCHAR,
  "building_no" VARCHAR,
  "door_no" VARCHAR
);

CREATE TABLE "city" (
  "id" SERIAL PRIMARY KEY,
  "city_name" VARCHAR,
  "country_id" INTEGER
);

CREATE TABLE "country" (
  "id" SERIAL PRIMARY KEY,
  "country_name" VARCHAR
);

ALTER TABLE "admins" ADD FOREIGN KEY ("photo_id") REFERENCES "photo" ("id");

ALTER TABLE "admin_login" ADD FOREIGN KEY ("username") REFERENCES "admins" ("username");

ALTER TABLE "user_login" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "users" ADD FOREIGN KEY ("photo_id") REFERENCES "photo" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("id");

ALTER TABLE "activity" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("id");

ALTER TABLE "activity" ADD FOREIGN KEY ("wage_id") REFERENCES "wage" ("id");

ALTER TABLE "activity" ADD FOREIGN KEY ("photo_id") REFERENCES "photo" ("id");

ALTER TABLE "activity" ADD FOREIGN KEY ("city_id") REFERENCES "city" ("id");

ALTER TABLE "activity_volunteers" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "activity_volunteers" ADD FOREIGN KEY ("activity_id") REFERENCES "activity" ("id");

ALTER TABLE "activity_volunteers" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("id");

ALTER TABLE "activity_responsibles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "activity_responsibles" ADD FOREIGN KEY ("activity_id") REFERENCES "activity" ("id");

ALTER TABLE "activity_responsibles" ADD FOREIGN KEY ("responsible_type") REFERENCES "responsible_type" ("id");

ALTER TABLE "activity_responsibles" ADD FOREIGN KEY ("created_by") REFERENCES "admins" ("id");

ALTER TABLE "activity_city" ADD FOREIGN KEY ("activity_id") REFERENCES "activity" ("id");

ALTER TABLE "activity_city" ADD FOREIGN KEY ("cityId") REFERENCES "city" ("id");

ALTER TABLE "wage" ADD FOREIGN KEY ("currency_id") REFERENCES "currency" ("id");

ALTER TABLE "commute" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "commute" ADD FOREIGN KEY ("activity_id") REFERENCES "activity" ("id");

ALTER TABLE "effort" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "effort" ADD FOREIGN KEY ("activity_id") REFERENCES "activity" ("id");

ALTER TABLE "spending" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "spending" ADD FOREIGN KEY ("receiptId") REFERENCES "receipt" ("id");

ALTER TABLE "spending" ADD FOREIGN KEY ("activity_id") REFERENCES "activity" ("id");

ALTER TABLE "spending" ADD FOREIGN KEY ("currency_id") REFERENCES "currency" ("id");

ALTER TABLE "receipt" ADD FOREIGN KEY ("photoId") REFERENCES "photo" ("id");

ALTER TABLE "receipt" ADD FOREIGN KEY ("receiptType") REFERENCES "receipt_type" ("id");

ALTER TABLE "currency" ADD FOREIGN KEY ("currency_country") REFERENCES "country" ("id");

ALTER TABLE "address" ADD FOREIGN KEY ("city_id") REFERENCES "city" ("id");

ALTER TABLE "city" ADD FOREIGN KEY ("country_id") REFERENCES "country" ("id");



INSERT INTO login (username) VALUES ( 'CASERIFAR' );
INSERT INTO admins (first_name, last_name, username) VALUES ( 'CABBAR', 'SERIF', 'CASERIFAR');