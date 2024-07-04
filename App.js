import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from './src/styles/structure';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppLoader from './src/components/AppLoader';

export default function App({ navigation }) {
  return (
    <Provider store={store}>
      <AppLoader />
      <NavigationContainer>
        <View style={styles.container}>
          <LoginScreen />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

