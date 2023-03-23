import React, {useState} from 'react';
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
  Dimensions,
  requireNativeComponent,
} from 'react-native';

import { WebView} from 'react-native-webview';

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

const links = [
  {
    id: 'north-america',
    title: 'North America',
    url: 'https://en.wikipedia.org/wiki/North_America',
  },
  {
    id: 'south-america',
    title: 'South America',
    url: 'https://en.wikipedia.org/wiki/South_America',
  },
  {
    id: 'europe',
    title: 'Europe',
    url: 'https://en.wikipedia.org/wiki/Europe',
  },
  {
    id: 'asia',
    title: 'Asia',
    url: 'https://en.wikipedia.org/wiki/Asia',
  },
  {
    id: 'africa',
    title: 'Africa',
    url: 'https://en.wikipedia.org/wiki/Africa',
  },
  {
    id: 'australia',
    title: 'Australia',
    url: 'https://en.wikipedia.org/wiki/Australia_(continent)',
  },
  {
    id: 'antarctica',
    title: 'Antarctica',
    url: 'https://en.wikipedia.org/wiki/Antarctica',
  },
];


// const Item = ({title, buttonStyle, textStyle}) => (
//   <View>
//     <CustomButton 
//           title={title}
//           onPress={() => Alert.alert(title)}
//           buttonStyle={buttonStyle}
//           textStyle={textStyle}
//           />
//   </View>
// );

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} buttonStyle={item.buttonStyle} textStyle={item.textStyle}/>}
//         keyExtractor={item => item.id}
//       />

//     </SafeAreaView>
//   );
// };

const App = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleButtonPress = (link) => {
    setSelectedLink(link);
  };

  const renderLink = ({ item }) => (
    <CustomButton
      title={item.title}
      onPress={() => handleButtonPress(item)}
      buttonStyle={styles.linkButton}
      textStyle={styles.linkButtonText}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={links}
        renderItem={renderLink}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {selectedLink && (
        <WebView source={{ uri: selectedLink.url }} style={styles.webView} />
      )}
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