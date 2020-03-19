import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showDropdown = this.showDropdown.bind(this);
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
      this.closeDropdown = (e) => {
        if( !this.ref.current.contains(e.target) ){
          this.setState({ show: false });
          document.removeEventListener('click', this.closeDropdown);
          this.closeDropdown = null;
        }
      }
      document.addEventListener('click', this.closeDropdown)
    }
  }

  render() {

    if (!this.props.categories){
      return null;
    }

    const categories = this.props.categories.map(category => <li key={category._id}>{category.name}</li>)

    return(
      <div className="dropdown" onClick={this.showDropdown}>
        Categories
        { 
          this.state.show ? (
            <div ref={this.ref} className="dropdown-content">
                <ul className="dropdown-list">
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