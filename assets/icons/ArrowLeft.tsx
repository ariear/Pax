import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function ArrowLeftIcon() {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.07999"
          stroke="white"
          strokeWidth="2.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}
