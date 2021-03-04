import React from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue(); {/* we use this to pull the value we need from the data layer */ }

    const addToBasket = () => {
        // dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/815px-Five_Pointed_Star_Solid.svg.png" alt="" /></p>
                        ))}
                </div>
            </div>
            <img
                src={image}
                alt=""
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
