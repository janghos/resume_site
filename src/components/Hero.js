import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-name">서장호</h1>
        <h2 className="hero-title">
          ANDROID DEVELOPER,<br />
          MOBILE APP DEVELOPER, &<br />
          FULL-STACK DEVELOPER
        </h2>
        <p className="hero-subtitle">
          안드로이드 기반 모바일 서비스 기획부터 배포까지 경험한 개발자
        </p>
      </div>
    </section>
  );
};

export default Hero;

