import React from 'react'

import River from './River'

function RiverList (props) {

    console.log(props, ":props")
    let riverList = props.rivers.map((river, index) =>(
            <River key={index} id={index} item={river}/>
        )
    );
    return (
      <div>
        {riverList}
      </div>
  )

}

export default RiverList;
