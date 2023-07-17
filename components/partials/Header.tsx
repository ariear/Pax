import {View, Text, StyleSheet, Pressable} from 'react-native';
import ArrowLeftIcon from '../../assets/icons/ArrowLeft';
import {useNavigation} from '@react-navigation/native';

function Header({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.wrap}>
      <Pressable
        android_ripple={{
          color: '#FFFFFF60',
          foreground: true,
          borderless: true,
        }}
        style={{padding: 3}}
        onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 18,
    paddingVertical: 24,
    backgroundColor: '#F13B82',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    marginLeft: 18,
  },
});

export default Header;
