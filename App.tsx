import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import Home from './screens/Home';
import AboutApp from './screens/AboutApp';
import InfoDev from './screens/InfoDev';
import SymptomList from './screens/SymptomList';
import SymptomDiagnosis from './screens/SymptomDiagnosis';
import ResultDiagnosis from './screens/ResultDiagnosis';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SymptomList" component={SymptomList} />
        <Stack.Screen name="SymptomDiagnosis" component={SymptomDiagnosis} />
        <Stack.Screen name="ResultDiagnosis" component={ResultDiagnosis} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="InfoDev" component={InfoDev} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
