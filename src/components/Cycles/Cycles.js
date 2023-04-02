import React from "react";

 class Cycles extends React.Component {
    constructor(props) {
        super(props);

        console.log('constructor');
        
        this.state = {
            pageTitle: "Home"
        }
    }

    componentDidMount() {
        document.title = this.state.pageTitle
        console.log('component did mount')
    }

    componentDidUpdate() {
        document.title = this.state.pageTitle
        console.log('component did update')
    }

    componentWillUnmount(){
    }

    render() {
        console.log('render');
        return(
            <div>
                <p>Page Title={this.state.pageTitle}</p>
                <button onClick={() => this.setState({pageTitle: 'Users'})}>Change title</button>
                <button onClick={() => this.setState({pageTitle: 'Home'})}>Home</button>
            </div>
        )
    }
}

export default Cycles