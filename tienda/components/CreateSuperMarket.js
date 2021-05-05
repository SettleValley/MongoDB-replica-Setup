export default function CreateSuperMarket(){

    const makeID = (length) => {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
     charactersLength)));
       }
       return result.join('');
    }

    const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch('/api/tiendas', {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
        const result = await res.json()
        console.log(result)
    }
    return(
        <form onSubmit={registerUser} className="row g-3">
            <div className="col-md-12">
                <label htmlFor="name" className="form-label">Place ID:</label>
                <input id="name" name="place_id" type="text" autoComplete="name" className="form-control" value={makeID(30)} disabled />    
            </div>
            <div className="col-md-4">
                <label htmlFor="name" className="form-label">Place ID:</label>
                <input id="name" name="market_name" type="text" autoComplete="market_name" className="form-control" required/>    
            </div>
            
            <input id="name" name="name" type="text" autoComplete="name" required />
            <button type="submit">Register</button>
        </form>
    )
}