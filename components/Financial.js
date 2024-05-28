import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Financial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.shareholderInfo}>

          <View style={styles.textContainer}>
           <Image source={require('../assets/mainFin.jpg')} style={styles.icon} />
            <Text style={styles.shareholderTitle}>Become a shareholder</Text>
            <Text style={styles.shareholderSubtitle}>Own a share of this stunning growth-driven property.</Text>
            <Text style={styles.shareholderNote}>1 Share (token) = $15,293</Text>
          </View>
          <View>
          <Text style={styles.totalValue}>$3,058,654</Text>
                    <Text style={styles.pricePerShare}>$15,293</Text>
          </View>
        </View>
      </View>
      <View style={styles.financialServices}>
        <Image source={require('../assets/fIcon.jpg')} style={styles.financialIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.financialTitle}>Sotheby’s Financial Services</Text>
          <Text style={styles.financialSubtitle}>Allow our team of experts to tailor the ideal financing option for you</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
  },
  shareholderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,

  },
  shareholderTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  shareholderSubtitle: {
    color: ' #121212BF',
    fontSize: 10,
    marginVertical: 3
  },
  shareholderNote: {
    color: '#12121240',
    fontSize: 10,
  },
  totalValue: {
    fontSize: 13,
    color: '#12121240',
    textAlign: 'right',
    textDecorationLine: 'line-through',
  },
  pricePerShare: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#000',
  },
  financialServices: {
    flexDirection: 'row',
    alignItems: 'start',
    padding: 4,
  },
  financialIcon: {
    width: 24,
    marginRight: 5,
    height: 24,
  },
  financialTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  financialSubtitle: {
    color: '#666',
    fontSize: 10,
  },
  link: {
    color: '#0000EE',
    textDecorationLine: 'underline',
    fontSize: 12,
    marginTop: 10,
  },
});

export default Financial;
