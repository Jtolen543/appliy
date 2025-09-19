import { account } from "./schemas/account";
import { session } from "./schemas/session";
import { user } from "./schemas/user";
import { verification } from "./schemas/verification";
import { drizzle } from "drizzle-orm/neon-http";

export const schemas = {
    user,
    account,
    session,
    verification
}

export const db = drizzle(process.env.DATABASE_URL as string)