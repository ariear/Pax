import {View, StyleSheet} from 'react-native';
import CardMenu from './CardMenu';

function WrapCardMenu() {
  return (
    <View style={styles.wrap}>
      <CardMenu logo="0" title="Daftar Gejala" to="SymptomList" />
      <CardMenu logo="1" title="Diagnosis Gejala" to="SymptomDiagnosis" />
      <CardMenu logo="2" title="Tentang Aplikasi" to="AboutApp" />
      <CardMenu logo="3" title="Info Pengembang" to="InfoDev" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default WrapCardMenu;
