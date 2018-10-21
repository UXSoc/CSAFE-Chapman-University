import React from "react"
import PropTypes from "prop-types"
import ReactMapGL, {Marker} from "react-map-gl";

class RiderMapv2 extends React.Component {
  state = {
    viewport: {
      width: "100vw",
      height: "66vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 14
    }
  };

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  _locateError = () => {
    console.warn('Could not locate the user');
  }

  _locateUser = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const viewport = {...this.state.viewport, longitude: position.coords.longitude, latitude: position.coords.latitude};
      this.setState({viewport});
    },
    this._locateError,
    this.options
    );
  }

  render() {
    return (
      <div>
        <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={this.props.token}
        />
        <Marker latitude={33.8242184} longitude={-117.838183} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
        <button onClick={this._locateUser}>Locate User</button>
      </div>
    );
  }
}

export default RiderMapv2
