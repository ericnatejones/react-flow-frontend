import React from 'react'

import River from './River'
import Favorite from '../favorite/Favorite'

class RiverList extends React.Component {
    constructor() {
        super();
        this.state = {
            upper: "",
            lower: ""
        }

    }

    handleChange(e) {
        e.persist();
        console.log("change")
        this.setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
      let riverList = this.props.rivers.map((river, index) =>{
          console.log("river", river)

            return <River key={index} id={index} item={river}
              handleActionFavorite={this.props.handleActionFavorite}/>
          }
      );
      let favoritesList = this.props.favorites.map((river, index) =>{
              console.log("fav", river)
              return<Favorite {...this.state}
                handleChange={this.handleChange.bind(this)}
                upper={this.state.upper || river.upperParam}
                lower={this.state.lower || river.lowerParam}
                key={index} id={index} item={river.stream}
                handleActionUnFavorite={this.props.handleActionUnFavorite}/>
            }
      );
      return (
        <div>
          {favoritesList}
          {riverList}
        </div>
      )
    }

}

export default RiverList;
