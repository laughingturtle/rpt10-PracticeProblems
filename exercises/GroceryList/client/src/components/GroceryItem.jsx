import React from 'react';

const GroceryItem = (props) => (
  <div>
    {/* {console.log('props in Groc Item', props.description)} */}
    {props.description} - <strong>{props.quantity}</strong>
  </div>
)

export default GroceryItem;