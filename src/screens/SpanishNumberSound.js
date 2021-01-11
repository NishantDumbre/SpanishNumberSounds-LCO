import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

import styles from '../config/styles';

const soundList = [
  require('../assets/one.wav'),
  require('../assets/two.wav'),
  require('../assets/three.wav'),
  require('../assets/four.wav'),
  require('../assets/five.wav'),
  require('../assets/six.wav'),
  require('../assets/seven.wav'),
  require('../assets/eight.wav'),
  require('../assets/nine.wav'),
  require('../assets/ten.wav'),
];

class SpanishNumberSound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('Cannot play sound');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 200);

    soundVar.release();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.text}>Press a button to play a sound</Text>
        <View style={styles.gridContainer}>
          {soundList.map((sound) => (
            <TouchableOpacity
              onPress={() => this.playSound(sound)}
              key={sound}
              style={styles.box}>
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default SpanishNumberSound;
