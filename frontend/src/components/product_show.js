import React from 'react';

class ProductShow extends React.Component {

  constructor(props){
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
  }

  //re render once product is updated
  componentDidUpdate(oldProps){
    if ( this.props.product !== oldProps.product && this.props.track ) {

    }
  }

  deleteProduct(e) {
    e.preventDefault();
    this.props.deleteProduct(this.props.product.id)
      .then(() => this.props.history.push('/products'))
  }

  render(){
    const { product } = this.props;
    if (!product){
      return null;
    }
    return (
      <div className="product-show-container">
        <div className="product-image">
          <img></img>
        </div>
        <div className="edit-product-btns">
          {
            this.props.currentUser.admin ? (
              <>
                <button className="edit-btn" onClick={}>
                  Edit Product
                </button>
                <button className="delete-btn" onClick={this.deleteProduct}>
                  Delete Product
                </button>
              </>
            ) : <div> </div>
          }
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <span>{product.price}</span>
          <p>{product.description}</p>
        </div>
        <div className="purchase-btns">
          <button>Add to cart</button>
        </div>
      </div>
    )
  }
}

export default ProductShow;