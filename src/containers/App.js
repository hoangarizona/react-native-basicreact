import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList';
/*import { robots } from '../robots';//have to destruct because the export of robots.js aren't default'*/
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'


function App()
{
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {//run everytime it renders
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) })
        console.log(count);


    }, [count]);//[] not applying if elements in array not change

        const onSearchChange = (event) => {
            //setSearchField({ searchField: event.target.value });
            setSearchField(event.target.value);
   
        }
 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());

        });
        
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <button onClick={()=> setCount(count+1)}>Click me</button>
                    <Scroll>
                       <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
       
        
    
}
export default App;