import Link from "next/link";

function ListingView({supermarket}){
    return(
        <>
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{supermarket.market_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{supermarket.supermarket_type}</h6>
                        <p className="card-text">{supermarket.property_address}</p>
                        <Link href="/tienda/[id]/" as={`/tienda/${supermarket.place_id}/`}>
                            <a className="card-link">Ver Mas</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function SuperMarkets({superMarketData}){
    console.log("Componentes")
    console.log(superMarketData)
    return (
        <>
            {superMarketData.data.map((superMarket)=> <ListingView key={superMarket._id} supermarket={superMarket}/>)}
        </>
    )
}