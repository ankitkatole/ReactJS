
function Price({oldPrice,newPrice}){
    return(
        <div className="price" style={{backgroundColor:"blue"}}>
            <p><strike>$ {oldPrice}</strike> ${newPrice} </p>
        </div>
    )
}

export default Price;