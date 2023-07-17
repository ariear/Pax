import {View, Pressable, Text, StyleSheet} from 'react-native';
import GithubIcon from '../../assets/icons/GithubIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';

function Btn({title, bgColor, titleColor, icon, onPress}) {
  return (
    <View>
      <Pressable
        style={[styles.btn, {backgroundColor: bgColor}]}
        android_ripple={{color: '#FFFFFF60', foreground: true}}
        onPress={onPress}>
        {icon === 'facebook' && <FacebookIcon />}
        {icon === 'github' && <GithubIcon />}
        <Text
          style={[
            styles.titleBtn,
            {
              color: titleColor,
            },
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'baseline',
    paddingHorizontal: 26,
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBtn: {
    marginLeft: 12,
    fontFamily: 'PlusJakartaSans-Medium',
  },
});

export default Btn;
