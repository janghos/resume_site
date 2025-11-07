import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      school: '인하대학교',
      period: '2020.03 - 2026.02',
      major: '소프트웨어융합공학과',
      degree: '학사'
    },
    {
      school: '인천전자마이스터고등학교',
      period: '2011.03 - 2014.02',
      major: '전자제어과',
      degree: '졸업'
    }
  ];

  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 className="education-school">{edu.school}</h3>
              <p className="education-major">{edu.major}</p>
              <p className="education-period">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

