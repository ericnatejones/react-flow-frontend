import React from 'react'

import RiverList from './RiverList'

import {Col} from 'react-bootstrap';

import { connect } from "react-redux";
import {loadRivers, loadFavorites } from "../../../redux/actions";

class RiverListContainer extends React.Component {

     componentDidMount() {
         this.props.loadFavorites();
         this.props.loadRivers();
    }

    render() {
      const colStyle = {
        marginTop: "50px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "2px",
        paddingTop: "20px"
      }

        return (
          <Col sm={6} smOffset={3} style={colStyle}>
            <RiverList rivers={[]} favorites={this.props.mainReducer.favorites}></RiverList>
            <RiverList rivers={this.props.mainReducer.rivers} favorites={[]}></RiverList>
          </Col>
        )
    }
}

export default connect(state => state, { loadRivers, loadFavorites }) (RiverListContainer);
