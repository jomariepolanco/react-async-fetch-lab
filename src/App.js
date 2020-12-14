// create your App component here
import React from 'react'


class App extends React.Component {
    state = {
        api: []
    }
    
    render(){
        console.log(this.state.api)
        return (
            <p>
            Hi
            </p>
            )
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(data => this.setState({api: data.people}))
    }
    
}
export default App