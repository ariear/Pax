import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import Btn from '../components/partials/Btn';
import Header from '../components/partials/Header';

function InfoDev() {
  const openGithubProfile = () => {
    const githubURL = 'https://github.com/ariear';
    Linking.openURL(githubURL);
  };

  const openFacebookProfile = () => {
    const facebookURL =
      'https://www.facebook.com/profile.php?id=100070950729478';
    Linking.openURL(facebookURL);
  };

  return (
    <View>
      <Header title="Info Pengembang" />
      <View style={styles.wrap}>
        <Text style={styles.desc}>
          Halo semua, namaku Arie, aku membuat aplikasi ini dengan bantuan
          ChatGPT, terimaksih AI 🤩
        </Text>
        <View style={styles.wrappingBtn}>
          {/* Add onPress event handlers to the buttons */}
          <Btn
            title="Github"
            bgColor="#000000"
            titleColor="#FFFFFF"
            icon="github"
            onPress={openGithubProfile} // Call the function to open the GitHub URL
          />
          <Btn
            title="Facebook"
            bgColor="#1877F2"
            titleColor="#FFFFFF"
            icon="facebook"
            onPress={openFacebookProfile} // Call the function to open the Facebook URL
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

export default InfoDev;
