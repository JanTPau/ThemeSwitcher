import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/useTheme'
import Styles from '../Styles';

export default function HomeScreen() {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});