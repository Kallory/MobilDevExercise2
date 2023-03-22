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
  TouchableOpacity,
} from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[buttonStyle, styles.button]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};


// JSON object
const DATA = [
  {
    id: 'button1',
    title: 'First Button',
    buttonStyle: {
      backgroundColor: '#f9c2ff',
      borderRadius: 30,         
  },
    textStyle: {
      color: '#FFFFFF',  
    }
  },
  {
    id: 'button2',
    title: 'Second Button',
    buttonStyle: { 
      backgroundColor:'#324ca8',
      borderColor: "#000000",
      borderStyle: "solid",
      borderWidth: 5
    },
    textStyle: {
      color: '#bd4500',  
    }
  },
  {
    id: 'button3',
    title: 'Third Button',
    buttonStyle: { 
      backgroundColor:'#820007' 
    },
    textStyle: {
      color: '#00bd4b',  
    }
  },
  {
    id: 'button4',
    title: 'Fourth Button',
    buttonStyle: { 
      backgroundColor: '#000000'
    },
    textStyle: {
      color: '#FFFFFF',  
    }
  },
  {
    id: 'button5',
    title: 'Fifth Button',
    buttonStyle: { 
      backgroundColor: '#00bdb0'
    },
    textStyle: {
      color: '#4b5958',  
    }
  },
  {
    id: 'button6',
    title: 'Sixth Button',
    buttonStyle: { 
      backgroundColor: '#e000f5'
    },
    textStyle: {
      color: '#eac2ed',  
    }
  },
  {
    id: 'button7',
    title: 'Seventh Button',
    buttonStyle: { 
      backgroundColor: '#eeff00'
    },
    textStyle: {
      color: '#0022ff',  
    }
  }
];

const Item = ({title, buttonStyle, textStyle}) => (
  <View>
    {/* <Text style={styles.title}>{title}</Text> */}
    <CustomButton 
          title={title}
          onPress={() => Alert.alert(title)}
          buttonStyle={buttonStyle}
          textStyle={textStyle}
          />
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} buttonStyle={item.buttonStyle} textStyle={item.textStyle}/>}
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
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 16,
  },
  button: {
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 16,
  },
  buttonText : {
    fontSize: 32,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
  },
});


export default App;