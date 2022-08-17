/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import Animated, {useAnimatedRef} from 'react-native-reanimated';

const AnimatedList = Animated.createAnimatedComponent(FlatList);

const App = () => {
  const listRef = useAnimatedRef();
  const isDarkMode = useColorScheme() === 'dark';

  // logs for the test running
  console.log('log of the AnimatedList component: ', AnimatedList);
  console.log(
    'log of the createAnimatedComponent mock: ',
    Animated.createAnimatedComponent,
  );
  // end of logs for the test running

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = useCallback(({_, index}: {_: number; index: number}) => {
    return (
      <View key={index} testID={`item-${index}`} style={styles.item}>
        <Text style={styles.text}>{`Item number ${index}`}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.wrapper}>
        <AnimatedList
          ref={listRef}
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
  },
  item: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: '#00f',
    borderRadius: 4,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  text: {
    color: '#fff',
  },
});

export default App;
