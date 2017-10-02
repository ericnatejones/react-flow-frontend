import React from 'react'

import RiverList from './RiverList'

import { connect } from "react-redux";
import {loadRivers} from "../../../redux/actions";

class RiverListContainer extends React.Component {
    constructor() {
        super()

    }

     componentDidMount() {
        this.props.loadRivers();
    }

    render() {
        return <RiverList rivers={this.props.mainReducer.rivers}></RiverList>
    }
}

export default connect(state => state, {loadRivers}) (RiverListContainer);
