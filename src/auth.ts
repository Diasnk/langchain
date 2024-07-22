// use next auth to handle authentication

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const {handlers, auth, signIn, signOut} = NextAuth({ providers: [ GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})] });

