import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const BuyutecSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.725 26.725">
      <Path id="search-svgrepo-com" d="M4.673,14.026a9.354,9.354,0,1,1,9.354,9.354A9.354,9.354,0,0,1,4.673,14.026ZM14.026,2a12.026,12.026,0,1,0,7.507,21.423l4.911,4.911a1.336,1.336,0,0,0,1.89-1.89l-4.911-4.911A12.027,12.027,0,0,0,14.026,2Z" transform="translate(-2 -2)" fill="#b5b5b5" fill-rule="evenodd" />
    </Svg>
  )
}

export default BuyutecSvg