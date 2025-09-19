import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username, emailOTP } from "better-auth/plugins";
import { db, schemas } from "@/db"; 
import { verificationEmail } from "./resend/password";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schemas
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true
    },
    emailVerification: {
      sendVerificationEmail: async ({user, url, token}, request) => {
        const data = await verificationEmail(user, url, token)
      },
      sendOnSignUp: true,
      autoSignInAfterVerification: true
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        },
    },
    plugins: [
        username(),
        emailOTP({
            async sendVerificationOTP({email, otp, type}) {
                if (type == "sign-in") {

                } else if (type === "email-verification") {

                } else {

                }
            },
        })
    ]
});