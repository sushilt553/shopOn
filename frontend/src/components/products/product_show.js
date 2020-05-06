import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './product_show.css'

class ProductShow extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.reviewProduct;
    //state
    // this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.update = this.update.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount(){
    // debugger;
    this.props.fetchAllCategories();
    this.props.fetchReviews()
    .then(() =>this.props.fetchAllProducts())
    .then(() => this.props.fetchProduct(this.props.product._id));
  }

  componentDidUpdate(prevProps) {
    const currentProduct = this.props.match.params.id;
    const prevProduct = prevProps.match.params.id;

    if (currentProduct !== prevProduct) {
      this.props.fetchProduct(currentProduct);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  async submitReview(e) {
    e.preventDefault();
    await this.setState({productId: this.props.product._id});
    await this.props.postReview(this.state);
    this.setState({description: ""});
    this.props.fetchProduct(this.props.match.params.id);
  }

  addToCart(e) {
    e.preventDefault();
    let cartMsg = document.getElementsByClassName("cart-msg");
    cartMsg[0].classList.add("display-cart-msg");
    setTimeout(() => cartMsg[0].classList.remove("display-cart-msg"), 2000);
    // debugger;
    this.props.addToCart({ userId: this.props.user._id, cartProducts: { cart: this.props.product._id } })
  }

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
    // debugger;
    let reviews = this.props.product.reviews.map((review) => 
    <li>
      {this.props.state.entities.reviews[review].description}
      <br/>
      Reviewed by {this.props.state.entities.reviews[review].user}
    </li>);

    return (
      <>
      <div className="product-show-container">
        <div className="product-show-image">
          {product.image_urls.map((url, i) => (
            <img className="product-show-pix-indiv" alt="product-show-pix-indiv" key={i} src={url} />
          ))}
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
          <form onSubmit={this.submitReview}>
            <label htmlFor="reviews">Write a review
              <textarea id="reviews" value = {this.state.description} rows="4" cols="30" onChange={this.update('description')}></textarea>
            </label>
            <input type="submit" value="Submit review"/>
          </form>            
            <button className="product-cart-btn" onClick={this.addToCart}>Add to cart</button>
        </div>
      </div>
        {
         reviews
        }
      </>
    );
  }
}

export default withRouter(ProductShow);