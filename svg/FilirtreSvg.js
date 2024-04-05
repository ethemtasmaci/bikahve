import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const FilirtreSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.141 17.966">
      <Path id="filter-svgrepo-com_3_" data-name="filter-svgrepo-com (3)" d="M15.742,10.9a3.7,3.7,0,0,0,3.546-2.642h2.8a1.057,1.057,0,0,0,0-2.114h-2.8a3.7,3.7,0,0,0-7.093,0H3.057a1.057,1.057,0,1,0,0,2.114H12.2A3.7,3.7,0,0,0,15.742,10.9ZM3.057,16.713a1.057,1.057,0,0,0,0,2.114H5.324a3.7,3.7,0,0,0,7.093,0h9.667a1.057,1.057,0,0,0,0-2.114H12.417a3.7,3.7,0,0,0-7.093,0Z" transform="translate(-2 -3.502)" fill="#b5b5b5" fill-rule="evenodd" />
    </Svg>
  )
}

export default FilirtreSvg