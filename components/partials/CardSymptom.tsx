import {View, Text, StyleSheet} from 'react-native';

function CardSymptom({title}) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
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
  },
  title: {
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#454545',
    lineHeight: 20,
  },
});

export default CardSymptom;
