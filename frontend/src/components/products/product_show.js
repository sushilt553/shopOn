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
          <div className="product-show-description">
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <p>{product.description}</p>
          </div>
          <div className="product-show-edit-btns">
            {
              this.props.isAdmin ? (
              <>
                <Link to={`/products/${product._id}/edit`}>
                  <button className="product-show-edit-btn">
                    Edit Product
                  </button>
                </Link>
                <button 
                  className="product-show-delete-btn" 
                  onClick={this.deleteProduct}>
                  Delete Product
                </button>
              </>
              ) : null
            }
          </div>
          {/* <div className="product-info">
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <p>{product.description}</p>
          </div> */}
          <div className="purchase-btns">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);