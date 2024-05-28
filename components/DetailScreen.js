import React, { useState } from 'react';
import { StyleSheet, View, Text, Image,Modal, ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Financial from "./Financial";

const DetailScreen = ({navigation}) => {
  const [isFinancingCollapsed, setFinancingCollapsed] = useState(true);
  const [isPropertyDetailsCollapsed, setPropertyDetailsCollapsed] = useState(true);
  const [isFinancialModelCollapsed, setFinancialModelCollapsed] = useState(true);
     const [showFullText, setShowFullText] = useState(false);
      const [wordsToShow, setWordsToShow] = useState(20);
      const [modalVisible, setModalVisible] = useState(false);
        const [modalVisible2, setModalVisible2] = useState(false);


        const toggleModal2 = () => {
                  setModalVisible2(!modalVisible2);
                };



        const toggleModal = () => {
          setModalVisible(!modalVisible);
        };
      const toggleShowFullText = () => {
        setShowFullText(!showFullText);
      };

      const detailText = "This exquisite first-floor apartment is perched on a 515 sqm (617 sq. yds.) plot; the largest plot size of its kind in Jor Bagh, outside the ASI’s limitations and in close proximity to Lodhi Gardens. The apartment faces and has access to a park in the front and the rear providing residents with verdant & serene green views. This recently built 275 sqm (~2,960 sq. ft.) apartment has a beautiful living room with...";

      const renderContent = () => {
        const words = detailText.split(' ');
        if (showFullText) {
          return words.join(' ');
        } else {
          return words.slice(0, wordsToShow).join(' ');
        }
      };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
            <Image source={require('../assets/property1.png')} style={styles.image} />
            <View style={styles.overlay} />
            <View style={styles.imagesContainer}>
              <TouchableOpacity style={styles.touchImage} onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/leftArrow.png')} style={styles.icon}/>
              </TouchableOpacity>
              <View style={styles.rightIconsContainer}>
                <TouchableOpacity style={styles.touchImage}>
                  <Image source={require('../assets/headIcon.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchImage}>
                  <Image source={require('../assets/saved.png')} style={styles.icon2} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.title}>JOR BAGH,</Text>
            <Text style={styles.subtitle}>New Delhi, India</Text>


          </View>
      <View style={styles.content}>

        <Text style={styles.description}>First Floor Apartment in Jor Bagh</Text>
         <Text style={styles.detailText}>
                 {renderContent()}
                 {showFullText ? null : ' '}
                 <TouchableOpacity onPress={toggleShowFullText}>
                   <Text style={styles.readMore}>{showFullText ? ' Read Less' : ' Read More'}</Text>
                 </TouchableOpacity>
               </Text>

       <View style={styles.infoRow}>
         <View style={styles.infoBox}>
           <Text style={styles.infoLabel}>Total Value</Text>
           <Text style={styles.infoValue}>$3,058,654</Text>
         </View>
         <View style={styles.horizontalLine} />
         <View style={styles.infoBox}>
           <Text style={styles.infoLabel}>Price per share</Text>
           <Text style={styles.infoValue}>$15,293</Text>
         </View>
         <View style={styles.horizontalLine} />
         <View style={styles.infoBox}>
           <Text style={styles.infoLabel}>Available spots</Text>
           <Text style={styles.infoValue}>72</Text>
         </View>
       </View>


        <View style={styles.timeline}>
        <Text style={styles.timelineHeading}>Fund Raising Timeline</Text>
          <Text style={styles.timelineText}><Image source={require('../assets/clock.png')} style={styles.clock} /> Ends in 12 Days</Text>
          <View style={styles.timelineBar}>
            <View style={styles.timelineProgress} />
          </View>
        </View>

        <TouchableOpacity onPress={() => setFinancingCollapsed(!isFinancingCollapsed)}>
          <View style={styles.flexHeader}>
          <View  style={styles.flexHeader2}>
         <View style={styles.imageBorder}>
          <Image source={require('../assets/fo.png')} style={styles.fo} />
         </View>
                    <View style={styles.sectionHeader}>
                                      <Text style={styles.sectionTitle}>Financing Options</Text>
                                      <Text style={styles.sectionSubTitle}>Options for both Owners and Shareholders</Text>
                                    </View>
          </View>

          <Image source={require('../assets/downArrow.png')}
           style={[styles.clock, { transform: [{ rotate: isFinancingCollapsed ? '0deg' : '180deg' }] }]} /></View>
        </TouchableOpacity>
        <Collapsible collapsed={isFinancingCollapsed}>
          <View style={styles.sectionContent2}>

            <Financial/>
            <View style={styles.sectionContent}>
                                               <TouchableOpacity style={styles.learnMoreButton} onPress={toggleModal}>
                                                 <Text style={styles.learnMoreButtonText}>CONFIRM SPOT</Text>
                                                 <Image source={require('../assets/rightArrow.png')} style={styles.rightArrow} />
                                               </TouchableOpacity>
                                             </View>

                                             <Modal
                                               animationType="slide"
                                               transparent={true}
                                               visible={modalVisible2}
                                               onRequestClose={toggleModal2}
                                             >
                                               <View style={styles.modalContainer}>
                                                 <View style={styles.modalContent}>
                                                   <Text style={styles.modalTitle}>Join Us</Text>
                                                   <Text style={styles.modalDesc}>Learn more about this property and gain access to a wide pool of financing options - ones that could flair up not just your passion, but even your portfolio. </Text>
                                                   <View style={styles.buttonEnd}>
                                                   <TouchableOpacity style={styles.signUpButton} onPress={toggleModal}>
                                                       <Text style={styles.signUpButtonText}>Sign Up</Text>
                                                   </TouchableOpacity>
                                                   </View>
                                                 </View>
                                               </View>
                                             </Modal>
          </View>
        </Collapsible>
        <TouchableOpacity onPress={() => setPropertyDetailsCollapsed(!isPropertyDetailsCollapsed)}>
                  <View style={styles.flexHeader}>
                  <View  style={styles.flexHeader2}>
                   <View style={styles.imageBorder}>
                                              <Image source={require('../assets/pd.png')} style={styles.fo} />
                                             </View><View style={styles.sectionHeader}>
                                                      <Text style={styles.sectionTitle}>Property Details</Text>
                                                      <Text style={styles.sectionSubTitle}>Flat type, square footage, location benefits, ame...</Text>
                                                    </View>
                  </View>
                 <Image source={require('../assets/downArrow.png')}
                                   style={[styles.clock, { transform: [{ rotate: isPropertyDetailsCollapsed ? '0deg' : '180deg' }] }]} /></View>
                </TouchableOpacity>
                <Collapsible collapsed={isPropertyDetailsCollapsed}>
                  <View style={styles.sectionContent}>
                    <Text>Options for both Owners and Shareholders</Text>
                    <Text style={styles.sectionDetailText}>Become a shareholder...</Text>
                  </View>
                </Collapsible>
                <TouchableOpacity onPress={() => setFinancialModelCollapsed(!isFinancialModelCollapsed)}>
                          <View style={styles.flexHeader}>
                          <View style={styles.flexHeader2}>
                          <View style={styles.imageBorder}>
                                                      <Image source={require('../assets/fm.png')} style={styles.fo} />
                                                    </View>
                                                    <View style={styles.sectionHeader}>
                                                                      <Text style={styles.sectionTitle}>Financial Model</Text>
                                                                      <Text style={styles.sectionSubTitle}>Indicators for capital appreciation, monthly yield etc.</Text>
                                                                    </View>
                          </View>
                            <Image source={require('../assets/downArrow.png')}
                                          style={[styles.clock, { transform: [{ rotate: isFinancialModelCollapsed ? '0deg' : '180deg' }] }]} /></View>
                        </TouchableOpacity>
                        <Collapsible collapsed={isFinancialModelCollapsed}>
                          <View style={styles.sectionContent}>
                                   <TouchableOpacity style={styles.learnMoreButton} onPress={toggleModal}>
                                     <Text style={styles.learnMoreButtonText}>CONFIRM SPOT</Text>
                                     <Image source={require('../assets/rightArrow.png')} style={styles.rightArrow} />
                                   </TouchableOpacity>
                                 </View>

                                 <Modal
                                   animationType="slide"
                                   transparent={true}
                                   visible={modalVisible}
                                   onRequestClose={toggleModal}
                                 >
                                   <View style={styles.modalContainer}>
                                     <View style={styles.modalContent}>
                                       <Text style={styles.modalTitle}>Join Us</Text>
                                       <Text style={styles.modalDesc}>Learn more about this property and gain access to a wide pool of financing options - ones that could flair up not just your passion, but even your portfolio. </Text>
                                       <View style={styles.buttonEnd}>
                                       <TouchableOpacity style={styles.signUpButton} onPress={toggleModal}>
                                           <Text style={styles.signUpButtonText}>Sign Up</Text>
                                       </TouchableOpacity>
                                       </View>
                                     </View>
                                   </View>
                                 </Modal>
                        </Collapsible>




        <View style={styles.contact}>
          <Image source={require('../assets/avatar.png')} style={styles.avatar} />

          <View style={styles.contactCon} >
            <Text style={styles.contactName}>Akash Puri</Text>

            <Text style={styles.contactDescription}>Seek guidance and an expert opinion from our specialists.</Text>

          </View>
           <View style={styles.arrowContainer}>
                                 <Image source={require('../assets/rightArrow.png')} style={styles.rightArrow2} />
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
  },

touchImage: {
    backgroundColor: '#12121259',
    borderRadius: 50,
    padding:2,
    marginLeft: 5
},


  imageContainer: {
     flex: 1,
     position: 'relative',
   },
   image: {
     width: '100%',
     height: 300,
   },
   imagesContainer: {
     position: 'absolute',
     top: 45,
     left: 20,
     right: 30,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
   },
   icon: {
     width: 24,
     resizeMode: 'contain',
     height: 24,
     margin: 10,
   },

   icon2: {
        width: 24,
        resizeMode: 'contain',
        height: 24,
        margin: 10,
        right: 0
      },
   rightIconsContainer: {
     flexDirection: 'row',
     alignItems: 'center',

   },
   title: {
     position: 'absolute',
     bottom: 50,
     left: 20,
     color: '#fff',
     fontSize: 26,
     fontWeight: 'bold',
   },
   overlay: {
         ...StyleSheet.absoluteFillObject,
         backgroundColor: "rgba(0,0,0, 0.3)"
       },
   subtitle: {
     position: 'absolute',
     bottom: 20,
     left: 20,
     color: '#fff',
     fontSize: 22,
   },
   link: {
     position: 'absolute',
     bottom: 5,
     left: 20,
     color: '#fff',
     fontSize: 12,
     textDecorationLine: 'underline',
   },

    title2: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          color: 'white',
          fontSize: 22,

        },
  content: {
    padding: 20,
  },

  description: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 10,
    color: '#666',
    lineHeight: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  horizontalLine: {
      backgroundColor: "#12121299",
      width:3,
      height: 50,

    },

     readMore: {
     fontSize: 10,
     lineHeight: 10,
        color: 'blue',
    alignItems: 'center',
      },

  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoLabel: {
    fontSize: 12,
    color: '#777',
    textAlign: 'left'
  },

  imageBorder: {
   borderWidth: 1, borderColor: "#000", marginRight: 10, borderRadius: 50
   , padding: 5
  }
,


  fo: {
  width: 20, height: 20,  resizeMode: "contain",
   },


clock:{
width: 13, height: 13, paddingRight: 5, resizeMode: "contain"},
  timelineHeading:{
  color: '#12121273',
  fontSize: 12},


  timeline: {
    marginBottom: 20,
  },
  timelineText: {
    fontSize: 12,
    marginVertical: 5,
    marginLeft: 5
  },

  timelineBar: {
    height: 10,
    backgroundColor: '#ddd',

  },

  flexHeader:{
   padding: 10,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: "center"
  },
  flexHeader2:{
     paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
    },


  timelineProgress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#121212',

  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },


  sectionSubTitle: {
  color: "#12121259",
  fontSize: 10,
  marginTop: 4
  },
  sectionContent: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionDetailText: {
    fontSize: 14,
    color: '#777',
  },
  learnMoreButton: {
    marginTop: 10,
    backgroundColor: '#121212',
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  learnMoreButtonText: {
    color: '#fff',
    fontSize: 16,

  },
  contact: {
    flexDirection: 'row',
    alignItems: 'start',
    marginTop: 20,
    padding: 13,
    backgroundColor: "#121212"
  },

  contactCon: {
    width: '50%',

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactName: {
    fontSize: 14,
     color: '#fff',
    fontWeight: 'bold',
  },
  contactDescription: {
    fontSize: 10,
    color: '#fff',
    width: '100%',
    marginTop: 5
  },

  rightArrow:{
  width: 48,
  resizeMode:'contain',
  marginLeft: 20
  },

arrowContainer: {
 justifyContent: 'flex-end',
 width: '30%',
 alignItems: 'center',
 flexDirection: 'row'
},

    rightArrow2:{
    width: 48,
    marginLeft: 0,

    resizeMode: 'contain'
    },

  modalContainer: {
      flex: 1,
       height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,

      backgroundColor: '#121212',

      alignItems: 'start',
    },
    modalTitle: {
      fontSize: 24,
      marginBottom: 20,
      color: "white"
    },
    modalDesc: {
    color: "#F2F2F2BF",
    fontSize: 10,


    },


    buttonEnd: {
       flexDirection: 'row',
       justifyContent: 'flex-end', // Aligns children to the end (right) of the container
       marginTop: 20,
     },

    signUpButton: {
      paddingVertical: 10,
      paddingHorizontal: 16,

      backgroundColor: '#ebe7d3',
      borderRadius: 0,
      width: 120,
      alignItems: 'center'
    },
    signUpButtonText: {
      color: '#121212',
      fontSize: 16,
    },
});

export default DetailScreen;
