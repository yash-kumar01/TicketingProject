import React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import styles from '../navStyles/styles';

const CreateScreen = ({ setCurrentScreen }) => {
    const createEvent =()=> {
        console.log("Create Event pressed");
        setCurrentScreen('event');
    }
    const createTicket =()=> {
        console.log("Create Ticket pressed");
        setCurrentScreen('ticket');
    }

    return(
    <View style={styles.layout}>
      <Image source={require('../assets/robot.png')}
      style={styles.emojiImage}
      ></Image>
        <Text style={styles.title}>CREATE NEW</Text>
        <View >
        <TouchableOpacity
          style={styles.button}
          onPress={createEvent}
        >
          <Text style={styles.buttonText}>E V E N T</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={createTicket}
        >
          <Text style={styles.buttonText}>T I C K E T</Text>
        </TouchableOpacity>

        </View>

    </View>

    );
};

export default CreateScreen;
