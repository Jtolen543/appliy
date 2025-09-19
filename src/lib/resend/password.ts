import { resend } from ".";
import EmailVerification from "@/lib/emails/email-verification";
import type { User } from "better-auth";

export const verificationEmail = async (user: User, url: string, token: string)=> {
      const {data, error} = await resend.emails.send({
        from: `support@${process.env.RESEND_DOMAIN_ADDRESS}`,
        to: user.email,
        subject: "Verify your Email Address!",
        react: EmailVerification(user.name, url)
      })
}