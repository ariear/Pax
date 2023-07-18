import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import Header from '../components/partials/Header';
import InputSearch from '../components/partials/InputSearch';
import CardSymptomDiagnosis from '../components/partials/CardSymptomDiagnosis';
import BtnDiagnose from '../components/symptomdiagnosis/BtnDiagnose';
import axios from 'axios';
import {useEffect, useState} from 'react';

function SymptomDiagnosis({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [valueSymptoms, setValueSymptoms] = useState([]);

  const getSymptom = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://pax-api.ariear.repl.co/symptom');
      setSymptoms(response.data.gejala);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSymptom();
  }, []);

  const handleDiagnose = () => {
    navigation.navigate('ResultDiagnosis', {
      gejalas: {
        gejala1: valueSymptoms[0].title,
        gejala2: valueSymptoms[1].title,
        gejala3: valueSymptoms[2].title,
      },
    });
  };

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.gejala.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Header title="Daftar Gejala" />
      <BtnDiagnose
        handleDiagnose={handleDiagnose}
        valueSymptoms={valueSymptoms}
      />
      <View style={styles.wrap}>
        <InputSearch onSearch={handleSearch} />
        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size="large" color="#F13B82" />
          ) : (
            filteredSymptoms.map(symptom => (
              <CardSymptomDiagnosis
                key={symptom.id}
                title={symptom.gejala}
                valueSymptoms={valueSymptoms}
                setValueSymptoms={setValueSymptoms}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    paddingHorizontal: 18,
    flex: 1,
  },
});

export default SymptomDiagnosis;
