import React from 'react'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

const WifiSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.749 22.889">
            <Path id="wifi-svgrepo-com" d="M18.84,23.082a4.194,4.194,0,1,0,0,5.931A4.21,4.21,0,0,0,18.84,23.082Zm-8.761-2.83a7.991,7.991,0,0,0-2.132,3.76l-2.6-2.519a10.333,10.333,0,0,1,2.442-3.528,11.371,11.371,0,0,1,16.165,0A10.9,10.9,0,0,1,26.4,21.493l-2.6,2.519a7.991,7.991,0,0,0-2.132-3.76,8.165,8.165,0,0,0-11.591,0ZM4.923,15.1A16.153,16.153,0,0,0,2.364,18.47L0,16.105a20.889,20.889,0,0,1,2.636-3.295,18.811,18.811,0,0,1,26.515,0,20.654,20.654,0,0,1,2.6,3.295L29.384,18.47A16.11,16.11,0,0,0,26.825,15.1,15.488,15.488,0,0,0,4.923,15.1Z" transform="translate(0 -7.345)" fill="#b5b5b5" />
        </Svg>
    )
}

export default WifiSvg


