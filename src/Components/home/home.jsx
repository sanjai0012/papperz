import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import Image from '../../assets/image.png';
import './home.css';

const Home = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleViewPDF = () => {
    setShowPDF(true);
    setTimeout(() => {
      document.getElementById('pdf-viewer').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="home-container">
      <div className="pdf-section">
        <h1>Pdf Generation Task</h1>
        <div className="buttons">
          <button className="view-btn" onClick={handleViewPDF}>
            View PDF
          </button>
        </div>

        {showPDF && (
          <div id="pdf-viewer" className="pdf-viewer">
            <PDFViewer style={{ width: '100%', height: '500px' }}>
              <PDFDocument imageUrl={Image} />
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;