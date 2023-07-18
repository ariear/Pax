import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import Header from '../components/partials/Header';
import InputSearch from '../components/partials/InputSearch';
import CardSymptom from '../components/partials/CardSymptom';
import axios from 'axios';

function SymptomList() {
  const [isLoading, setIsLoading] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.gejala.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Header title="Daftar Gejala" />
      <View style={styles.wrap}>
        <InputSearch onSearch={handleSearch} />
        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size="large" color="#F13B82" />
          ) : (
            filteredSymptoms.map(symptom => (
              <CardSymptom key={symptom.id} title={symptom.gejala} />
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

export default SymptomList;
