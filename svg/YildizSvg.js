import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const YildizSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.104 16.29">
      <G id="Dribbble-Light-Preview" transform="translate(0)">
        <G id="icons" transform="translate(0)">
          <Path id="star_favorite-_1499_" data-name="star_favorite-[#1499]" d="M57.3,169.942a1.529,1.529,0,0,0-.446,1.359l.552,3.19a1.544,1.544,0,0,1-2.247,1.619L52.273,174.6a1.563,1.563,0,0,0-1.441,0l-2.886,1.506a1.544,1.544,0,0,1-2.247-1.619l.552-3.19a1.529,1.529,0,0,0-.446-1.359l-2.336-2.259a1.533,1.533,0,0,1,.858-2.62l3.228-.465a1.545,1.545,0,0,0,1.166-.841l1.444-2.9a1.554,1.554,0,0,1,2.777,0l1.444,2.9a1.545,1.545,0,0,0,1.166.841l3.228.465a1.533,1.533,0,0,1,.858,2.62Z" transform="translate(-43 -160)" fill={fill} fill-rule="evenodd" />
        </G>
      </G>
    </Svg>
  )
}

export default YildizSvg