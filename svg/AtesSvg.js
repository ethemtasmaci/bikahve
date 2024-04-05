import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const AtesSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.726 23.706">
      <G id="flame-svgrepo-com" transform="translate(0)">
        <Path id="Path_168" data-name="Path 168" d="M118.364,23.674c.215.123.441-.143.309-.364a6.259,6.259,0,0,1-.312-5.808c1.793-4.328,2.885-6.57,2.885-6.57a16.225,16.225,0,0,0,2.154,4.942c1.514,2.239,2.343,5.054,1.007,7.4-.125.22.1.48.309.362a7.276,7.276,0,0,0,3.719-6.392,13.4,13.4,0,0,0-.617-4.643,9.246,9.246,0,0,0-2.188-4.159.237.237,0,0,0-.392.21c.154,2.692-.784,3.375-1.318,1.836a10.124,10.124,0,0,1-.338-2.974,10.723,10.723,0,0,0-1.857-6.18A6.778,6.778,0,0,0,120.558.053a.237.237,0,0,0-.381.221c.1,1.462.009,5.651-3.4,10.656-3.087,4.643-1.891,8.208-1.466,9.174A7.352,7.352,0,0,0,118.364,23.674Z" transform="translate(-114.73 0.001)" fill="#b5b5b5" />
      </G>
    </Svg>
  )
}

export default AtesSvg