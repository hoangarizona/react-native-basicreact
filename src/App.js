import React, { Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';//have to destruct because the export of robots.js aren't default'
import SearchBox from './SearchBox';
import './App.css'


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => { return response.json() }
        ).then(users => {
            this.setState({
                robots: users
            });
        });
      

    }
    onSearchChange = (event) => {
       
        this.setState({ searchField: event.target.value });
   
    }
    render() {
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());

        });

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
       
        
    }
}
export default App;