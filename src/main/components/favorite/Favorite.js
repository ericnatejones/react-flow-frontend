import React from 'react'

import axios from 'axios'
import { updateParam } from "../../../redux/actions";

import { connect } from "react-redux";

class Favorite extends React.Component {
    constructor() {
        super();
        this.state = {
          flow: ""
        }
    }

    updateBackground() {
      if (this.state.flow < this.props.lower){
        return "lightblue"
      }
      if (this.state.flow > this.props.upper){
        return "#ffd9d9"

        console.log(this.state.backgroundColor)
      }
      if (this.state.flow > this.props.lower && this.state.flow < this.props.upper){
        return "#a8cba8"

      }
      return "white"
    }

    componentDidMount(){
        let url = 'https://waterservices.usgs.gov/nwis/iv/?format=json&sites=';
        let param = '&parameterCd=00060';
        axios.get(url+this.props.item.stream.apiId+param)
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
        this.props.updateParam(e.target.name+"Param/", this.props.item._id, parseInt(e.target.value, 10))

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
          <div style={riverStyle} className="river-item">
            <input value={this.props.lower}
                   onChange={this.props.handleChange}
                   className="pull-left"
                   type="number"
                   name="lower"
                   onBlur={ this.handleBlurAndSaveParam.bind(this) }/>
            {this.props.item.stream.knownTitle}
            <input value={this.props.upper}
                   onChange={this.props.handleChange}
                   className="pull-right"
                   type="number"
                   name="upper"
                   onBlur={ this.handleBlurAndSaveParam.bind(this) }/>
                 <div>{this.state.flow || ""} CFS</div>
          </div>)
    }
}

export default connect(state => state, {updateParam}) (Favorite);
