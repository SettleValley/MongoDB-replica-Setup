import { useRouter } from 'next/router'

export default function Tienda({supermarket}){
    const router = useRouter()
    const { id } = router.query

    return(
        <>  <h2>{id}</h2>
            <h1>{supermarket.data.market_name}</h1>
        </>
    )
}

export async function getServerSideProps({params}){
    console.log(params.id)
    const res = await fetch(`http://localhost:3000/api/tienda/${params.id}/`)
    const oneSuperMarket = await res.json();
    console.log(oneSuperMarket)
    return {
        props: {
            supermarket: oneSuperMarket
        },
      }
}