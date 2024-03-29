import React from 'react'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

const KonumSvg = ({ style, width, height }) => {
    return (
        <Svg style={style} width={width} height={height} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 22.01 22.011">
            <Path id="location-arrow-svgrepo-com" d="M19.116.153,1.242,8.4a2.084,2.084,0,0,0,.825,3.987H9.629v7.562a2.084,2.084,0,0,0,3.987.825L21.866,2.9a2.145,2.145,0,0,0-2.75-2.75Z" transform="translate(-0.007 -0.001)" fill="#b5b5b5" />
        </Svg>
    )
}

export default KonumSvg


