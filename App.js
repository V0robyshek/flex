import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar } from './scr/NavBar';
import {AddTodo } from './scr/AddTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar title = 'Линейная функция' />
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});