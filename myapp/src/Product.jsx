import "./Product.css";

function Product({ title, description, url, oldPrice, newPrice }) {
    return (
        <div className="Product">
            <h1>{title}</h1>
            <img src={url} />
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul><hr />
            <p><strike>$ {oldPrice}</strike> ${newPrice} </p>
        </div>
    )
}

export default Product;