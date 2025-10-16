import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <Image
          source={require('./assets/emsi_logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.appTitle}>Student Card App</Text>
          <Text style={styles.centerName}>EMSI CENTRE</Text>
        </View>
      </View>

     
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>TENSAOUI</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>ALI</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  logo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },

  textContainer: {
    flexDirection: 'column',
  },

  appTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a6944ff',
  },

  centerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a6944ff',
  },

  info: {
    alignItems: 'flex-start',
  },

  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },

  value: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },
});
