import React from 'react'

import RiverList from './RiverList'

import {Col, Row} from 'react-bootstrap';

import { connect } from "react-redux";
import { loadRivers, loadFavorites, actionFavorite, actionUnFavorite } from "../../../redux/actions";

class RiverListContainer extends React.Component {

     componentDidMount() {
         this.props.loadFavorites();
         this.props.loadRivers();
    }

    handleActionFavorite(e){
      this.props.actionFavorite(e.target.id)
    }

    handleActionUnFavorite(id){
      this.props.actionUnFavorite(id)
    }

    render() {
      const colStyle = {
        marginTop: "50px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "2px",
        paddingTop: "20px"
      }

        return (
          <Row>
            <Col sm={8} smOffset={2} style={colStyle}>
              <RiverList rivers={[]} favorites={this.props.mainReducer.favorites} handleActionUnFavorite={this.handleActionUnFavorite.bind(this)}></RiverList>
              <RiverList rivers={this.props.mainReducer.rivers} favorites={[]} handleActionFavorite={this.handleActionFavorite.bind(this)}></RiverList>
            </Col>
          </Row>
        )
    }
}

export default connect(state => state, { loadRivers, loadFavorites, actionFavorite, actionUnFavorite }) (RiverListContainer);
