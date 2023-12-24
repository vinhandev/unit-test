import { checkEven } from '@/utils/common';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{`Count: ${count}`}</Text>
      <Text testID='status'>{checkEven(count) ? 'Even' : 'Odd'}</Text>
      <Text testID='status'>{checkEven(count) ? 'Even' : 'Odd'}</Text>
      <Button
        testID="button"
        color={'blue'}
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
