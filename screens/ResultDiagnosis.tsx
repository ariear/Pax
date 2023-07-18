import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/partials/Header';
import CardSymptom from '../components/partials/CardSymptom';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function ResultDiagnosis({route}) {
  const navigation = useNavigation();
  const {gejalas} = route.params;
  const [resultPredict, setResultPredict] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const postPredict = async () => {
    setIsLoading(true);
    const fetch = await axios.post('https://pax-api.ariear.repl.co/predict', gejalas);
    setResultPredict(fetch.data);
    setIsLoading(false);
  };

  useEffect(() => {
    postPredict();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Hasil Diagnosis" />
      {isLoading ? (
        <ActivityIndicator size="large" color="#F13B82" />
      ) : (
        <ScrollView style={styles.wrap}>
          <Text style={styles.title}>Gejala Yang Dipilih :</Text>
          <CardSymptom title={gejalas.gejala1} />
          <CardSymptom title={gejalas.gejala2} />
          <CardSymptom title={gejalas.gejala3} />
          <Text style={styles.title}>Anda Kemungkinan Mengalami :</Text>
          <Text style={styles.textResult}>{resultPredict.diagnosis}</Text>
          <Text style={styles.title}>Penjelasan :</Text>
          <Text style={styles.desc}>{resultPredict.pengertian}</Text>
          <Text style={styles.title}>Penanganan :</Text>
          <Text style={styles.desc}>{resultPredict.solusi}</Text>
          <View style={styles.wrapBtn}>
            <Pressable
              style={styles.btn}
              android_ripple={{
                color: '#FFFFFF60',
                foreground: true,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.titleBtn}>Halaman Utama</Text>
            </Pressable>
            <Pressable
              style={styles.btnWhite}
              android_ripple={{
                color: '#FFFFFF60',
                foreground: true,
              }}
              onPress={() => navigation.navigate('SymptomList')}>
              <Text style={styles.titleBtnWhite}>Lihat Daftar Gejala</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 18,
  },
  title: {
    color: '#373636',
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginBottom: 12,
  },
  textResult: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#F13B82',
    color: '#FFFFFF',
    alignSelf: 'baseline',
    marginBottom: 17,
  },
  desc: {
    fontFamily: 'PlusJakartaSans-Medium',
    marginBottom: 18,
    color: '#484848',
  },
  btn: {
    backgroundColor: '#F13B82',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 12,
  },
  titleBtn: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 2,
  },
  btnWhite: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#F13B82',
  },
  titleBtnWhite: {
    color: '#F13B82',
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: 2,
  },
  wrapBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 28,
  },
});

export default ResultDiagnosis;
