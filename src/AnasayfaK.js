import { View, Text, Image } from 'react-native'
import React from 'react'
import AnaMenu from '../components/AnaMenu'
import InstaStory from 'react-native-insta-story';
import BulunduguMekan from '../components/BulunduguMekan';
import KahveSvg from '../svg/KahveSvg';
import Yonlendir from '../components/Yonlendir';
import QRMenu from '../svg/QRMenu';
import SosyalSvg from '../svg/SosyalSvg';
import FirsatSvg from '../svg/FirsatSvg';
import MekanSvg from '../svg/MekanSvg';
import MarketSvg from '../svg/MarketSvg';

const data = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Ahmet Çağlar Durmuş',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Deneme',
        onPress: () => console.log('Hikaye Kaydırıldı'),
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Deneme 2',
        onPress: () => console.log('Hikaye Kaydırıldı'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
];

const AnasayfaK = () => {
  return (
    <>
      <View style={{
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
      }}>
        <AnaMenu />

        <View style={{
          width: '92%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderBottomColor: '#2A2A2A',
          borderBottomWidth: 1,
          marginBottom: 10
        }}>

          <InstaStory
            data={data}
            duration={10}
            unPressedBorderColor={"#D6AA84"}
            unPressedAvatarTextColor={"#FFF"}
            pressedAvatarTextColor={'#FFF'}
            pressedBorderColor={"#C9C9C9"}
            avatarWrapperStyle={{ marginTop: 15 }}
          />

        </View>

        <BulunduguMekan />

        <Yonlendir />

        <View style={{
          flexDirection: 'row',
          width: '90%',
          marginRight: 'auto',
          left: 15,
          marginTop: 34,
          marginBottom: 15
        }}>
          <KahveSvg height={21} width={21} />
          <Text style={{
            color: '#fff',
            fontFamily: 'Poppins',
            fontSize: 18,
            fontWeight: 'Regular',
          }}>
            İşlemler
          </Text>
        </View>

        <View style={{
          width: '90%',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <View style={{
            height: 120,
            width: 120,
            backgroundColor: '#2A2A2A',
            borderRadius: 10,
            marginRight: 11,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <QRMenu height={41} width={41} />
            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: 19,
              marginTop: 6,
            }}>
              bi<Text style={{ color: '#AD681F' }}>menü</Text>
            </Text>
          </View>

          <View style={{
            height: 120,
            width: 120,
            backgroundColor: '#2A2A2A',
            marginRight: 11,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <SosyalSvg height={41} width={65.15} />
            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: 19,
              marginTop: 6,
            }}>
              bi<Text style={{ color: '#AD681F' }}>sosyal</Text>
            </Text>
          </View>

          <View style={{
            height: 120,
            width: 120,
            backgroundColor: '#2A2A2A',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <FirsatSvg height={41} width={50} />
            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: 19,
              marginTop: 6,
            }}>
              bi<Text style={{ color: '#AD681F' }}>fırsat</Text>
            </Text>
          </View>

        </View>


        <View style={{
          width: '90%',
          flexDirection: 'row',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 12
        }}>
          <View style={{
            height: 120,
            width: 120,
            backgroundColor: '#2A2A2A',
            borderRadius: 10,
            marginRight: 11,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <MekanSvg height={41} width={41} />
            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: 19,
              marginTop: 6,
            }}>
              bi<Text style={{ color: '#AD681F' }}>mekan</Text>
            </Text>
          </View>

          <View style={{
            height: 120,
            width: 120,
            backgroundColor: '#2A2A2A',
            marginRight: 11,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <MarketSvg height={41} width={50} />
            <Text style={{
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: 19,
              marginTop: 6,
            }}>
              bi<Text style={{ color: '#AD681F' }}>market</Text>
            </Text>
          </View>

        </View>

      </View>
    </>
  )
}

export default AnasayfaK