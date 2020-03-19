import React from 'react';
import SearchResultItem from './search_result_item';
import { Link, withRouter } from 'react-router-dom';

class SearchResults extends React.Component {

  componentDidMount() {
    this.props.searchProducts(this.props.products);
  }

  render() {

    const products = this.props.products;
    let span;
    if (products.length === 0) {
      span = <h1 className="no-search-results"> Ooooops! No results for the search!</h1>
    } else {
      span = <ul className="product-search-results">
        {products.map(product =>
          <SearchResultItem
            product={product}
            key={product.id}
          />
        )}
      </ul>
    }

    return (
      <main className="search-results-page">
        <div className="search-results-body">
          <section className="search-results-list">
            {span}
          </section>
          <Link to="/Products" className="back-to-home-link">Back to Home</Link>
        </div>
      </main>
    );
  }
}

export default withRouter(SearchResults);