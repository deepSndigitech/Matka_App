import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, ScrollView, SafeAreaView, RefreshControl, Linking, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'

import { color } from '../../constantComponent/color';
// import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import { apiMethod, apiRoutes, apimethods } from '../../apiConfig/apiurl';
import Loader from '../../constantComponent/Loader';

const Home = props => {

  const data = ["satta matka", "online matka", "online matka app", "satta matta matka", "matka satta", "matka app", "online satta app", "kalyan matka", "satta matka satta matka", "online matka play", "online matka play full rate app", "100 deposit matka app download", "satta king", "online satta play", "trusted online matka app", "kalyan online matka", "satta king gali", "fast withdrawal matka app", "satta company", "best site to play online matka"]

  const imagesData = [require('../../Images/rezeetImg/banner_bg.png'), require('../../Images/rezeetImg/banner_bg1.png'), require('../../Images/rezeetImg/banner_bg2.png'), require('../../Images/rezeetImg/banner_bg3.png')]

  const Color = useSelector(state => state.Theme.Color)
  const openWhatsApp = (phoneNumber) => {
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url)
      .catch(() => {
        alert('Make sure WhatsApp is installed on your device');
      });
  };

  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumberbaner, setRandomNumberbaner] = useState(0);
  const [number1, setnumber1] = useState(0)
  const [number2, setnumber2] = useState(0)
  const [number3, setnumber3] = useState(0)
  const [number4, setnumber4] = useState(0)
  const [number5, setnumber5] = useState(0)
  const [number6, setnumber6] = useState(0)
  const [number12, setnumber12] = useState(0)
  const [number13, setnumber13] = useState(0)
  const [number14, setnumber14] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const number2 = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const number3 = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const number4 = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const number5 = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const number6 = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const number7 = Math.floor(Math.random() * 21); // Generate random number between 0 and 20
      const newRandomNumberBann = Math.floor(Math.random() * 3); // Generate random number between 0 and 20
      const setnumber122 = Math.floor(Math.random() * 3); // Generate random number between 0 and 20
      const setnumber121 = Math.floor(Math.random() * 3); // Generate random number between 0 and 20
      const setnumber1222 = Math.floor(Math.random() * 3); // Generate random number between 0 and 20
      setRandomNumber(newRandomNumber);
      setnumber1(number2);
      setnumber2(number3);
      setnumber3(number4);
      setnumber4(number5);
      setnumber5(number6);
      setnumber6(number7);
      setnumber14(setnumber122);
      setnumber13(setnumber121);
      setnumber12(setnumber1222);
      setRandomNumberbaner(newRandomNumberBann)
    }, 20000); // 2000 milliseconds = 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);


  const bannerChange = () => {
    Linking.openURL("https://development.smapidev.co.in/")
      .catch(() => {
        alert('Unable to redirect');
      });

  }


  return (
    <SafeAreaView>
      <View style={{ height: '100%', backgroundColor: Color.tertiary }}>

        <View style={{ marginHorizontal: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>

          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => props.navigation.toggleDrawer()}>
            <Image style={{ alignSelf: 'center', height: 28, width: 28, marginRight: 10, tintColor: Color.onSecondary }} source={require('../../Images/more.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 28, fontWeight: '900', color: '#FF8A08' }}>Milan Day</Text>
          <Text>{"\t"}</Text>

        </View>

        <View style={{ flex: 1, marginTop: 20 }}
        >
          <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 20, bottom: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#170B3B', textAlign: 'center' }}>The Matka game</Text>
              {/* diigiteal */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 30 }}>Digital Transformation</Text>


                <View style={{ elevation: 5, backgroundColor: '#FFB22C', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Online Platforms</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>The Matka game has seen a significant shift from physical locations
                      to online platforms. Numerous websites and mobile applications now offer Matka games,
                      making it more accessible to a global audience. This digital transition has brought with it
                      enhanced convenience and a wider range of options for players.
                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: 'rgb(155,190,250)', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>User Experience</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>Online platforms have introduced various features to enhance user
                      experience, such as real-time results, interactive interfaces, and user-friendly designs.
                      This has led to an increase in the number of players participating in Matka games.

                    </Text>



                  </View>




                </View>
              </View>
              {/* add */}
              <TouchableOpacity onPress={()=>bannerChange()}>

              <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[randomNumberbaner]}>
                <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[randomNumber]}</Text>
              </ImageBackground>
              </TouchableOpacity>

              {/* Regulation */}

              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 20 }}>Regulation and Legal Status</Text>


                <View style={{ elevation: 5, backgroundColor: '#FFDE4D', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Varied Regulations</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>The legal status of Matka games varies by region. In some areas, it
                      is regulated under specific laws, while in others, it operates in a legal gray area. The
                      regulatory environment is continuously evolving, with some regions introducing stricter
                      regulations to manage the game's operations.

                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: '#FF4C4C', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Efforts for Regulation</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>There have been efforts to bring more regulation and oversight
                      to the Matka industry, particularly in online formats. This includes measures to ensure
                      fair play, transparency, and protection of players' interests.
                    </Text>



                  </View>




                </View>

              </View>
              <TouchableOpacity onPress={()=>bannerChange()}>

              <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[number12]}>
                <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[number6]}</Text>
              </ImageBackground>
              </TouchableOpacity>
              {/*  Market Trends */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 20 }}> Market Trends</Text>


                <View style={{ elevation: 5, backgroundColor: 'rgb(255, 217, 221)', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Popularity</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>The Matka game remains popular, especially in urban areas and among
                      certain demographic groups. Its popularity is driven by its simplicity and the thrill
                      associated with predicting numbers.


                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: 'rgb(155,190,250)', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Diversification</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>The game has diversified into various formats and versions, including
                      different types of number predictions and betting strategies. This diversification caters to
                      a wide range of preferences and keeps the game engaging for players.
                    </Text>



                  </View>




                </View>

              </View>
              <TouchableOpacity onPress={()=>bannerChange()}>

              <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[number13]}>
                <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[number4]}</Text>
              </ImageBackground>
              </TouchableOpacity>
              {/* Technological Integration */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 20 }}> Technological Integration</Text>


                <View style={{ elevation: 5, backgroundColor: '#F7D060', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Advanced Features</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>Modern Matka platforms often incorporate advanced technological
                      features such as live streaming of results, statistical analysis tools, and personalized
                      player dashboards. These features enhance the overall gaming experience and provide
                      players with more tools to make informed decisions.


                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: '#ACEACF', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Security Measures</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}> Online Matka platforms invest in robust security measures to
                      protect user data and transactions. This includes encryption technologies, secure
                      payment gateways, and regular audits to ensure compliance with industry standards.
                    </Text>



                  </View>




                </View>

              </View>
              <TouchableOpacity onPress={()=>bannerChange()}>

              <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[randomNumberbaner]}>
                <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[number5]}</Text>
              </ImageBackground>
              </TouchableOpacity>
              {/* Community and Social Impact
 */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 20 }}> Community and Social Impact
                </Text>


                <View style={{ elevation: 5, backgroundColor: '#9B7AFF', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Community Building</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>The Matka game has fostered a vibrant community of players
                      and enthusiasts. Online forums, social media groups, and dedicated websites provide
                      platforms for players to share strategies, discuss trends, and connect with others who
                      share their interest in the game.



                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: '#FF5DA2', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Social Aspects</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}> The game's social impact varies. In some cases, it serves as a form of
                      entertainment and a way to engage with others. However, there are concerns about its
                      potential negative effects on individuals' financial well-being and the need for responsible
                      participation.
                    </Text>



                  </View>




                </View>

              </View>
              <TouchableOpacity onPress={()=>bannerChange()}>

              <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[number14]}>
                <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[number3]}</Text>
              </ImageBackground>
              </TouchableOpacity>
              {/* Financial Aspects

 */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 20 }}> Financial Aspects

                </Text>


                <View style={{ elevation: 5, backgroundColor: '#F7D060', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Economic Impact</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}>The Matka game contributes to the economy through various
                      channels, including online transactions and advertising revenues for platform operators.
                      However, it is essential to consider the broader economic impact, including the potential
                      for financial risk among participants.
                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: '#FF5DA2', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Investment Trends</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}> There is a growing interest in investing in Matka-related ventures,
                      particularly online platforms. This includes funding for technology development,
                      marketing efforts, and expansion into new markets.
                    </Text>



                  </View>




                </View>

              </View>
              <TouchableOpacity onPress={()=>bannerChange()}>

              <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[number12]}>
                <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[number2]}</Text>
              </ImageBackground>
              </TouchableOpacity>
              {/* Challenges and Opportunities

 */}
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', marginTop: 20 }}> Challenges and Opportunities

                </Text>


                <View style={{ elevation: 5, backgroundColor: '#ACEACF', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Challenges </Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}> The Matka game faces several challenges, including regulatory scrutiny,
                      competition from other forms of entertainment, and the need for continuous innovation to
                      maintain player interest. Additionally, ensuring fair play and addressing issues related to
                      problem gaming are ongoing concerns.

                    </Text>



                  </View>




                </View>
                <View style={{ elevation: 5, backgroundColor: '#EEEEEE', borderRadius: 10, margin: 10, padding: 10 }}>
                  <View style={{


                  }}>
                    <Text style={{ textAlign: 'center', fontWeight: '700', textDecorationLine: 'underline', color: '#000266', fontSize: 16 }}>Opportunities</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12, color: '#000', marginTop: 10 }}> Despite these challenges, there are opportunities for growth and
                      innovation. The integration of new technologies, the expansion into emerging markets,
                      and the development of unique game formats present opportunities for continued
                      success and evolution.

                    </Text>



                  </View>




                </View>

              </View>
              <TouchableOpacity onPress={()=>bannerChange()}>
                <ImageBackground style={{ width: '100%', height: 50, alignSelf: 'center', justifyContent: 'center' }} resizeMode='stretch' source={imagesData[randomNumberbaner]}>
                  <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20 }}>{data[number1]}</Text>
                </ImageBackground>
              </TouchableOpacity>

            </ScrollView>





          </View>
          <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 35, backgroundColor: '#170B3B', alignSelf: 'flex-end', position: 'absolute', bottom: 0, right: 20, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => openWhatsApp('+919509622074')}>

            <Image source={require('../../Images/rezeetImg/whatsapp.png')} style={{ height: 40, width: 40 }} />
          </TouchableOpacity>


        </View>

      </View>
    </SafeAreaView>
  )
}


export default Home;


