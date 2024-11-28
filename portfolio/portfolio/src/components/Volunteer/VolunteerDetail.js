import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VolunteerDetail.css';

const VolunteerDetail = ({ logo, title, organization, description, link }) => {
  return (
    <div className="card text-center volunteer-card">
      <div className="card-header">
        <img src={logo} alt={`${title} logo`} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6>{organization}</h6>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default VolunteerDetail;
