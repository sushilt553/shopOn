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
    // This code redirects the guest user to the login page.

    // if (Object.keys(this.props.user).length === 0) {
    //   this.props.history.push("/login");
    // }

    await this.setState({productId: this.props.product._id});
    await this.props.postReview(this.state);
    this.setState({description: ""});
    this.props.fetchProduct(this.props.match.params.id);
  }

  addToCart(e) {
    e.preventDefault();
    if (Object.keys(this.props.user).length > 0) {
      let cartMsg = document.getElementsByClassName("cart-msg");
      cartMsg[0].classList.add("display-cart-msg");
      setTimeout(() => cartMsg[0].classList.remove("display-cart-msg"), 2000);
      this.props.addToCart({ user: this.props.user._id, product: this.props.product._id})
    } else {
      this.props.history.push('/login');
    }
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
    let reviews = this.props.product.reviews.map((review, i) => {
      if (this.props.reviews[review] && this.props.reviews[review].user === this.props.user.username) {
       return  <li key={i} className="reviews-list">
         <p className="reviewer">Reviewed by {this.props.reviews[review].user}</p>
         <p className="review-description">{this.props.reviews[review].description}</p>
         {/* <button className="review-edit">Edit</button> */}
         {/* <br/> */}
         <button className="review-delete" onClick={() => this.props.deleteReview(review)}>Delete</button>
        </li>
      }else if (this.props.reviews[review]){
        return <li key={i} className="reviews-list">
          <p className="reviewer">Reviewed by {this.props.reviews[review].user}</p>
          <p className="review-description">{this.props.reviews[review].description}</p>
        </li>
      }
    });

    if (reviews.join("").length === 0) {
      reviews = <p className="reviews-list">"No Reviews yet!"</p>
    }
    // debugger;
    let form;
    if (Object.keys(this.props.user).length > 0) {
      form = <form className="review-form" onSubmit={this.submitReview}>
        <label className="write-review" htmlFor="reviews">
          Write a review
        </label>
        <br />
        <textarea
          id="reviews"
          value={this.state.description}
          rows="4"
          cols="30"
          onChange={this.update("description")}
          placeholder="Tell us what you think!"
        />
        <br />
        <input className="submit-review" type="submit" value="Submit review" />
      </form>; 
    }else{
      form = <Link to={`/login`}><button className="review-redirect">Sign in to write a review</button></Link>
    }

    return (
      <>
        <div className="product-show-container">
          <div className="product-show-image">
            {product.image_urls.map((url, i) => (
              <img
                className="product-show-pix-indiv"
                alt="product-show-pix-indiv"
                key={i}
                src={url}
              />
            ))}
          </div>
          <div className="product-show-info">
            <div className="product-show-details">
              <h2 className="product-show-name">{product.name}</h2>
              <span className="product-show-price">${product.price}</span>
              <p className="product-show-description">{product.description}</p>
            </div>
            <div className="product-show-action-btns">
              {this.props.isAdmin ? (
                <>
                  <Link
                    to={`/products/${product._id}/edit`}
                    className="product-show-edit-btn"
                  >
                    Edit
                  </Link>
                  <button
                    className="product-show-delete-btn"
                    onClick={this.deleteProduct}
                  >
                    Delete
                  </button>
                </>
              ) : null}
            </div>
            <button className="product-cart-btn" onClick={this.addToCart}>
              Add to cart
            </button>
            {form}
          </div>
        </div>
        <p className="product-reviews-list">Customer Reviews</p>
        {reviews}
      </>
    );
  }
}

export default withRouter(ProductShow);