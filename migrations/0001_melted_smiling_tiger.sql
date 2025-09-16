ALTER TABLE "account" ADD COLUMN "username" text NOT NULL;--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN "display_username" text;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_username_unique" UNIQUE("username");