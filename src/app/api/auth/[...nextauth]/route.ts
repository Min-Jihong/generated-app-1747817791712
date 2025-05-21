import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        // Add your own authentication logic here
        const user = { id: 1, name: 'John Doe' };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});