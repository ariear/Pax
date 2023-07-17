import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

function CardMenu({logo, title, to}) {
  const navigation = useNavigation();

  const logos = [
    require('../../assets/logos/listmedic.png'),
    require('../../assets/logos/stetoskop.png'),
    require('../../assets/logos/ramuan.png'),
    require('../../assets/logos/doktah.png'),
  ];

  return (
    <View style={styles.wrapRound}>
      <Pressable
        android_ripple={{color: '#FC73A9', foreground: true}}
        style={styles.wrap}
        onPress={() => navigation.navigate(to)}>
        <Image
          source={logos[logo]}
          width={100}
          height={100}
          style={styles.logo}
        />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapRound: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: '46%',
    overflow: 'hidden',
    marginBottom: 22,
  },
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 12,
    borderColor: '#F13B82',
  },
  logo: {
    marginBottom: 12,
  },
  title: {
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#454545',
  },
});

export default CardMenu;
