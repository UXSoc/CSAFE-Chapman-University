import React from "react"
import PropTypes from "prop-types"
import ReactMapGL from "react-map-gl";

class RiderMapv2 extends React.Component {
  state = {
    viewport: {
      width: "100vw",
      height: "66vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
      {...this.state.viewport}
      onViewportChange={(viewport) => this.setState({viewport})}
      mapboxApiAccessToken={this.props.token}
      />
    );
  }
}

export default RiderMapv2
