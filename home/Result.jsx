// NOT IN USE

// import * as React from 'react';
// import { useState,useContext } from 'react';
// import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
// import styles from '../navStyles/resultStyles';
// import data from '../DataBase/result.json'; // Import JSON file
// import { HomeData } from '../navigation/HomeScreen'
// // Basic reusable components
// const Heading = (props) => (
//   <Text style={styles.heading}>
//     {props.children}
//   </Text>
// );

// // Ticket Item Component
// const SingleTicket = ({ ticket, onPress }) => (
//   <TouchableOpacity onPress={() => onPress(ticket)}>
//     <View style={styles.layout}>
//       <Image style={styles.image} source={{ uri: ticket.metadata.image_url }} />
//       <View style={styles.content}>
//         <View style={styles.header}>
//           <Text style={styles.title}>{ticket.metadata.event}</Text>
//           <Text style={styles.date}>{ticket.metadata.date}</Text>
//         </View>
//         <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
//           {ticket.metadata.description}
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// // HomeScreen Component
// const HomeScreen = ({ onSelectTicket }) => (
//   <View>
//     <ScrollView>
//       <Heading>Tickets Result</Heading>
//       {data.tickets.map(ticket => (
//         <SingleTicket
//           key={ticket.ASAID}
//           ticket={ticket}
//           onPress={onSelectTicket}
//         />
//       ))}
//     </ScrollView>
//   </View>
// );

// // Ticket Details Screen
// const TicketDetails = ({ ticket, onBack, onBuy }) => (
//   <View>
//     <View style={styles.layout}>
//       <Image style={styles.image} source={{ uri: ticket.metadata.image_url }} />
//       <View style={styles.content}>
//         <Text style={styles.title}>{ticket.metadata.event}</Text>
//         <Text style={styles.date}>{ticket.metadata.date}</Text>
//         <Text style={styles.description}>{ticket.metadata.description}</Text>
//         <Text style={styles.date}>Location: {ticket.metadata.location}</Text>
//         <Text style={styles.date}>Time: {ticket.metadata.time}</Text>
//         <Text style={styles.date}>Seat: {ticket.metadata.seat}</Text>
//       </View>
//     </View>
//     <TouchableOpacity style={styles.button} onPress={onBuy}>
//       <Text style={styles.buttonText}>BUY</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.button} onPress={onBack}>
//       <Text style={styles.buttonText}>BACK</Text>
//     </TouchableOpacity>
//   </View>
// );

// // Main Result Component
// const Result = () => {
//   const [selectedTicket, setSelectedTicket] = useState(null);

//   const handleSelectTicket = (ticket) => {
//     setSelectedTicket(ticket);
//   };

//   const handleBack = () => {
//     setSelectedTicket(null);
//   };
//   const handleBuy = () => {
//     setSelectedTicket(null);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1}}>
//       {selectedTicket ? (
//         <TicketDetails ticket={selectedTicket} onBack={handleBack} onBuy={handleBuy} />
//       ) : (
//         <HomeScreen onSelectTicket={handleSelectTicket} />
//       )}
//     </SafeAreaView>
//   );
// };

// export default Result;

