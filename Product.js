import React from "react"

function Product( props ) {
  return (
    <div className="product-container">
      <h1>{props.product.name}</h1>
      <h3 style={{display: !props.product.price ? 'none' : 'block'}}>Price: {props.product.price.toLocaleString("en-AU", { style: "currency", currency: "AUD"})}</h3>
      <p style={{display: !props.product.description ? 'none' : 'block'}}>{props.product.description}</p>
    </div>
  )
}

export default Product