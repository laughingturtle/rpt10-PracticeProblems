import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
   <div className="groceries">
   <h1>Shopping List</h1>
   {console.log('props in groc list', props.list)}
   {props.list.map((item) => (
    <GroceryItem
      key={item.id}
      quantity={item.quantity}
      description={item.description}
    /> 
  )
)}
   </div>


)

export default GroceryList;