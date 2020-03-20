import React from 'react';
import {Link} from 'react-router-dom';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.ref = React.createRef();
  }

  componentWillUnmount() {
    if ( this.closeDropdown ) {
      document.removeEventListener('click', this.closeDropdown)
    }
  }

  showDropdown(e) {
    if( this.state.show === false ) {
      e.preventDefault();
      this.setState({ show: true });
      // this.closeDropdown = (e) => {
      //   if( !this.ref.current.contains(e.target) ){
      //     this.setState({ show: false });
      //     document.removeEventListener('click', this.closeDropdown);
      //     this.closeDropdown = null;
      //   }
      // }
      document.addEventListener('click', this.closeDropdown)
    }
  }


  closeDropdown(e) {
    // if (!this.ref.current.contains(e.target)) {
      this.setState({ show: false });
      document.removeEventListener('click', this.closeDropdown);
      // this.closeDropdown = null;
    // }
  }


  render() {

    if (!this.props.categories){
      return null;
    }
    const categories = this.props.categories.map((category, idx) => 
    <Link key={idx} to={`/categories/${category.name}`}>
        <li onClick={this.closeDropdown}>{category.name}</li>
      </Link>
    )
    
    
    return(
      <div className="dropdown" onClick={this.showDropdown}>
        Categories
        { 
          this.state.show ? (
            <div ref={this.ref} className="dropdown-content">
                <ul className="dropdown-list" id="dropdown-list">
                  {categories}
                </ul>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Dropdown;