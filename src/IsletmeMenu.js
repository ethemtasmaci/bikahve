import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import GeriSvg from '../svg/GeriSvg'
import KahveSvg from '../svg/KahveSvg';
import PizzaSvg from '../svg/PizzaSvg';
import TatliSvg from '../svg/TatliSvg';
import YemekSvg from '../svg/YemekSvg';
import DondurmaSvg from '../svg/DondurmaSvg';
import NargileSvg from '../svg/NargileSvg';
import YildizSvg from '../svg/YildizSvg';

const IsletmeMenu = () => {
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

          <TouchableOpacity onPress={() => handleMenuPress('AnasayfaK')}>
            <GeriSvg height={30} width={30} fiil={'#fff'} />
          </TouchableOpacity>

          <View style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <Text style={{
              color: '#fff',
              fontSize: 27,
              fontFamily: 'Poppins',
              fontWeight: 'medium',
              marginTop: 27,
            }}>
              Moc Coffee Meram
            </Text>
            <Text
              style={{
                color: '#D8D8D8',
                fontSize: 16,
                fontFamily: 'Poppins',
                fontWeight: 'light',
                marginTop: 10,
                textAlign: 'center',
              }}>
              Dijital Menü
            </Text>
            <View style={{
              width: 70,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 10,
              borderTopColor: '#D8D8D8',
              borderTopWidth: 1,
            }}>
            </View>

            <Text style={{
              fontFamily: 'Poppins',
              fontSize: 16,
              color: '#D8D8D8',
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
              Son Güncellenme: 27.06.2023
            </Text>

          </View>


          <View style={{
            width: '100%',
            marginTop: 25,
            left: -7
          }}>
            <View style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              flexDirection: 'row',
            }}>
              <TouchableOpacity style={{ width: '34%', marginRight: 11, }} onPress={() => handleMenuPress('IsletmeMenuDetay')}>
                <View style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: '#2A2A2A',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <KahveSvg height={41} width={41} fill={'#B5B5B5'} />
                  <Text style={{
                    color: '#B5B5B5',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    marginTop: 6,
                  }}>
                    Kahve
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '34%', marginRight: 11, }} onPress={() => handleMenuPress('IsletmeMenuDetay')}>
                <View style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: '#2A2A2A',
                  marginRight: 11,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <PizzaSvg height={41} width={65.15} />
                  <Text style={{
                    color: '#B5B5B5',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    marginTop: 6,
                  }}>
                    Pizza
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '34%', marginRight: 11, }} onPress={() => handleMenuPress('IsletmeMenuDetay')}>
                <View style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: '#2A2A2A',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <TatliSvg height={41} width={50} />
                  <Text style={{
                    color: '#B5B5B5',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    marginTop: 6,
                  }}>
                    Tatlı
                  </Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>

          <View style={{
            width: '100%',
            left: -7,
            marginTop: 10,
          }}>
            <View style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              flexDirection: 'row',
            }}>
              <TouchableOpacity style={{ width: '34%', marginRight: 11, }} onPress={() => handleMenuPress('IsletmeMenuDetay')}>
                <View style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: '#2A2A2A',
                  borderRadius: 10,
                  marginRight: 11,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <YemekSvg height={41} width={41} fill={'#B5B5B5'} />
                  <Text style={{
                    color: '#B5B5B5',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    marginTop: 6,
                  }}>
                    Yemek
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ width: '34%', marginRight: 11, }} onPress={() => handleMenuPress('IsletmeMenuDetay')}>
                <View style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: '#2A2A2A',
                  marginRight: 11,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <DondurmaSvg height={41} width={65.15} />
                  <Text style={{
                    color: '#B5B5B5',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    marginTop: 6,
                  }}>
                    Dondurma
                  </Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity style={{ width: '34%', marginRight: 11, }} onPress={() => handleMenuPress('IsletmeMenuDetay')}>
                <View style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: '#2A2A2A',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <NargileSvg height={41} width={50} />
                  <Text style={{
                    color: '#B5B5B5',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    marginTop: 6,
                  }}>
                    Nargile
                  </Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            marginTop: 45
          }}>
            <YildizSvg style={{ marginTop: 12, marginRight: 12 }} height={20} width={20} fill={'#ad681f'} />
            <Text style={{
              fontFamily: 'Poppins',
              fontSize: 20,
              color: '#FFFFFF',
              textAlign: 'center',
              marginTop: 10,
            }}>
              Mekanın Öne Çıkan Ürünleri
            </Text>
          </View>
          <ScrollView>

            <View style={{
              height: 1050,
              width: '100%',
            }}>

              <View style={{
                flexDirection: 'row',
                marginTop: 15
              }}>
                <Image style={{
                  width: 70,
                  height: 70,
                  borderWidth: 2,
                  borderColor: '#AD681F',
                  borderRadius: 10
                }} source={require('../img/MocCoffeeMeram.png')} />

                <View>
                  <Text style={{
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 6,
                    marginLeft: 20,
                  }}>
                    Colombia Metal Kutu Kahve
                  </Text>
                  <Text style={{
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginTop: 8,
                    marginLeft: 20,

                  }}>
                    120₺
                  </Text>
                </View>
              </View>

              <View style={{
                flexDirection: 'row',
                marginTop: 15
              }}>
                <Image style={{
                  width: 70,
                  height: 70,
                  borderWidth: 2,
                  borderColor: '#AD681F',
                  borderRadius: 10
                }} source={require('../img/MocCoffeeMeram.png')} />

                <View>
                  <Text style={{
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 6,
                    marginLeft: 20,
                  }}>
                    Colombia Metal Kutu Kahve
                  </Text>
                  <Text style={{
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginTop: 8,
                    marginLeft: 20,

                  }}>
                    120₺
                  </Text>
                </View>
              </View>


              <View style={{
                flexDirection: 'row',
                marginTop: 15
              }}>
                <Image style={{
                  width: 70,
                  height: 70,
                  borderWidth: 2,
                  borderColor: '#AD681F',
                  borderRadius: 10
                }} source={require('../img/MocCoffeeMeram.png')} />

                <View>
                  <Text style={{
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 6,
                    marginLeft: 20,
                  }}>
                    Colombia Metal Kutu Kahve
                  </Text>
                  <Text style={{
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginTop: 8,
                    marginLeft: 20,

                  }}>
                    120₺
                  </Text>
                </View>
              </View>

              <View style={{
                flexDirection: 'row',
                marginTop: 15
              }}>
                <Image style={{
                  width: 70,
                  height: 70,
                  borderWidth: 2,
                  borderColor: '#AD681F',
                  borderRadius: 10
                }} source={require('../img/MocCoffeeMeram.png')} />

                <View>
                  <Text style={{
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 6,
                    marginLeft: 20,
                  }}>
                    Colombia Metal Kutu Kahve
                  </Text>
                  <Text style={{
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginTop: 8,
                    marginLeft: 20,

                  }}>
                    120₺
                  </Text>
                </View>
              </View>

              <View style={{
                flexDirection: 'row',
                marginTop: 15
              }}>
                <Image style={{
                  width: 70,
                  height: 70,
                  borderWidth: 2,
                  borderColor: '#AD681F',
                  borderRadius: 10
                }} source={require('../img/MocCoffeeMeram.png')} />

                <View>
                  <Text style={{
                    fontFamily: 'Poppins',
                    fontSize: 16,
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: 6,
                    marginLeft: 20,
                  }}>
                    Colombia Metal Kutu Kahve
                  </Text>
                  <Text style={{
                    color: '#fff',
                    backgroundColor: '#268826',
                    width: 60,
                    borderRadius: 4,
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: 'regular',
                    marginTop: 8,
                    marginLeft: 20,

                  }}>
                    120₺
                  </Text>
                </View>
              </View>

            </View>

          </ScrollView>

        </View>
      </View>
    </>
  )
}

export default IsletmeMenu