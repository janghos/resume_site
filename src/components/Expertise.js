import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const expertiseItems = [
    {
      title: 'Android Development',
      description: 'Kotlin, Java를 활용한 네이티브 안드로이드 앱 개발. Coroutine, Jetpack Compose, MVVM 아키텍처, Retrofit2, Room DB 등 최신 안드로이드 기술 스택에 능숙합니다.',
      skills: ['Kotlin', 'Java', 'Coroutine', 'Jetpack Compose', 'MVVM', 'Retrofit2', 'Room', 'SQLite']
    },
    {
      title: 'Mobile UI/UX',
      description: 'Material Design 가이드라인 준수, 다크 테마 구현, 커스텀 컴포넌트 개발. 사용자 경험 개선과 성능 최적화에 중점을 둡니다.',
      skills: ['Material Design', 'Dark Theme', 'Custom Components', 'UI/UX Design', 'ViewBinding']
    },
    {
      title: 'Backend & API',
      description: 'Spring Boot 기초 경험, RESTful API 설계 및 연동. Firebase 서비스 통합, Google Analytics 4 태깅, OAuth 인증 구현 경험이 있습니다.',
      skills: ['Spring Boot', 'RESTful API', 'Firebase', 'GA4', 'OAuth', 'MySQL', 'SQLite']
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="expertise-grid">
          {expertiseItems.map((item, index) => (
            <div key={index} className="expertise-card">
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-description">{item.description}</p>
              <div className="expertise-skills">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="quote">
          <p>안드로이드 개발을 중심으로, 모바일 UI/UX부터 백엔드 API까지<br />다방면의 기술을 경험한 모바일 개발자입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
