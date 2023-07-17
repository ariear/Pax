import {Pressable, Text, View, StyleSheet} from 'react-native';

export default function BtnDiagnose({handleDiagnose, valueSymptoms}) {
  return (
    <View style={styles.wrap}>
      <Pressable
        style={styles.btn}
        android_ripple={{
          color: '#FFFFFF60',
          foreground: true,
        }}
        onPress={handleDiagnose}
        disabled={valueSymptoms.length === 3 ? false : true}>
        <Text style={styles.titleBtn}>
          {valueSymptoms.length === 3
            ? 'Diagnosa'
            : `${valueSymptoms.length} Gejala Dipilih`}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    zIndex: 10,
    position: 'absolute',
    bottom: 28,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#F13B82',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomWidth: 9,
    borderBottomColor: '#F13B8275',
  },
  titleBtn: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans-Bold',
  },
});
