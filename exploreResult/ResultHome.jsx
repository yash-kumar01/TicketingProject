import * as React from 'react';
import { useState,useContext,createContext } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../navStyles/resultStyles';
import data from '../DataBase/result.json'; // Import JSON file
import  TicketDetails  from './TicketDetails';

export const ResultHomeContext = createContext();
// Basic reusable components
const Heading = (props) => (
    <Text style={styles.heading}>
      {props.children}
    </Text>
  );
  
  
// Ticket Item Component
const SingleTicket = ({ ticket, onPress }) => (
    <TouchableOpacity onPress={() => onPress(ticket)}>
      <View style={styles.layout}>
        <Image style={styles.image} source={{ uri: ticket.metadata.image_url }} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{ticket.metadata.event}</Text>
            <Text style={styles.date}>{ticket.metadata.date}</Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
            {ticket.metadata.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
);

// HomeScreen Component
const HomeScreen = ({ onSelectTicket }) => (
  <View>
    <ScrollView>
      <Heading>Tickets Result</Heading>
      {data.tickets.map(ticket => (
        <SingleTicket
          key={ticket.ASAID}
          ticket={ticket}
          onPress={onSelectTicket}
        />
      ))}
    </ScrollView>
  </View>
);

// Main Result Component
const ResultHome = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBack = () => {
    setSelectedTicket(null);
  };
  const handleBuy = () => {
    setSelectedTicket(null);
  };

  return (
    <ResultHomeContext.Provider value={{selectedTicket,handleBack,handleBuy}}>
    <SafeAreaView style={{ flex: 1}}>
      {selectedTicket ? (
        <TicketDetails  />
      ) : (
        <HomeScreen onSelectTicket={handleSelectTicket} />
      )}
    </SafeAreaView>
    </ResultHomeContext.Provider>
  );
};

export default ResultHome;




