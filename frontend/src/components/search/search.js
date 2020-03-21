import React from "react";
import { Link, withRouter } from "react-router-dom";
import ProductIndexItem from '../products/products_index_item';
import './search_results.css';
class Search extends React.Component {

  componentDidUpdate(prevProps) {
    const currentName = this.props.name;
    const prevName = prevProps.name;

    if (currentName !== prevName) {
      this.props.searchProducts(currentName);
    }
  }

  componentDidMount() {
    this.props.searchProducts(this.props.name);
  }

  render() {
    const products = this.props.products;
    let span;
    if (products.length === 0) {
      span = (
        <h1 className="no-search-results">
          {" "}
          Ooooops! No results for the search!
        </h1>
      );
    } else {
      span = (
        <ul className="product-search-results">
          {products.map(product => (
            <ProductIndexItem
              key={product.id}
              product={product}
              isAdmin={this.props.isAdmin}
              deleteProduct={this.props.deleteProduct}
              addToCart={this.props.addToCart}
              user={this.props.user}
            />
          ))}
        </ul>
      );
    }

    return (
      <main className="search-results-page">
        <div className="search-results-body">
          <section className="search-results-list">{span}</section>
          <Link to="/products" className="back-to-home-link">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }
}

export default withRouter(Search);
