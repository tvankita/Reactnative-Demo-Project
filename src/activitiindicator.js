import React, {useState} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';

export class Spinner extends Spinner {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>       
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="0000ff" />
        <ActivityIndicator size="large" color="00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

// import  Slider from '@react-native-community/slider';

// const App = () => {
//   const [sliderValue, setSliderValue] = useState(15);
//   return (
//     <SafeAreaView style={{flex: 1}}>
//         <View style={styles.container}>
//           <Text style={{color: 'black'}}>
//             Value of Slider is : {sliderValue}
//            </Text>
//           <Slider
//           maximumValue={100}
//           minimumValue={0}
//           minimumTrackTintColor="307ecc"
//           maximumTrackTintColor="000000"
//           step={1}
//           value={sliderValue}
//           onValueChange={
//             (sliderValue) => setSliderValue(sliderValue)
//           }
//           />
//         </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//       justifyContent: 'center',
//       backgroundColor: 'ecf0f1',
//     },
//   });

//   export default Slider;
