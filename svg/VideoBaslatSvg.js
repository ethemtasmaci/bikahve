import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const VideoBaslatSvg = ({ style, width, height, fill }) => {
    return (
        <Svg fill={fill} style={style} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.617 24.543">
            <Path id="play-svgrepo-com" d="M58.85,51.094c0-1.515,2.018-2.393,3.466-1.8,1.658,1.088,15.762,9.031,17.038,10.091s1.641,2.744-.087,4S63.8,72.716,62.316,73.418a2.417,2.417,0,0,1-3.466-2.03c-.062-1.777,0-18.78,0-20.295Zm2.084,1.315c0,.387-.012,17.5-.033,17.852a.791.791,0,0,0,1.163.813c.7-.344,15.123-8.948,15.7-9.171s.535-.791,0-1.146S62.536,52,62.106,51.63s-1.173.185-1.173.779Z" transform="translate(-58.822 -49.106)" fill="#fff" fill-rule="evenodd" />
        </Svg>
    )
}

export default VideoBaslatSvg