import React from 'react';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        // this.logout = this.logout.bind(this);
    }

    render (){
        return (
            <div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default HomePage;