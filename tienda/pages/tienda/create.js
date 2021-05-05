import { getSession } from 'next-auth/client'
import CreateSuperMarket from '../../components/CreateSuperMarket'

export default function Dashboard() {
    return (
      <div className="container">
          <div className="row">
            <CreateSuperMarket/>
          </div>
      </div>
    )
  }
  
  export async function getServerSideProps(ctx) {
  
    return {
      props: {},
    }
  }