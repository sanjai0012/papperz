import React, { useState } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Image1 from '../../assets/images.jpg';
import './home.css';

// PDF styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
    color: '#2c3e50',
  },
  text: {
    fontSize: 12,
    marginBottom: 15,
    lineHeight: 1.6,
    color: '#555',
  },
  image: {
    width: '80%',
    marginHorizontal: 'auto',
    marginVertical: 20,
  },
  list: {
    marginLeft: 20,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 10,
    color: '#555',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const Home = () => {
  const [showPDF, setShowPDF] = useState(false);

  // Content that will be used in both webpage and PDF
  const content = {
    title: "Modern Web Development",
    section1: {
      title: "Frontend Technologies",
      text1: "In the ever-evolving landscape of web development, modern frontend technologies play a crucial role in creating responsive and user-friendly applications. React, being one of the most popular frameworks, enables developers to build efficient and maintainable user interfaces.",
      text2: "Key aspects of modern frontend development include component-based architecture, state management, and responsive design principles. These elements work together to create seamless user experiences across different devices and platforms."
    },
    section2: {
      title: "Development Best Practices",
      intro: "When developing modern web applications, following best practices is crucial for maintaining code quality and ensuring scalability.",
      listItems: [
        "Component Reusability",
        "State Management Patterns",
        "Performance Optimization",
        "Responsive Design"
      ],
      conclusion: "These practices help create maintainable applications that provide excellent user experiences while being easy to update over time."
    }
  };

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.subtitle}>{content.section1.title}</Text>
          <Text style={styles.text}>{content.section1.text1}</Text>
          <Image style={styles.image} src={Image1} />
          <Text style={styles.text}>{content.section1.text2}</Text>
          <Text style={styles.pageNumber}>1</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>{content.section2.title}</Text>
          <Text style={styles.text}>{content.section2.intro}</Text>
          <View style={styles.list}>
            {content.section2.listItems.map((item, index) => (
              <Text key={index} style={styles.listItem}>• {item}</Text>
            ))}
          </View>
          <Text style={styles.text}>{content.section2.conclusion}</Text>
          <Text style={styles.pageNumber}>2</Text>
        </View>
      </Page>
    </Document>
  );

  const handleViewPDF = () => {
    setShowPDF(true);
    setTimeout(() => {
      document.getElementById('pdf-viewer').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="home-container">
      <div className="content-section">
        <h1>{content.title}</h1>
        <div className="content-wrapper">
          <div className="text-section">
            <h2>{content.section1.title}</h2>
            <p>{content.section1.text1}</p>
            <div className="image-container">
              <img src={Image1} alt="Development" className="content-image" />
            </div>
            <p>{content.section1.text2}</p>
          </div>
          <div className="features-section">
            <h2>{content.section2.title}</h2>
            <p>{content.section2.intro}</p>
            <ul>
              {content.section2.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{content.section2.conclusion}</p>
          </div>
        </div>
      </div>

      <div className="pdf-section">
        <div className="buttons">
          <button className="view-btn" onClick={handleViewPDF}>
            Generate PDF
          </button>
        </div>

        {showPDF && (
          <div id="pdf-viewer" className="pdf-viewer">
            <PDFViewer style={{ width: '100%', height: '500px' }}>
              <MyDocument />
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;