import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-description">
            안드로이드 기반 모바일 <strong>서비스 기획부터 배포까지 경험한 개발자</strong>입니다.
          </p>
          
          <div className="tech-stack">
            <h3>주요 기술 스택</h3>
            <div className="tech-categories">
              <div className="tech-category">
                <h4>언어 & 프레임워크</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Kotlin</span>
                  <span className="tech-tag">JAVA</span>
                  <span className="tech-tag">Coroutine</span>
                  <span className="tech-tag">Jetpack Compose</span>
                  <span className="tech-tag">Retrofit2</span>
                  <span className="tech-tag">RxJava</span>
                  <span className="tech-tag">SQLite</span>
                  <span className="tech-tag">ROOM</span>
                </div>
              </div>
              <div className="tech-category">
                <h4>분석 & 모니터링</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Google Analytics 4</span>
                  <span className="tech-tag">JavascriptInterface</span>
                  <span className="tech-tag">Crashlytics</span>
                  <span className="tech-tag">Firebase Cloud Messaging</span>
                  <span className="tech-tag">Remote Config</span>
                  <span className="tech-tag">FingerPush</span>
                </div>
              </div>
              <div className="tech-category">
                <h4>아키텍처 패턴</h4>
                <div className="tech-tags">
                  <span className="tech-tag">MVC</span>
                  <span className="tech-tag">MVVM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="work-highlights">
            <h3>주요 경험</h3>
            <div className="highlight-item">
              <h4>메뉴잇 - POS/태블릿 오더 신규 기능 개발 및 유지보수</h4>
              <p>
                주문·결제·주방 프린터 연동 전 과정을 담당하며 <strong>TCP Socket 통신과 SQLite+메시지 큐</strong> 구조로 
                네트워크 불안정 환경에서도 안정적인 주문 처리를 구현했습니다.
              </p>
              <p className="achievement">
                <strong>실제 매장 운영에서 주문 누락률 2% → 0%로 감소</strong>, 
                <strong>결제 처리 속도 30% 단축</strong>을 달성했습니다.
              </p>
            </div>
            
            <div className="highlight-item">
              <h4>대형 이커머스 하이브리드 앱 유지보수 (뉴발란스, 애슐리, 발란 등)</h4>
              <p>
                GA4 기반 트래킹과 Hybrid-Native 브릿지 최적화를 통해 
                <strong> 사용자 이벤트 수집 정확도 20% 향상, 앱 크래시율 15% 감소</strong> 기여했습니다.
              </p>
            </div>
            
            <div className="highlight-item">
              <h4>FILA ERP 네이티브 앱 개발</h4>
              <p>신규 프로젝트 개발 투입되어 기획자/IOS/디자이너/서버 커뮤니케이션 역량을 길렀습니다.</p>
              <p>
                API 체인 호출 문제를 <strong>MVVM+Coroutine 구조로 응답 속도를 40% 개선</strong>, 
                <strong>유지보수성</strong>을 높였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

