import React from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css";

const Products = ({ProductItems , handelAddProduct}) => {



 
  return (
    <div className="products">
      {ProductItems.map((ProductItem , i) => (
   
          <div className="product-row" key={i}>
          
            <Card  style={{ width: "18rem" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              <Card.Img className="img-thumbnail p-img" variant="top" src={ProductItem.image} alt={ProductItem.name}/>
              <Card.Body>
                <Card.Title className="p-name">{ProductItem.name}</Card.Title>
                <div className="icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i></div>
                <Card.Text className="p-price">
            Price: <i className="fa-solid fa-indian-rupee-sign"></i><b>{ProductItem.price}</b>
            <b className="prev-price">{ProductItem.prevPrice}</b>
                </Card.Text>
                <Button variant="primary" onClick={() => handelAddProduct(ProductItem)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
       
      ))}
    </div>
  );
};

export default Products;
