import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const PizzaSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40.107 40.107">
      <Path id="pizza-slice-svgrepo-com" d="M12.459.009A2.583,2.583,0,0,0,9.692,1.9L8.532,6.307c14.7.43,24.64,10.232,25.262,24.833l4.46-1.236a2.585,2.585,0,0,0,1.85-2.812A31.132,31.132,0,0,0,12.459.009ZM7.879,8.783.057,38.511a1.27,1.27,0,0,0,1.567,1.547l29.689-8.233c-.334-13.7-9.642-22.885-23.434-23.039Zm2.162,23.8a2.507,2.507,0,1,1,2.507-2.507A2.507,2.507,0,0,1,10.041,32.585ZM13.8,20.678a2.507,2.507,0,1,1,2.507-2.507A2.507,2.507,0,0,1,13.8,20.678Zm8.147,8.147a2.507,2.507,0,1,1,2.507-2.507A2.507,2.507,0,0,1,21.948,28.825Z" transform="translate(-0.015 0.003)" fill="#b5b5b5" />
    </Svg>
  )
}

export default PizzaSvg