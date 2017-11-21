import React, {Component} from 'react'

import River from './River'
import Favorite from './../favorite/Favorite'


import {Col, Row} from 'react-bootstrap';

import { connect } from "react-redux";
import { loadRivers, actionFavorite, actionUnFavorite } from "../../../redux/actions";

class RiverListContainer extends Component {
    constructor(){
      super()
      this.state = {
        favorites:[]
      }
      this.handleActionFavorite = this.handleActionFavorite.bind(this)
      this.handleActionUnFavorite = this.handleActionUnFavorite.bind(this)
    }

     componentDidMount() {
         this.props.loadRivers();
         console.log(this.props)
    }

    handleActionFavorite(e){
      this.props.actionFavorite(e.target.id)
    }

    handleActionUnFavorite(id){
      this.props.actionUnFavorite(id)
    }

    render() {
      console.log(this.props)

      const colStyle = {
        marginTop: "50px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "2px",
        paddingTop: "20px"
      }
      const ids = this.props.mainReducer.favorites.map(favorite=>favorite.stream._id)
      let riverList = this.props.mainReducer.rivers.filter(river=>{
        let match =  ids.indexOf(river._id) === -1
        return match
      })
      riverList = riverList.map((river, index) =>{

            return <River key={index} id={index} item={river}
              handleActionFavorite={this.handleActionFavorite}/>
          }
      );

      const favoritesList = this.props.mainReducer.favorites.map((river, index) =>{
              return <Favorite
                upper={river.upperParam}
                lower={river.lowerParam}
                key={river._id} id={river._id} item={river.stream}
                handleActionUnFavorite={this.handleActionUnFavorite}/>
            }
      );

        return (
          <Row>
            <Col sm={8} smOffset={2} style={colStyle}>

              {favoritesList}
              {riverList}
            </Col>
          </Row>
        )
    }
}

export default connect(state => state, { loadRivers, actionFavorite, actionUnFavorite }) (RiverListContainer);
