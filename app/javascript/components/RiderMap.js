import React from "react"
import PropTypes from "prop-types"
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class RiderMap extends React.Component {
  render () {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoiYWJsYXoxMDEiLCJhIjoiY2ptdmM2Z3Z4MDVldzN2bms4amltcTR1biJ9.kfxH5snSWzvvoz90cow8ng"
    });
    const zoom =[8];

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "66vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
      </Map>
    );
  }
}

export default RiderMap
