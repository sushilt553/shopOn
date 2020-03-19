import React from "react";
import './splash_page.css';

class SplashPage extends React.Component {

  componentDidMount() {
    this.props.fetchAllCategories();
  }
  
  render() {
    return (
      <div className="splash-body">
        <div className="splash-title">
          Favorite Things
        </div>
      </div>
    );
  }
}

export default SplashPage;
