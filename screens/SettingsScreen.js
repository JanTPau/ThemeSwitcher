import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { useTheme } from '../context/useTheme'
import Styles from '../Styles';

export default function SettingsScreen() {
  const { isDarkMode } = useTheme()
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton />
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