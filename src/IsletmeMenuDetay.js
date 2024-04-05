import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import GeriSvg from '../svg/GeriSvg'
import KahveSvg from '../svg/KahveSvg';

const IsletmeMenuDetay = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#121212'
      }}>

        <View style={{
          width: '85%',
          left: 25,
          right: 25,
          top: 50
        }}>

          <TouchableOpacity onPress={() => handleMenuPress('IsletmeMenu')}>
            <GeriSvg height={30} width={30} fiil={'#fff'} />
          </TouchableOpacity>

          <View style={{
            flexDirection: 'row',
            marginTop: 45,
            marginBottom: 25
          }}>
            <KahveSvg height={30} width={38} fill={'#fff'} />

            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: 25,
              left: 8
            }}>
              Kahveler
            </Text>

          </View>

          <ScrollView>

            <View style={{
              height: 1200,
              width: '100%',
            }}>

              {/* burdan başlar */}

              <View style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 10
              }}>
                <View style={{
                  width: '45%',
                  right: 0,
                  left: 10
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>
                </View>

                <View style={{
                  width: '45%',
                  marginLeft: 25
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>

                </View>

              </View>

              {/* burda biter */}


              {/* burdan başlar */}

              <View style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 10
              }}>
                <View style={{
                  width: '45%',
                  right: 0,
                  left: 10
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>
                </View>

                <View style={{
                  width: '45%',
                  marginLeft: 25
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>

                </View>

              </View>

              {/* burda biter */}


              {/* burdan başlar */}

              <View style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 10
              }}>
                <View style={{
                  width: '45%',
                  right: 0,
                  left: 10
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>
                </View>

                <View style={{
                  width: '45%',
                  marginLeft: 25
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>

                </View>

              </View>

              {/* burda biter */}


              {/* burdan başlar */}

              <View style={{
                width: '100%',
                flexDirection: 'row',
                marginBottom: 10
              }}>
                <View style={{
                  width: '45%',
                  right: 0,
                  left: 10
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>
                </View>

                <View style={{
                  width: '45%',
                  marginLeft: 25
                }}>
                  <Image style={{
                    height: 160,
                    width: '100%',
                    borderColor: '#707070',
                    borderWidth: 1,
                    borderRadius: 10,
                  }} source={require("../img/MocCoffeeMeram2.png")} />

                  <Text style={{
                    top: -33,
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginLeft: 'auto',
                    marginRight: 8,
                  }}>
                    120₺
                  </Text>

                  <Text style={{
                    top: -20,
                    width: 168,
                    height: 40,
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 10,
                    marginLeft: 'auto',
                  }}>
                    Colombia Metal Kutu
                    Kahve
                  </Text>

                </View>

              </View>

              {/* burda biter */}


            </View>

          </ScrollView>

        </View>
      </View >
    </>
  )
}

export default IsletmeMenuDetay