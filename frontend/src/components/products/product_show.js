import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './product_show.css'

class ProductShow extends React.Component {

  constructor(props){
    super(props);
    //state
    // this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.product._id);
    this.props.fetchAllCategories();
  }

  //re render once product is updated
  // componentDidUpdate(oldProps){
  //   if ( this.props.product !== oldProps.product && this.props.track ) {

  //   }
  // }

  deleteProduct(e) {
    e.preventDefault();
    this.props.deleteProduct(this.props.product._id)
      .then(() => this.props.history.push('/products'))
  }

  render(){
    const { product } = this.props;
    if (!product){
      return null;
    }
    return (
      <div className="product-show-container">
        <div className="product-show-image">
          <img></img>
        </div>
        <div className="product-show-info">
          <div className="product-show-details">
            <h2 className="product-show-name">{product.name}</h2>
            <span className="product-show-price">${product.price}</span>
            <p className="product-show-description">{product.description}</p>
          </div>
          <div className="product-show-action-btns">
            {
              this.props.isAdmin ? (
              <>
                <Link 
                  to={`/products/${product._id}/edit`}
                  className="product-show-edit-btn"
                >
                  Edit
                </Link>
                <button 
                  className="product-show-delete-btn" 
                  onClick={this.deleteProduct}>
                  Delete
                </button>
              </>
              ) : null
            }
          </div>
            <button className="product-cart-btn">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);