import React from "react";
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import globalSyles from '../../styles'

export default function PageDefault({ children }) {
  return <SafeAreaView style={globalSyles.toFillIn}>
    <StatusBar />
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={globalSyles.toFillIn}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
}