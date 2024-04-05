import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuSvg from '../svg/MenuSvg';

const AnaMenu = () => {
  const navigation = useNavigation(); 

  const onPressMenu = () => {
    navigation.navigate('YanMenu');
  };

  return (
    <View style={{
      flexDirection: 'row',
      marginTop: 47,
      marginLeft: 25,
      marginRight: 30,
      width: '90%',
      height: 50
    }}>
      <Image style={{}} source={require("../img/logo.png")} />
      <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={onPressMenu}>
        <MenuSvg height={32} width={32} />
      </TouchableOpacity>
    </View>
  );
};

export default AnaMenu;
