import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { name: '정보처리기사', date: '2025.09' },
    { name: 'SQL 개발자', date: '2025.09' },
    { name: '코딩지도사 1급', date: '2023.06' },
    { name: '컴퓨터활용능력 2급', date: '2021.05' },
    { name: '전자기기기능사', date: '2013.07' },
    { name: '전자캐드기능사', date: '2012.06' }
  ];

  return (
    <section className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

