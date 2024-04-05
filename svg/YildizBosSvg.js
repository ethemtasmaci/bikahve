import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const YildizBosSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.414 12.798">
            <G id="icons" transform="translate(0.513 0.5)">
                <Path id="star_favorite-_1499_" data-name="star_favorite-[#1499]" d="M53.356,167.2a1.107,1.107,0,0,0-.323.985l.4,2.31a1.118,1.118,0,0,1-1.627,1.173l-2.09-1.091a1.132,1.132,0,0,0-1.044,0l-2.09,1.091a1.118,1.118,0,0,1-1.627-1.173l.4-2.31a1.107,1.107,0,0,0-.323-.985l-1.692-1.636a1.11,1.11,0,0,1,.621-1.9l2.338-.337a1.119,1.119,0,0,0,.844-.609l1.046-2.1a1.125,1.125,0,0,1,2.011,0l1.046,2.1a1.119,1.119,0,0,0,.844.609l2.338.337a1.11,1.11,0,0,1,.621,1.9Z" transform="translate(-43 -160)" fill="none" stroke="#fff" stroke-width="1" fill-rule="evenodd" />
            </G>
        </Svg>
    )
}

export default YildizBosSvg