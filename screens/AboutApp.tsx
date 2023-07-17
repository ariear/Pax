import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Btn from '../components/partials/Btn';
import Header from '../components/partials/Header';

function AboutApp() {
  const openSourceCodeApp = () => {
    // Replace 'your_source_code_app_url' with the actual URL of your source code on GitHub
    const sourceCodeAppURL = 'https://github.com/ariear/Pax';
    Linking.openURL(sourceCodeAppURL);
  };

  const openSourceCodeAPI = () => {
    // Replace 'your_source_code_api_url' with the actual URL of your source code API on GitHub
    const sourceCodeAPIURL = 'https://github.com/ariear/pax-api';
    Linking.openURL(sourceCodeAPIURL);
  };

  return (
    <View>
      <Header title="Tentang Aplikasi" />
      <View style={styles.wrap}>
        <Text style={styles.desc}>
          Aplikasi ini menerapkan algoritma Random Forest yang dibuat dengan
          Python dan scikit-learn, untuk aplikasi android nya saya buat
          menggunakan React Native
        </Text>
        <View style={styles.wrappingBtn}>
          <Btn
            title="Source Code App"
            bgColor="#000000"
            titleColor="#FFFFFF"
            icon="github"
            onPress={openSourceCodeApp}
          />
          <Btn
            title="Source Code API"
            bgColor="#000000"
            titleColor="#FFFFFF"
            icon="github"
            onPress={openSourceCodeAPI}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 28,
    paddingHorizontal: 18,
  },
  wrappingBtn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#373636',
    fontSize: 16,
    marginBottom: 28,
  },
});

export default AboutApp;
