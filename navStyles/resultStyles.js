// resultStyles.js
import { StyleSheet } from 'react-native';

const resultStyles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    color: '#0ff',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#bbb',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0ff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
  layout: {
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  emojiImage: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    alignSelf: 'center', // Center horizontally
    marginBottom: 1, // Space between image and text
  },
});

export default resultStyles;
