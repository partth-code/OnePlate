import React from 'react';
import "./FoodDisplay.css"
import { useStore } from '../../hooks/useStore';

const FoodDisplay = () => {

    const {food_list}  = useStore();
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>

        </div>
    )
}

export default FoodDisplay;