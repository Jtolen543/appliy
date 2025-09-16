ALTER TABLE "account" DROP CONSTRAINT "account_username_unique";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "username" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "display_username" text;--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN "username";--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN "display_username";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");