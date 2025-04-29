import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //Screen Texts
    layout: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    screenHeader: {  
        color: '#0ff', // Neon cyan text
        fontSize: 60,
        fontWeight: 'bold', 
        marginTop:5,
        padding:15,
        justifyContent: 'center',
        textAlign: 'center',
    },
    homescreenHeader: {  
        color: '#0ff', // Neon cyan text
        fontSize: 20,
        fontWeight: 'bold', 
        // marginTop:5,
        // padding:1,
        justifyContent: 'center',
        textAlign: 'center',
    },

    //normal large texts 
    title: {  
        color: '#0ff', // Neon cyan text
        fontSize: 30,
        fontWeight: 'bold', 
        marginTop:5,
        padding:10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleMetrics: {  
        color: '#0ff', // Neon cyan text
        fontSize: 30,
        fontWeight: 'bold', 
        marginTop:5,
        padding:0,
        justifyContent: 'center',
        textAlign: 'center',
    },

    //CreateScreen
    createContainer: {
        flex: 1,
        backgroundColor: '#121212', // Dark background
        padding: 10,
    },
    
    //Date Picker
    dateText: {
        color: '#0ff', // Neon cyan text
        fontSize: 30,
        fontWeight: 'bold', 
        padding:10,
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#18FFFF', // Techy cyan color
        borderRadius: 8,
        backgroundColor: '#1A1A1A', // Dark modern background
        shadowColor: '#000', // Soft shadow
        margin: 20,
      },

    //CategoryPicker
    categoryPicker: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#18FFFF', // Techy cyan color
    borderRadius: 8,
    backgroundColor: '#1A1A1A', // Dark modern background
    shadowColor: '#000', // Soft shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
    },
    // //eventPicker
    // eventPicker: {
    //     margin: 20,
    //     fontSize: 16,
    //     fontWeight:'bold',
    //     paddingHorizontal: 10,
    //     paddingVertical: 8,
    //     borderWidth: 0.5,
    //     borderColor: '#18FFFF',
    //     borderRadius: 8,
    //     color: '#18FFFF',
    //     paddingRight: 30 // to ensure the text is never behind the icon
    // },
    //eventPicker
    eventPicker: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#18FFFF', // Techy cyan color
        borderRadius: 8,
        backgroundColor: '#1A1A1A', // Dark modern background
        shadowColor: '#000', // Soft shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 50, // For Android shadow
    },
    pickerInput: {
        color: '#18FFFF', // Text color
        fontSize: 18,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontWeight: 'bold',
    },
    pickerIcon: {
        color: '#18FFFF', // Icon color
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10,
    },
    
    //FORMS
    formInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '18FFFF',
        padding: 10,
        color: 'white',
      },
    
    placePicker: {
        flex: 1, // Equal width for each picker
        alignItems: 'center', // Align vertically centered
        marginHorizontal: 5, // Space between pickers
        borderWidth: 1,
        borderColor: '#18FFFF', // Techy cyan color
        borderRadius: 8,
        backgroundColor: '#1A1A1A', // Dark modern background
        shadowColor: '#000', // Soft shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4, // For Android shadow
    },

    // Styles for the row of pickers
    pickerRow: {
        flexDirection: 'row', // Align items in a row
        justifyContent: 'space-between', // Space between each picker
        alignItems: 'center', // Align vertically centered
        margin: 15,
        
    },

  // Main Containers
  container: {
    flex: 1,
    // backgroundColor: '#1a1a1a', // gray background
    backgroundColor: '#121212', // Dark background
    // padding: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // backgroundColor: '#1a1a1a', // gray for main content
    backgroundColor: '#181818', // Dark navbar
    padding: 12,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    // backgroundColor: '#1a1a1a', // gray shade for screens
    backgroundColor: '#121212', // Darker shade for screens
    padding: 10,
  },

  // Navbar
  navBar: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#181818', // Dark navbar
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#0ff', // Neon cyan text
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#0a0a0a', // Darker active tab
    borderBottomWidth: 2,
    borderBottomColor: '#0ff', // Neon cyan highlight
  },

  // Ticket List
  ticketListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212', // Dark theme
  },
  ticketListHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0ff', // Neon cyan
    textAlign: 'center',
    marginVertical: 20,
  },

  // Ticket List Item
  ticketItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222', // Dark item background
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#0ff', // Neon glow effect
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  ticketName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0ff', // Neon cyan text
    marginBottom: 5,
  },
  ticketNameMetrics: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0ff', // Neon cyan text
    marginBottom: 5,
  },
  ticketMetrics: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0ff', // Neon cyan text
    marginBottom: 5,
    padding: 24,
  },
  ticketName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0ff', // Neon cyan text
    marginBottom: 5,
  },
  ticketPrice: {
    fontSize: 16,
    color: '#bbb', // Subtle gray text
  },

  // Buttons
  button: {
    backgroundColor: '#0ff', // Neon cyan button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#0ff',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // BuyDetails
  buyDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  buyDetailsHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0ff',
  },
  buyDetailsDescription: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#bbb',
    textAlign: 'center',
  },
  emojiImage: {
    width: 240, // Adjust size as needed
    height: 240, // Adjust size as needed
    alignSelf: 'center', // Center horizontally
    marginBottom: 1, // Space between image and text
  },
  homeImg: {
    width: 190, // Adjust size as needed
    height: 190, // Adjust size as needed
    alignSelf: 'center', // Center horizontally
    marginBottom: 1, // Space between image and text
  },
  algoImg: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    alignSelf: 'center', // Center horizontally
    marginBottom: 1, // Space between image and text
  },
  border: {
    borderWidth: 2,
    borderColor: 'cyan',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#0a0a0a', // Optional: dark background if your theme is dark
    shadowColor: '#00ffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  
});
