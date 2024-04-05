import { View, Text } from 'react-native'
import React from 'react'
import ParkAlaniSvg from '../svg/ParkAlaniSvg'
import WCSvg from '../svg/WCSvg'
import WifiSvg from '../svg/WifiSvg'
import KartlaOdemeSvg from '../svg/KartlaOdemeSvg'
import EngelliAlanSvg from '../svg/EngelliAlanSvg'

const BiMekanDetayİcons = () => {
    return (
        <>
            <View style={{
                width: '100%',
                height: 70,
                marginTop: 20,
                flexDirection: 'row',
                left: -7
            }}>
                <View style={{
                    width: '19%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderRadius: 10,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ParkAlaniSvg height={28} width={28} />
                </View>

                <View style={{
                    width: '19%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderRadius: 10,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <WCSvg height={28} width={28} />
                </View>

                <View style={{
                    width: '19%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderRadius: 10,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <WifiSvg height={28} width={28} />
                </View>


                <View style={{
                    width: '19%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderRadius: 10,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <KartlaOdemeSvg height={28} width={28} />
                </View>

                <View style={{
                    width: '19%',
                    height: 67,
                    backgroundColor: '#2A2A2A',
                    borderRadius: 10,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <EngelliAlanSvg height={28} width={28} />
                </View>
            </View>
        </>
    )
}

export default BiMekanDetayİcons