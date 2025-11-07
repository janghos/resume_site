import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: '안드로이드 개발자',
      company: '메뉴잇',
      period: '2024.03 ~ 현재',
      location: '식당/카페 테이블오더 앱 개발 회사',
      description: '외부 POS 연동 및 자체 POS-메뉴보드 APP 개발 및 유지보수. 주문·결제·주방 프린터 연동 전 과정 담당 (TCP Socket 기반 통신). 분할 결제, 옵션 구성, 자동 품절 초기화 등 매장 운영 핵심 기능 구현. SQLite + 메시지 큐 기반 안정적 데이터 저장/재전송 로직 설계.',
      achievements: [
        '주문 누락률 2% → 0%로 감소',
        '결제 처리 속도 30% 단축',
        '분할결제 기능 개선으로 VOC 문제 100% 해결',
        '프린터 출력 실패 자동 재출력 기능 구현',
        '해외 결제 현지화 (미국 팁·세금 대응)',
        'UI/UX 리뉴얼 및 다크 테마 적용',
        '다국어(Localization) 지원 개선'
      ],
      skills: ['Kotlin', 'Java', 'SQLite', 'Retrofit2', 'Coroutine', 'TCP Socket', 'MVVM', 'Material Design']
    },
    {
      title: '안드로이드 개발자',
      company: '라드씨엔에스',
      period: '2022.10 ~ 2024.02',
      location: '웹/앱 에이전시 회사',
      description: '뉴발란스, FILA ERP, 애슐리, 발란 APP 개발 및 유지보수 참여. 쇼핑·브랜드 앱 유지보수 및 신규 기능 개발 (결제, 회원·리뷰 관리 등). 기획·디자인 협업을 통한 앱 UI/UX 개선.',
      achievements: [
        'GA4 기반 트래킹으로 사용자 이벤트 수집 정확도 20% 향상',
        '앱 크래시율 15% 감소',
        'FILA ERP 앱 신규 개발 (MVVM+Coroutine 구조로 응답 속도 40% 개선)',
        '뉴발란스 GA4 태깅 구축',
        '뉴발란스 인스토어(In-Store) 기능 구현 (BLE Beacon 활용)'
      ],
      skills: ['Kotlin', 'Java', 'MVVM', 'Coroutine', 'Retrofit2', 'Room', 'Firebase', 'GA4', 'BLE', 'Beacon']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-location-desc">{exp.location}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="experience-achievements">
                  <h4>주요 성과</h4>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="experience-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
