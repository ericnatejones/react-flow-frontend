import React from 'react'

import River from './River'
import Favorite from '../favorite/Favorite'

function RiverList(props) {
      const riverList = props.rivers.map((river, index) =>{
          console.log("river", river)

            return <River key={index} id={index} item={river}
              handleActionFavorite={props.handleActionFavorite}/>
          }
      );

      const favoritesList = props.favorites.map((river, index) =>{
              console.log("fav", river)
              return <Favorite
                upper={river.upperParam}
                lower={river.lowerParam}
                key={river._id} id={river._id} item={river.stream}
                handleActionUnFavorite={props.handleActionUnFavorite}/>
            }
      );
      return (
        <div>
          {favoritesList}
          {riverList}
        </div>
      )


}

export default RiverList;
