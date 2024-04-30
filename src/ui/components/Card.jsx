import { useEffect, useState } from "react";

export const Card = () => {



    const [product, setProduct] = useState([]);
   

    useEffect (() => {
        const id = Math.ceil(Math.random() * 100) + 1; 
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            const randomImage = data.images[Math.ceil(Math.random() * data.images.length)];
            data.images = randomImage;
            setProduct(data)
        })
  
  
    }, []);
    return (
        <div className="product-box">
                    <div className="box">
                        <img src={product.images} alt={product.title} className="product-image" />
                    </div>
                <div className="product-details">
                        <span className="category">{product.category}</span>
                        <h4 className="title"><a href="" className="title-link">{product.title}</a></h4>
                        <p className="description">{product.description}</p>
                    <div className="price">
                        <div className="price-text">Price: ${product.price}</div>
                    </div>
                </div>
            
        </div>
    );
};
    
    








