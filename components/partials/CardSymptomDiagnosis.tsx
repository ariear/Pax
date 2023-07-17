import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function CardSymptomDiagnosis({title, setValueSymptoms, valueSymptoms}) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    const isSymptomSelected = valueSymptoms.some(
      symptom => symptom.title === title,
    );
    const maxAllowedSelections = 3;
    const currentSelections = valueSymptoms.length;

    if (!isSymptomSelected && currentSelections >= maxAllowedSelections) {
      // Jika belum dipilih dan sudah mencapai batas maksimum
      return;
    }

    if (isSymptomSelected) {
      // Jika sudah ada, hilangkan judul dari valueSymptoms
      const updatedSymptoms = valueSymptoms.filter(
        symptom => symptom.title !== title,
      );
      setValueSymptoms(updatedSymptoms);
    } else {
      // Jika belum ada, tambahkan judul ke valueSymptoms
      setValueSymptoms([...valueSymptoms, {title: title}]);
    }

    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.wrap}>
      <BouncyCheckbox
        size={25}
        fillColor="#F13B82"
        unfillColor="#FFFFFF"
        innerIconStyle={{borderWidth: 2, borderRadius: 8}}
        onPress={toggleCheckbox}
        isChecked={isChecked}
        disabled={valueSymptoms.length >= 3 && !isChecked} // Tambahkan prop disabled
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderBottomWidth: 10,
    borderColor: '#F13B82',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center', // Menyelaraskan elemen secara vertikal
  },
  textContainer: {
    flex: 1, // Menggunakan sisa lebar yang tersedia dalam View
    marginLeft: 8, // Memberi jarak antara checkbox dan teks
  },
  title: {
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#454545',
    lineHeight: 20,
  },
});

export default CardSymptomDiagnosis;
