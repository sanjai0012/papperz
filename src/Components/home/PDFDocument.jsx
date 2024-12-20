import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 5,
    padding: 5,
    flex: 1,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 10,
    marginBottom: 8,
    lineHeight: 1.4,
  },
  image: {
    width: '60%',
    marginHorizontal: 'auto',
    marginVertical: 10,
  },
  list: {
    marginLeft: 15,
    marginTop: 5,
  },
  listItem: {
    fontSize: 10,
    marginBottom: 5,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const PDFDocument = ({ imageUrl }) => (
  <Document>
    <Page size="A5" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Modern Web Development</Text>
        <Text style={styles.subtitle}>Frontend Technologies</Text>
        <Text style={styles.text}>
          Modern frontend technologies play a crucial role in creating responsive and user-friendly applications. 
          React enables developers to build efficient and maintainable user interfaces.
        </Text>
        <Image style={styles.image} src={imageUrl} />
        <Text style={styles.text}>
          Key aspects include component-based architecture, state management, and responsive design principles. 
          These elements create seamless user experiences across different devices.
        </Text>
        <Text style={styles.pageNumber}>1</Text>
      </View>
    </Page>

    <Page size="A5" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Development Best Practices</Text>
        <Text style={styles.subtitle}>Building Scalable Applications</Text>
        <Text style={styles.text}>
          Following best practices is crucial for maintaining code quality and ensuring scalability. 
          This includes proper component structure and efficient state management.
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Component Reusability</Text>
          <Text style={styles.listItem}>• State Management Patterns</Text>
          <Text style={styles.listItem}>• Performance Optimization</Text>
          <Text style={styles.listItem}>• Responsive Design</Text>
        </View>
        <Text style={styles.text}>
          These practices help create maintainable applications that provide excellent user experiences 
          while being easy to update over time.
        </Text>
        <Text style={styles.pageNumber}>2</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
