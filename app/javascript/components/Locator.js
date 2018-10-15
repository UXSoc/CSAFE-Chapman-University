import { Component } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

class Locator extends Component {
  static contextTypes = { map: PropTypes.object.isRequired };

  componentDidMount() {
    const { map } = this.context;

    const geolocate =
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });

    map.addControl(
      geolocate
    );
    setTimeout(geolocate._onClickGeolocate.bind(geolocate), 5)
  }

  render() {
    return null;
  }
}

export default Locator;
