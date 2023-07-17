import {View, Text, StyleSheet, StatusBar} from 'react-native';
import WrapCardMenu from '../components/home/WrapCardMenu';

function Home() {
  return (
    <View style={styles.wrap}>
      <StatusBar backgroundColor="#F13B82" barStyle="light-content" />
      <View style={styles.wrapHead}>
        <Text style={styles.titleHead}>Sistem Pakar Gangguan Mental</Text>
        <Text style={styles.subTitleHead}>
          Gangguan mental adalah kondisi yang mempengaruhi pikiran, perasaan,
          dan perilaku seseorang.
        </Text>
      </View>
      <WrapCardMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
  wrapHead: {
    backgroundColor: '#F13B82',
    paddingTop: 36,
    paddingBottom: 54,
    paddingHorizontal: 14,
    borderBottomEndRadius: 150,
    borderBottomWidth: 8,
    borderRightWidth: 8,
    borderColor: '#FFFFFF',
    marginBottom: 38,
  },
  titleHead: {
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#FFFFFF',
    fontSize: 22,
    width: 190,
    marginBottom: 10,
  },
  subTitleHead: {
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#FFFFFF',
    width: 255,
  },
});

export default Home;
