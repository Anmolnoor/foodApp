import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SearchScreen = () => <View>
  <Text styles={styles.search}> This is SearchScreen</Text>
</View>;
const styles = StyleSheet.create({
search: {
  fontSize: 24,
}
});

export default SearchScreen;