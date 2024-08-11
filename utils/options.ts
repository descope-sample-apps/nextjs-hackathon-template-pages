import { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: process.env.DESCOPE_DISCOVERY_URL,
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID, 
      clientSecret: process.env.DESCOPE_ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.id_token) {
        token.idToken = account.id_token;
      }

      if (account?.refresh_token) {
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {

      (session as any).idToken = token.idToken;
      (session as any).refreshToken = token.refreshToken;
      return session;
    },  
  },
}
