import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from "next-auth/adapters"


import Models from "../../../models"

const options = {
    site: process.env.NEXTAUTH_URL,
    providers: [
      Providers.Email({
        server: {
          port: process.env.EMAIL_SERVER_PORT,
          host: process.env.EMAIL_SERVER_HOST,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      })
    ],
    
    database: {
      type: 'mongodb',
      uri: 'mongodb://mongo1:27017,mongo2:27018,mongo3:27019/?replicaSet=rs0',
      // replicaSet: 'rs0',
      w: "majority",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      database: "tienda",
      synchronize: true,
    },
    session: {
      jwt: true,
      maxAge: 30 * 24 * 60 * 60 // 30 days
    },
    callbacks: {
      redirect: async (url, _) => {
        if (url === '/api/auth/signin') {
          return Promise.resolve('/profile')
        }
        return Promise.resolve('/api/auth/signin')
      },
    },
  }

export default (req, res) => NextAuth(req, res, options)