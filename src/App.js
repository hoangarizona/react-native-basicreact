import React, { Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';//have to destruct because the export of robots.js aren't default'
import SearchBox from './SearchBox';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchField: event.target.value });
   
    }
    render() {
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());

        });
        console.log(filteredRobots);
       
        return (
                <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
                </div>
            );
    }
}
export default App;