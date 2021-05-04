import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import { useSession, signIn, signOut } from 'next-auth/client'
import SuperMarkets from '../components/SuperMarkets';

export default function Home({ isConnected, superMarketData}) {
  const [session, loading] = useSession();
  if(loading){
    return <p>Cargando hermano...</p>
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!session && <>
          <h1>No estas logeado</h1> <br/>
          <button onClick={signIn}>Iniciar Sesion</button>
        </>}

        {session && <>
        <h1>Bienvenido {session.user.email}</h1>
        <div className="row">
          <SuperMarkets superMarketData={superMarketData}/>
        </div>

        </>}

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}
        
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()
  const res = await fetch('http://localhost:3000/api/tiendas')
  const superMarketData = await res.json()
  return {
    props: { isConnected, superMarketData },
  }
}
