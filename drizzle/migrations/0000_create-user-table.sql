CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"email" varchar(100),
	"isActive" boolean DEFAULT false,
	"createdAt" timestamp DEFAULT now(),
	"updateAt" timestamp DEFAULT now()
);
