import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import KahveCekirdekSvg from '../svg/KahveCekirdekSvg';
import BosKahveCekirdekSvg from '../svg/BosKahveCekirdekSvg';

const QRGecis = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % 5);
        }, 500); // her 500ms (0.5 saniye) değiştir

        // Temizlik için interval'i temizle
        return () => clearInterval(interval);
    }, []);

    const renderKahveCekirdekleri = () => {
        const kahveCekirdekleri = [];
        for (let i = 0; i < 5; i++) {
            const isActive = i === count;
            kahveCekirdekleri.push(
                isActive ? <KahveCekirdekSvg key={i} height={25} width={25} /> : <BosKahveCekirdekSvg key={i} height={25} width={25} />
            );
        }
        return kahveCekirdekleri;
    };

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
                opacity: 0.93,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={{
                width: 187,
                height: 107,
                borderColor: '#fff',
                borderWidth: 1,
                borderRadius: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 50
            }}>

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 13,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>
                    {renderKahveCekirdekleri()}
                </View>
                <Text
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'normal',
                        marginTop: 8,
                    }}>
                    Menü
                </Text>
                <Text
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#fff',
                        textAlign: 'center',
                        fontWeight: 'normal',
                    }}>
                    Yükleniyor...
                </Text>

            </View>
        </View>
    );
};

export default QRGecis;