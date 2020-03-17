import React from 'react';

class HomePage extends React.Component{

    render (){
        return (
            <div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default HomePage;