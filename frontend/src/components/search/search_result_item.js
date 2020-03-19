import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultItem = props => {
  return (
    <li className="search-result-item" >
      <Link to={`/products/${props.product.id}`}>
        <div className="product-result-item-details">
          <p >{props.product.name}</p>
          <section className="pix-and-other-info">
            <img className="search-result-pix" src={props.product.image_urls[0]} />
            <div className="other-info">
              <h1> {props.product.price}</h1>
              <h1> {props.product.description}</h1>
            </div>
          </section>
        </div>
      </Link>
    </li>
  );
};

export default SearchResultItem;