import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const NargileSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.077 40.116">
      <G id="hookah-svgrepo-com" transform="translate(-18.226)">
        <G id="Group_117" data-name="Group 117" transform="translate(18.226)">
          <Path id="Path_140" data-name="Path 140" d="M51,6.078a5.477,5.477,0,0,0-5.47,5.47v7.294a1.826,1.826,0,0,1-1.823,1.823H40.962a5.457,5.457,0,0,0-1.084-5.47,5.457,5.457,0,0,0,1.084-5.47h.314a1.823,1.823,0,0,0,0-3.647h-.954L41.753,2.5A1.823,1.823,0,0,0,40.06,0H31.55a1.823,1.823,0,0,0-1.693,2.5l1.431,3.577h-.954a1.823,1.823,0,0,0,0,3.647h.314a5.457,5.457,0,0,0,1.084,5.47,5.457,5.457,0,0,0-1.084,5.47H27.9a1.823,1.823,0,0,0,0,3.647h.318a9.7,9.7,0,0,0,0,12.156h-7a1.823,1.823,0,1,0,0,3.647H50.393a1.823,1.823,0,0,0,0-3.647h-7a9.7,9.7,0,0,0,0-12.156h.318a5.477,5.477,0,0,0,5.47-5.47V11.549a1.823,1.823,0,0,1,3.647,0V30.391a1.823,1.823,0,1,0,3.647,0V11.549A5.477,5.477,0,0,0,51,6.078Z" transform="translate(-19.394)" fill="#b5b5b5" />
        </G>
      </G>
    </Svg>
  )
}

export default NargileSvg