import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: '메뉴잇',
      company: 'Android Developer',
      period: '2024.03 ~ 현재',
      location: '식당/카페 테이블오더 앱 개발 회사',
      description: '외부 POS 연동 및 자체 POS-메뉴보드 APP 개발 및 유지보수. 주문·결제·주방 프린터 연동 전 과정 담당 (TCP Socket 기반 통신). 분할 결제, 옵션 구성, 자동 품절 초기화 등 매장 운영 핵심 기능 구현. SQLite + 메시지 큐 기반 안정적 데이터 저장/재전송 로직 설계.',
      features: [
        {
          title: 'KDS 다중 스테이션 독립 완료 처리 및 실시간 동기화 시스템 기획 · 구현',
          items: [
            '단일 완료 주체에 의존하던 구조를 스테이션별 독립 완료 흐름으로 재설계, 각 기기가 담당 메뉴만 처리하는 분산 워크플로우 기획 및 partial_complete_cook TCP 커맨드 신설로 전체 KDS 간 실시간 상태 동기화 구현',
            '서버 영속 상태(주문 완료 확정)와 기기 간 메모리 동기화 상태(개별 메뉴 진행)를 분리 설계하여 백엔드 변경 없이 기능 구현, POS가 알아야 할 정보와 KDS가 알아야 할 정보를 명확히 구분',
            '"이 스테이션에서 마지막 = 전체 완료"가 아님을 정의하고, 모든 기기의 전체 메뉴 완료 시점에만 공식 완료가 확정되는 합산 완료 로직 설계 및 구현',
            '필터 KDS 되돌리기 시 타 스테이션 완료 상태를 보존하면서 서버 상태까지 복구하는 부분 복구 시나리오를 cancel_complete_cook → partial_complete_cook 2단계 조합으로 설계 · 구현',
            '강한 알림 대신 헤더 색상 3단계(정상·경고·완료) 경과시간 경고 UX 기획 및 20초 주기 타이머 기반 클라이언트 사이드 갱신으로 구현',
          ]
        },
        {
          title: '장애인 접근성 시스템 개선',
          items: [
            'TextToSpeech 통한 영역 터치 음성 읽어주기 기능 지원',
            '접근성 API(AccessibilityNodeInfo)를 기반으로 사용자 인터랙션 요소를 식별하고, 시각 장애 사용자 지원 기능 고도화',
            '화면 확대(Zoom), 고대비 모드, 점자 디바이스 및 DPAD 네비게이션 대응을 위해 UI 렌더링 로직 개선',
            'Fragment 계층 분리를 통해 로직을 분리하고, 공통 동작은 Helper 모듈로 추상화하여 재사용성 및 유지보수성 향상',
          ]
        },
        {
          title: '결제 SDK 추상화 기반 분할 결제 시스템 고도화',
          items: [
            '결제 SDK(Easycard·KIS·Ksnet) 추상화 설계 및 공통 인터페이스 구축',
            '메뉴별·금액별 2가지 분할 결제 방식 구현',
            '부분 결제 중단 상황 대응을 위한 결제 내역 상태 복구 및 데이터 일관성 로직 구현',
          ]
        },
        {
          title: '글로벌 결제 환경 대응 다국어·지역화 시스템 구축',
          items: [
            'Localization 기반 다국어(한국어/영어/중국어/독일어/프랑스어) 지원 및 동적 언어 전환 구현',
            '해외 결제 환경(팁·VAT·공휴일 할증) 지역화 결제 로직 (Locale + Configuration API)',
          ]
        },
      ],
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
      title: '라드씨엔에스',
      company: 'Android Developer',
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
              {exp.features && exp.features.length > 0 && (
                <div className="experience-features">
                  {exp.features.map((feature, fi) => (
                    <div key={fi} className="experience-feature-item">
                      <p className="experience-feature-title">{feature.title}</p>
                      <ul className="experience-feature-subs">
                        {feature.items.map((item, ii) => (
                          <li key={ii} className="experience-feature-sub">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
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
