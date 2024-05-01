import React, { useEffect, useState, useRef } from "react";
import './Card.css';

interface Product {
    id: number;
    category: string;
    title: string;
    description: string;
    price: number;
    images: string[];
}

export const Cardtsx: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        id: 0,
        category: "",
        title: "",
        description: "",
        price: 0,
        images: []
    });

    const productRef = useRef(product);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${Math.ceil(Math.random() * 100) + 1}`)
          .then(res => res.json())
          .then((data: Product) => {
                data.images = [data.images[Math.floor(Math.random() * data.images.length)]];
                setProduct(data);
                productRef.current = data;
            });
    }, []);

    useEffect(() => {
       console.log(product); 
    }, [product]);

    return (
        <div className="product-box">
            <div className="box">
                <img src={product.images[0]} alt={product.title} className="product-image" />
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
