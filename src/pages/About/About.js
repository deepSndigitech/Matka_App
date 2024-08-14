import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'


import { color } from '../../constantComponent/color';
import { useSelector } from 'react-redux';
import WebView from 'react-native-webview';
const { height, width } = Dimensions.get('window')
const About = ({ navigation }) => {

  const datas = ["satta matka", "online matka", "online matka app", "satta matta matka", "matka satta", "matka app", "online satta app", "kalyan matka", "satta matka satta matka", "online matka play", "online matka play full rate app", "100 deposit matka app download", "satta king", "online satta play", "trusted online matka app", "kalyan online matka", "satta king gali", "fast withdrawal matka app", "satta company", "best site to play online matka"]

  const imagesData = [require('../../Images/rezeetImg/banner_bg.png'), require('../../Images/rezeetImg/banner_bg1.png'), require('../../Images/rezeetImg/banner_bg2.png'), require('../../Images/rezeetImg/banner_bg3.png'), require('../../Images/rezeetImg/banner_bg4.png'), require('../../Images/rezeetImg/banner_bg5.png')]

  const [number, setnumber] = useState(0);
  const [number1, setnumber1] = useState(0);
  const Color = useSelector(state => state.Theme.Color)



  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 21); // Generate random number between 0 and 20

      const newRandomNumberBann = Math.floor(Math.random() * 5); // Generate random number between 0 and 20
      // Generate random number between 0 and 20
      setnumber(newRandomNumber);
      setnumber1(newRandomNumberBann);

    }, 2000); // 2000 milliseconds = 2 seconds

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
    <View style={{ flex: 1, backgroundColor: Color.tertiary }}>
      {/* <StatusBar barStyle="default" /> */}
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={require('../../Images/rezeetImg/left_arrow.png')} style={{ height: 40, width: 40, tintColor: '#000', }} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 40, color: '#000', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>About Matka</Text>
      </View>
      <ScrollView style={{}}>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Text style={{ color: '#000', }}>The Matka game, also known as Satta Matka, is a popular numbers-based game that originated
            in India. It has a rich history, evolving from simple lottery-like activities to a sophisticated system
            involving various forms of numerical predictions and strategies. Despite its evolution, the
            essence of the game remains rooted in its number-based prediction mechanisms. Here's an
            overview of the present condition of the Matka game</Text>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
              1. Digital Transformation
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Online Platforms: The Matka game has seen a significant shift from physical locations
                to online platforms. Numerous websites and mobile applications now offer Matka games,
                making it more accessible to a global audience. This digital transition has brought with it
                enhanced convenience and a wider range of options for players.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● User Experience: Online platforms have introduced various features to enhance user
                experience, such as real-time results, interactive interfaces, and user-friendly designs.
                This has led to an increase in the number of players participating in Matka games.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
              2. Regulation and Legal Status
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Varied Regulations: The legal status of Matka games varies by region. In some areas, it
                is regulated under specific laws, while in others, it operates in a legal gray area. The
                regulatory environment is continuously evolving, with some regions introducing stricter
                regulations to manage the game's operations.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● Efforts for Regulation: There have been efforts to bring more regulation and oversight
                to the Matka industry, particularly in online formats. This includes measures to ensure
                fair play, transparency, and protection of players' interests.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
              3. Market Trends
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Popularity: The Matka game remains popular, especially in urban areas and among
                certain demographic groups. Its popularity is driven by its simplicity and the thrill
                associated with predicting numbers.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● Diversification: The game has diversified into various formats and versions, including
                different types of number predictions and betting strategies. This diversification caters to
                a wide range of preferences and keeps the game engaging for players.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
            4. Technological Integration
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Advanced Features: Modern Matka platforms often incorporate advanced technological
features such as live streaming of results, statistical analysis tools, and personalized
player dashboards. These features enhance the overall gaming experience and provide
players with more tools to make informed decisions.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● Security Measures: Online Matka platforms invest in robust security measures to
protect user data and transactions. This includes encryption technologies, secure
payment gateways, and regular audits to ensure compliance with industry standards.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
            5. Community and Social Impact
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Community Building: The Matka game has fostered a vibrant community of players
and enthusiasts. Online forums, social media groups, and dedicated websites provide
platforms for players to share strategies, discuss trends, and connect with others who
share their interest in the game.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● Social Aspects: The game's social impact varies. In some cases, it serves as a form of
entertainment and a way to engage with others. However, there are concerns about its
potential negative effects on individuals' financial well-being and the need for responsible
participation.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
            6. Financial Aspects
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Economic Impact: The Matka game contributes to the economy through various
channels, including online transactions and advertising revenues for platform operators.
However, it is essential to consider the broader economic impact, including the potential
for financial risk among participants.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● Investment Trends: There is a growing interest in investing in Matka-related ventures,
particularly online platforms. This includes funding for technology development,
marketing efforts, and expansion into new markets.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
            7. Challenges and Opportunities
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ color: '#000', }}>● Challenges: The Matka game faces several challenges, including regulatory scrutiny,
competition from other forms of entertainment, and the need for continuous innovation to
maintain player interest. Additionally, ensuring fair play and addressing issues related to
problem gaming are ongoing concerns.
              </Text>
              <Text style={{ marginTop: 5, color: '#000' }}>
                ● Opportunities: Despite these challenges, there are opportunities for growth and
innovation. The integration of new technologies, the expansion into emerging markets,
and the development of unique game formats present opportunities for continued
success and evolution.</Text>

            </View>
          </View>
          <View>
            <Text style={{ marginTop: 10, fontWeight: '700', color: '#000' }}>
            Conclusion
            </Text>
            <View style={{ marginLeft: 5 }}>
              <Text style={{ color: '#000', }}>The Matka game continues to be a popular and evolving activity, with significant changes
brought about by digital transformation and technological advancements. While it faces
challenges related to regulation and market competition, its adaptability and ongoing innovation
present opportunities for growth. The game's present condition reflects a dynamic landscape
where tradition meets modernity, creating a unique experience for participants
              </Text>
              

            </View>
          </View>

        </View>
        {/* <WebView
          source={{ uri: 'https://development.smapidev.co.in/terms_and_conditions' }}
        // style={{ flex: 1 }}
        /> */}
      </ScrollView>
      <TouchableOpacity onPress={() => bannerChange()} style={{ marginTop: 20 }}>

        <ImageBackground style={{ width: '96%', height: 60, alignSelf: 'center', justifyContent: 'center', position: 'relative', bottom: 20 }} resizeMode='stretch' source={imagesData[number1]}>
          <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20, fontSize: 20 }}>{datas[number]}</Text>
        </ImageBackground>
      </TouchableOpacity>




    </View>
  )
}

export default About


