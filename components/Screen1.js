import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>DISCOVER</Text>
      <Text style={styles.sectionTitle}>Trending Properties</Text>
      <Text style={styles.sectionSubtitle}>Check out prime real estate shares that are being noticed</Text>
      <ScrollView horizontal={true} style={styles.trendingContainer}>
        <TouchableOpacity style={styles.trendingCard}  onPress={() => navigation.navigate('Details')}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/property1.png')} style={styles.trendingImage} />
                <View style={styles.overlay} />
              </View>
              <View style={styles.trendingInfo}>
                <Text style={styles.trendingTitle}>Jor Bagh</Text>
                <Text style={styles.trendingTitle2}>New Delhi, DL, India</Text>
                <Text style={styles.trendingSubtitle}>2,500 sq.ft - 0.21 Acres</Text>
                <View style={styles.trendingFooter}>

                  <Text style={styles.trendingBadge}>Fractional Investment Available</Text>

                  <Text style={styles.trendingPeople}>
                   <Image source={require('../assets/enter.png')} style={styles.circle} />
                  1,207 people registered</Text>
                </View>
              </View>
        </TouchableOpacity>

          <View style={styles.trendingCard}>
                        <View style={styles.imageContainer}>
                          <Image source={require('../assets/property2.png')} style={styles.trendingImage} />
                          <View style={styles.overlay} />
                        </View>
                        <View style={styles.trendingInfo}>
                          <Text style={styles.trendingTitle}>Civil</Text>
                          <Text style={styles.trendingTitle2}>New Delhi, DL, India</Text>
                          <Text style={styles.trendingSubtitle}>14,961 sq.ft - 3.05 Acres</Text>
                          <View style={styles.trendingFooter}>
                            <Text style={styles.trendingBadge}>Fractional Investment Available</Text>
                            <Text style={styles.trendingPeople}>1,207 people registered</Text>
                          </View>
                        </View>
                      </View><View style={styles.trendingCard}>
                                           <View style={styles.imageContainer}>
                                             <Image source={require('../assets/property1.png')} style={styles.trendingImage} />
                                             <View style={styles.overlay} />
                                           </View>
                                           <View style={styles.trendingInfo}>
                                             <Text style={styles.trendingTitle}>Jor Bagh</Text>
                                             <Text style={styles.trendingTitle2}>New Delhi, DL, India</Text>
                                             <Text style={styles.trendingSubtitle}>2,500 sq.ft - 0.21 Acres</Text>
                                             <View style={styles.trendingFooter}>
                                               <Text style={styles.trendingBadge}>Fractional Investment Available</Text>
                                               <Text style={styles.trendingPeople}>1,207 people registered</Text>
                                             </View>
                                           </View>
                                         </View>
      </ScrollView>
      <Text style={styles.tabTitle}>Featured Properties</Text>
      <View style={styles.tabContainer}>
        <Text style={styles.tabActive}>ON-GOING BIDS</Text>
        <Text style={styles.tab}>COMING SOON</Text>
        <Text style={styles.tab}>CLOSED</Text>
      </View>
      <View style={styles.featuredContainer}>
        <View style={styles.featuredCard}>
          <Image source={require('../assets/f1.png')} style={styles.featuredImage} />
          <View style={styles.featuredInfo}>
            <Text style={styles.featuredTitle}>Pali Hill, Bandra West, Mumbai, MH, India</Text>

             <View style={styles.infoRow}>
                     <View style={styles.infoBox}>
                       <Text style={styles.infoLabel}>Total Value</Text>
                       <Text style={styles.infoValue}>$1,796,192</Text>
                     </View>

                     <View style={styles.infoBox}>
                       <Text style={styles.infoLabel}>Starting at </Text>
                       <Text style={styles.infoValue}>$17,961.92++ </Text>
                     </View>

                     <View style={styles.infoBox}>
                       <Text style={styles.infoLabel}>People Registered</Text>
                       <Text style={styles.infoValue}>84/100</Text>
                     </View>
                   </View>
                   <View style={styles.infoRow}>
                                        <View style={styles.infoBox}>
                                          <Text style={styles.infoLabel}>4 Bedrooms</Text>

                                        </View>

                                        <View style={styles.infoBox}>
                                          <Text style={styles.infoLabel}>4 Bath</Text>

                                        </View>

                                        <View style={styles.infoBox}>
                                          <Text style={styles.infoLabel}>2,900 Sqft</Text>

                                        </View>
                                        <View style={styles.infoBox}>
                                           <Text style={styles.infoLabel}>0.13 Acre(s)</Text>
                                        </View>
                                      </View>
           <View style={styles.buttonView}>
            <TouchableOpacity style={styles.learnMoreButton}>
                         <Text style={styles.learnMoreButtonText} >LEARN MORE</Text>
                       </TouchableOpacity>
           </View>
          </View>
        </View>
        <View style={styles.featuredCard}>
                  <Image source={require('../assets/f2.png')} style={styles.featuredImage} />
                  <View style={styles.featuredInfo}>
                    <Text style={styles.featuredTitle}>Vasant Vihar, New Delhi, DL, India</Text>
                     <View style={styles.infoRow}>
                                         <View style={styles.infoBox}>
                                           <Text style={styles.infoLabel}>Total Value</Text>
                                           <Text style={styles.infoValue}>$1,796,192</Text>
                                         </View>

                                         <View style={styles.infoBox}>
                                           <Text style={styles.infoLabel}>Starting at </Text>
                                           <Text style={styles.infoValue}>$17,961.92++ </Text>
                                         </View>

                                         <View style={styles.infoBox}>
                                           <Text style={styles.infoLabel}>People Registered</Text>
                                           <Text style={styles.infoValue}>84/100</Text>
                                         </View>
                                       </View>
                                       <View style={styles.infoRow}>
                                                            <View style={styles.infoBox}>
                                                              <Text style={styles.infoLabel}>4 Bedrooms</Text>

                                                            </View>

                                                            <View style={styles.infoBox}>
                                                              <Text style={styles.infoLabel}>4 Bath</Text>

                                                            </View>

                                                            <View style={styles.infoBox}>
                                                              <Text style={styles.infoLabel}>2,900 Sqft</Text>

                                                            </View>
                                                            <View style={styles.infoBox}>
                                                               <Text style={styles.infoLabel}>0.13 Acre(s)</Text>
                                                            </View>
                                                          </View>
                    <View style={styles.buttonView2}>
                               <TouchableOpacity style={styles.learnMoreButton}>
                                            <Text style={styles.learnMoreButtonText} >LEARN MORE</Text>
                                          </TouchableOpacity>
                              </View>
                  </View>
                </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

circle: {
    width: 12,
    height: 12,
    resizeMode: 'contain'
},

infoRow: {
width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: 20,
  },


     readMore: {
     fontSize: 10,
     lineHeight: 10,
        color: 'blue',
    alignItems: 'center',
      },


  buttonView: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginRight: 20
  },

  buttonView2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: -20
    },

  infoValue: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  infoLabel: {
    fontSize: 8,
    color: '#777',
    textAlign: 'left'
  },


  header: {
  width: "100%",
  color: "#121212",
    fontSize: 32,
    fontWeight: 'light',
    fontStyle: 'italic',
    marginTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    color: "#121212"
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginVertical: 10,
  },
  trendingContainer: {
    marginVertical: 20,
  },
  trendingCard: {
  height: 200,
      marginRight: 10,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    imageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    trendingImage: {
      width: '100%',
//      height: 60,
      resizeMode: 'cover',
      position: 'absolute',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0, 0.3)"
    },
    trendingInfo: {

      padding: 5,
      alignItems: "end",
      justifyContent: 'end',

    },
    trendingTitle: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 5,
      color: '#fff',
    },
    trendingTitle2: {
          fontSize: 25,
          marginBottom: 5,
          color: '#fff',
        },
    trendingSubtitle: {
      fontSize: 10,
      color: '#ffffff',
      marginVertical: 2,
    },

    trendingBadge: {
      fontSize: 10,
      color: '#fff',
      backgroundColor: '#EBE7D359',
      paddingVertical: 5,
      paddingHorizontal: 8,

    },
    trendingPeople: {
    marginLeft: 5,
    fontSize: 10,
          color: '#121212',
          backgroundColor: '#EBE7D3',
          paddingVertical: 5,
          paddingHorizontal: 8,
    },
  trendingImage: {
    width: '100%',
    height: 300,
  },
  trendingInfo: {

bottom: -50,
    padding: 10,
  },


  trendingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },







tabTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    marginTop:30,
    marginBottom: 20,
    color: "#121212"
  },



  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 40,
  },
  tab: {
    fontSize: 16,
    paddingBottom: 10,
    color: '#666',
  },
  tabActive: {
    fontSize: 16,
    paddingBottom: 10,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#000000003',
  },
  featuredContainer: {
    marginVertical: 0,
  },
  featuredCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 0,
    borderWidth: 1,

    paddingVertical: 0,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: "row",
    overflow: 'scroll',
width: "100%",
    marginBottom: 20,
  },
  featuredImage: {
    width: 105,
    height: 146,
  },
  featuredInfo: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 12,
    width: '90%',
    fontWeight: 'bold',
  },
  featuredDetails: {
    fontSize: 8,
    color: '#666',
    marginVertical: 2,
  },


  featuredFlexInfo: {
      width: '48%', // Adjust this to fit your design, 48% to leave some space between items
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
    },

  featuredPeople: {
    fontSize: 8,
    color: '#666',
    marginVertical: 4,
  },
  learnMoreButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 140,
    borderRadius: 4,
    marginTop: 10,
  },
  learnMoreButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 8,
  },
});

export default HomeScreen;
