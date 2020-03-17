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
    return(
      <div onClick={this.showDropdown}>
        Categories
        { 
          this.state.show ? (
            <div ref={this.ref} className="dropdown-content">
              <div className="dropdown-list">
                <ul>
                  <li>
                    Books
                  </li>
                  <li>
                    Clothes
                  </li>
                  <li>
                    Jewelry
                  </li>
                  <li>
                    Movies
                  </li>
                  <li>
                    Shoes
                  </li>
                </ul>
              </div>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default Dropdown;