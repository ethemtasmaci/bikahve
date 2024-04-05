import { View, Text } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react'

const Ozellikler = () => {
    const [value, setValue] = useState('');
    return (
        <View>
            <Text style={{
                fontSize: 22,
                fontFamily: 'Poppins',
                color: '#fff',
                marginTop: 25
            }}>Özellik</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{}}>

                    <View style={{
                        flexDirection: 'row',
                        marginBottom: -15
                    }}>
                        <RadioButton.Item style={{ marginLeft: -25 }} value="UcretsizWIFI" color="#7D573E" />
                        <Text style={{
                            color: '#fff',
                            marginLeft: -15,
                            marginTop: 14,
                            fontSize: 16
                        }}>Ücretsiz WiFİ</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginBottom: -15
                    }}>
                        <RadioButton.Item style={{ marginLeft: -25 }} value="vale" color="#7D573E" />
                        <Text style={{
                            color: '#fff',
                            marginLeft: -15,
                            marginTop: 14,
                            fontSize: 16
                        }}>Vale</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginBottom: -15
                    }}>
                        <RadioButton.Item style={{ marginLeft: -25 }} value="Otopark" color="#7D573E" />
                        <Text style={{
                            color: '#fff',
                            marginLeft: -15,
                            marginTop: 14,
                            fontSize: 16
                        }}>Onpark</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginBottom: -15
                    }}>
                        <RadioButton.Item style={{ marginLeft: -25 }} value="EngelliRampasi" color="#7D573E" />
                        <Text style={{
                            color: '#fff',
                            marginLeft: -15,
                            marginTop: 14,
                            fontSize: 16
                        }}>Engelli Rampası</Text>
                    </View>

                </View>
            </RadioButton.Group>
        </View>
    )
}

export default Ozellikler