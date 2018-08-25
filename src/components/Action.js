import React from 'react';

const Action =(props)=>(
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          Click Here To Let Us Choose</button>

    </div>
  );


export default Action;
