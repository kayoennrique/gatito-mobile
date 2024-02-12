import React from "react";
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import globalSyles, { colors } from '../../styles'
import styles from './styles';

export default function PageDefault({ children }) {
  return <>
    <SafeAreaView style={styles.adjustScreen}>
      <StatusBar backgroundColor={colors.purple} />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={globalSyles.toFillIn}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={styles.adjustScreenLow} />
  </>
}