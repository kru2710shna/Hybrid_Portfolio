import React from 'react';
import './Certificate.css';

const CertificateDetail = ({ certificate }) => {
  return (
    <div className="card">
      <img src={certificate.image} alt="Certificate" className="certificate-image" />
      <div className="card-body">
        <h5 className="card-title">{certificate.name}</h5>
        <p className="card-text"><strong>Organization:</strong> {certificate.organization}</p>
        <p className="card-text"><strong>Date:</strong> {certificate.date}</p>
        <p className="card-text">{certificate.description}</p>
        <a href={certificate.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
      </div>
    </div>
  );
}

export default CertificateDetail;
