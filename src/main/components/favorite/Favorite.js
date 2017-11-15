import React from 'react'

import axios from 'axios'
import { updateParam } from "../../../redux/actions";

import {Button, Row, Col} from "react-bootstrap"

import { connect } from "react-redux";

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          flow: "",
          upper: props.upper,
          lower: props.lower
        }
        this.handleChange = this.handleChange.bind(this)
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

    updateBackground() {
      if (this.state.flow < this.props.lower){
        return "lightblue"
      }
      if (this.state.flow > this.props.upper){
        return "#ffd9d9"
      }
      if (this.state.flow > this.props.lower && this.state.flow < this.props.upper){
        return "#a8cba8"

      }
      return "white"
    }

    componentDidMount(){
        let url = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=';
        let param = '&parameterCd=00060';
        axios.get(url+this.props.item.apiId+param)
            .then((response) => {
              let flow = response.data.value.timeSeries[0].values[0].value[0].value
              this.setState({
                flow
              })

            })
            .catch((err) => {
                console.log(err, ": err");
            })
    }

    handleBlurAndSaveParam(e){
        this.props.updateParam(e.target.name+"Param/", this.props.id, parseInt(e.target.value, 10))

    }

    render(){
        let backgroundColor = this.updateBackground()
        let riverStyle = {
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "2px",
            paddingTop: "20px",
            backgroundColor
        }

        return (
          <Row id={this.props.item._id} style={riverStyle} className="river-item">
            <Col sm={1}>
              <input value={this.state.lower}
                     onChange={this.handleChange}
                     className="pull-left"
                     type="number"
                     name="lower"
                     onBlur={ this.handleBlurAndSaveParam.bind(this) }/>
            </Col>
            <Col sm={10}>
              <p>{this.props.item.knownTitle}</p>
              <div>{this.state.flow || ""} CFS</div>
              <Button onClick={()=>this.props.handleActionUnFavorite(this.props.item._id)}>Unfavorite</Button>
            </Col>
            <Col sm={1}>

              <input value={this.state.upper}
                     onChange={this.handleChange}
                     className="pull-right"
                     type="number"
                     name="upper"
                     onBlur={ this.handleBlurAndSaveParam.bind(this) }/>
              </Col>

          </Row>)
    }
}

export default connect(state => state, {updateParam}) (Favorite);
