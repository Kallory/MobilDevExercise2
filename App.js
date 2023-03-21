import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  StyleSheet,
  Text,
  StatusBar,
  Alert,
} from 'react-native';


// JSON object
const DATA = [
  {
    id: 'button1',
    title: 'First Button',
  },
  {
    id: 'button2',
    title: 'Second Button',
  },
  {
    id: 'button3',
    title: 'Third Button',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button 
          title={title}
          onPress={() => Alert.alert(title)}
          />
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({button}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;