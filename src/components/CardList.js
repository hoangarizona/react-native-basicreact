import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    if (!true) {
        throw new Error('Noooo')
    };
    return (
        <div>
            {
            robots.map((user, i) => {

                return (
                    <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                    email={robots[i].email}
                />);
                })//this is an array of Cards
            }
        </div>
        );
}
export default CardList;