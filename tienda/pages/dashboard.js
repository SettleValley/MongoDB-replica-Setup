import { getSession } from 'next-auth/client'
import CreateSuperMarket from '../components/CreateSuperMarket'

export default function Dashboard({ user }) {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome {user.email}</p>
        <CreateSuperMarket/>
      </div>
    )
  }
  
  export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (!session) {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
      return {}
    }
  
    return {
      props: {
        user: session.user,
      },
    }
  }