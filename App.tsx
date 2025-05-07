import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  let envMessage = '';
  let backgroundColor = '';

  switch (Config.APP_ENV) {
    case 'development':
      envMessage = 'Congratulations you are running on dev';
      backgroundColor = 'green';
      break;
    case 'staging':
      envMessage = 'This app is running on staging environment';
      backgroundColor = 'blue';
      break;
    case 'production':
      envMessage = 'Hurray this app is live and you are on production environment';
      backgroundColor = 'purple'; 
      break;
    default:
      envMessage = `Unknown environment: ${Config.APP_ENV}`;
      backgroundColor = 'gray';
  }

  const backgroundStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <View style={styles.content}>
        <Text style={styles.envText}>{envMessage}</Text>
        <Text style={styles.infoText}>ENV = {Config.APP_ENV}</Text>
        <Text style={styles.infoText}>API = {Config.API_URL}</Text>
        <Text style={styles.infoText}>App Name = {Config.APP_NAME}</Text>
        <Text style={styles.infoText}>Version = {Config.APP_VERSION}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  envText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
});

export default App;