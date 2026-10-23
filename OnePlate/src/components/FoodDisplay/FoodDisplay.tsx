import React from 'react';
import "./FoodDisplay.css"
import { useStore } from '../../hooks/useStore';
import FoodItem from '../FoodItem/FoodItem';


type FoodDisplayProrps = {
    category:string;
}
const FoodDisplay = ({category}:FoodDisplayProrps) => {

    const {food_list}  = useStore();
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index)=>{
                    return (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    )
                })}
            </div>

        </div>
    )
}

export default FoodDisplay;