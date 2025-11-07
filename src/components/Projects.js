import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuEatDrawerOpen, setIsMenuEatDrawerOpen] = useState(false);
  const [selectedMenuEatProject, setSelectedMenuEatProject] = useState(null);

  const menuEatProjects = [
    {
      id: 'menu-eat-split-payment',
      title: '분할결제(더치페이) 기능 개선',
      period: '2025.07 ~ 2025.09',
      description: '기존 더치페이 기능의 한계를 개선하여 금액별 분할결제와 메뉴별 분할결제를 지원하는 기능을 구현했습니다. SQLite 기반 상태 관리와 JSON 직렬화를 통한 결제 상태 복원 기능을 추가하여 앱 재실행 시에도 결제 상태를 유지할 수 있도록 했습니다.',
      tech: ['SQLite', 'Retrofit2', 'SharedPreferences', 'Enum class', 'Dialog', 'ViewBinding'],
      features: [
        '금액별 분할결제 (인원별 금액 수정 가능)',
        '메뉴별 분할결제 (주문한 메뉴만 선택하여 결제)',
        '10원 단위 금액 보정 로직',
        '결제 상태 SQLite 저장 및 복원',
        'JSON 직렬화를 통한 상태 관리',
        'VOC 문제 100% 해결'
      ],
      achievements: '분할결제 관련 VOC 문제 100% 해결, 경쟁 서비스 대비 차별화된 안정성 제공'
    },
    {
      id: 'menu-eat-printer-retry',
      title: '프린터 출력 실패 자동 재출력 기능',
      period: '2025.05 ~ 2025.06',
      description: '프린터 출력 실패 시 자동으로 재출력을 시도하는 기능을 구현했습니다. Queue 기반 구조로 중복/동시성 문제를 방지하고, 사용자 선택에 따른 재시도 중단 옵션을 제공합니다.',
      tech: ['SQLite', 'Retrofit', 'SharedPreferences', 'CoroutineScope', 'Synchronized', 'LAN'],
      features: [
        '출력 실패 시 DB 큐에 저장 후 자동 재출력',
        '@Synchronized와 Queue(FIFO) 구조로 중복/동시성 방지',
        '사용자 선택에 따른 재시도 중단 옵션',
        'CoroutineScope를 활용한 비동기 처리',
        '재출력 소요 시간 30% 이상 단축'
      ],
      achievements: '재출력 소요 시간 30% 이상 단축, 다양한 출력 타입을 동일 로직으로 처리 가능'
    },
    {
      id: 'menu-eat-tip-tax',
      title: '해외 결제 현지화 (미국 팁·세금 대응)',
      period: '2025.01 ~ 2025.03',
      description: '북미 매장 결제 환경에 맞춰 팁(Tip) 및 세금(Tax) 처리 로직을 현지화했습니다. Locale 기반 국가별 분기 처리하며 유지보수성을 높였습니다.',
      tech: ['TCP Client', 'Locale', 'SharedPreferences', 'Dialog', 'ViewBinding', 'RecyclerView'],
      features: [
        '국가코드 조건 분기 (US/CA만 팝업 UI 활성화)',
        '자동 팁(Gratuity) & 사용자 입력 Tip 분리 처리',
        '세금 별도 계산 및 표기',
        'Locale 세금 정책 모듈화',
        '팝 다이얼로그와 결제창 통합',
        'UI 반응 속도 15% 향상'
      ],
      achievements: '북미 매장 고객이 익숙한 팝/세금 결제 관행 반영, 코드 중복 30% 감소'
    },
    {
      id: 'menu-eat-ui-ux',
      title: 'UI/UX 리뉴얼 및 다크 테마 적용',
      period: '2024.07 ~ 2024.10',
      description: '기존 POS/메뉴판 앱의 UI 노후화 문제를 해결하고, 다양한 매장 환경에서 사용성을 높이기 위해 전면적인 UI/UX 리뉴얼을 진행했습니다.',
      tech: ['Material Design', 'Theme', 'ViewBinding', 'RecyclerView', 'Dialog', 'Navigation Component', 'MPAndroidChart', 'Jetpack Compose'],
      features: [
        'POS 테이블 그룹/주문서/설정 페이지 전면 디자인 교체',
        '다크 테마 지원 (AppCompat DayNight)',
        '공통 팝업/컴포넌트 표준화',
        'Custom CalendarRangePicker 개발',
        'MPAndroidChart를 활용한 매출/주문 트렌드 시각화',
        'API 호출 속도 약 1.2~1.5초 단축'
      ],
      achievements: '주요 결제·주문 단계 평균 소요 시간 약 20% 단축, 개발 효율성 약 30% 향상'
    },
    {
      id: 'menu-eat-localization',
      title: 'POS + 테이블오더 다국어(Localization) 지원 개선',
      period: '2024.01 ~ 2024.03',
      description: '해외 매장 확장에 대비해 다국어 지원 구조를 정비하고, 언어별 텍스트 길이 차이에 따른 UI 깨짐 문제를 해결했습니다.',
      tech: ['Locale', 'string.xml', 'SharedPreferences', 'ContextWrapper', 'ViewBinding'],
      features: [
        'string.xml 언어별 분리 및 구조화',
        'UI 자동 크기 조정 및 정렬 규칙 통일',
        '언어 변경 즉시 반영 구조 설계',
        '하드코딩된 텍스트 전면 리소스화',
        '코드 중복 약 25% 감소'
      ],
      achievements: '다양한 언어 환경에서도 동일한 UI 구조와 사용자 경험 유지'
    }
  ];

  const otherProjects = [
    {
      id: 'fila-erp',
      title: 'FILA Mobile ERP 앱 신규 개발',
      period: '2023.04 ~ 2023.11',
      description: 'FILA 매장 관리자를 위한 모바일 ERP 앱을 신규 개발했습니다. 매장 재고조회, 실사등록, 출고의뢰, 매출 분석 기능을 제공하며, Google/MS 로그인을 지원합니다.',
      tech: ['MVVM', 'Coroutine', 'Retrofit2', 'Room', 'Firebase Cloud Messaging', 'WebView', 'OAuth'],
      features: [
        'MVVM 패턴 기반 구조 설계',
        'Room DB를 활용한 고정 파라미터 캐싱',
        'Google OAuth 로그인',
        'Microsoft Azure AD 로그인 (MSAL)',
        'WebView 커스터마이징 (파일 첨부, 사진 촬영)',
        '실사 등록 / 매장 출고의뢰 기능',
        '매출 분석 (Daily/Monthly/Yearly)',
        'FCM 푸시 알림'
      ],
      achievements: 'API 호출 수 약 40% 절감, 응답 속도와 유지보수성 향상, Git 브랜치 전략 최적화로 병합 충돌 50% 이상 감소'
    },
    {
      id: 'newbalance-ga4',
      title: '뉴발란스 GA4 태깅 구축',
      period: '2023.11 ~ 2024.01',
      description: '뉴발란스 앱의 GA4 이벤트 태깅을 설계하고 구현했습니다. 구매/로그인/회원가입 등 핵심 플로우를 추적하여 데이터 기반 의사결정을 지원합니다.',
      tech: ['Firebase', 'GA4', 'Javascript Interface', 'DataLayer'],
      features: [
        '이벤트 정의·매핑',
        'GTM을 활용한 DataLayer 값 전달',
        '네트워크 탭·GA4 DebugView로 정상 수집 확인',
        '마케팅팀 활용 가능한 이벤트 기반 대시보드 제공'
      ],
      achievements: '마케팅팀 활용 가능한 이벤트 기반 대시보드 제공'
    },
    {
      id: 'newbalance-instore',
      title: 'MyNB 뉴발란스 멤버십 APP - 인스토어(In-Store) 기능 구현',
      period: '2023.01 ~ 2023.03',
      description: 'Bluetooth Beacon 신호를 활용하여 사용자가 매장 내에 진입하면 자동으로 인식해, 매장 전용 서비스를 제공하는 기능을 구현했습니다.',
      tech: ['JAVA', 'BLE', 'Beacon', 'Retrofit2', 'Android Service', 'Foreground Service', 'BroadcastReceiver'],
      features: [
        '블루투스 기반 매장 감지 로직 구현',
        '인스토어 모드 전환 로직 개발',
        'POS 시스템과 연계한 주문/픽업 서비스',
        '멤버십 혜택 자동 적용 처리',
        '신호 간섭/연결 끊김 대비 재연결 로직'
      ],
      achievements: '앱 DAU 약 15% 상승, 잘못된 매장 인식 오류 40% 이상 감소'
    },
    {
      id: 'dongnerunner',
      title: '동네런닝 App',
      period: '2025.09 ~ 진행중',
      description: 'Google Maps 기반의 지역 밀착형 러닝 기록 & 커뮤니티 앱 개발. 실시간 GPS 추적 기반 러닝 거리·페이스 자동 측정 및 기록 기능을 구현했습니다.',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Google Maps API', 'Firebase Auth', 'Firestore'],
      features: [
        '실시간 GPS 추적 기반 러닝 거리·페이스 자동 측정',
        'Firestore 연동을 통한 실시간 위치 정보 저장',
        'Polyline 인코딩으로 경로 저장 및 시각화',
        'Google 로그인 연동',
        '사용자별 데이터 분리 저장',
        '러닝 기록 리스트 UI',
        '실시간 위치 추적 기반 반경 5km 내 게시글 필터링'
      ],
      achievements: 'Google Maps/Location API, 위도/경도 좌표계, 경로 인코딩/디코딩 등 위치기반 기술 확장 활용',
      images: [
        { src: '/images/dongnerunner/google-login.png', alt: 'Google 로그인 화면' },
        { src: '/images/dongnerunner/google-loginauth.png', alt: 'Google auth' },
        { src: '/images/dongnerunner/main-dashboard.png', alt: '메인 대시보드' },
        { src: '/images/dongnerunner/running-start.png', alt: '러닝 시작 화면 (타이머, 거리, 페이스, 심박수)' },
        { src: '/images/dongnerunner/running-active.png', alt: '러닝 중 화면 (지도 포함)' },
        { src: '/images/dongnerunner/splash.png', alt: 'DongneRunner 스플래시 화면' },
        { src: '/images/dongnerunner/running-records.png', alt: '러닝 기록 리스트 화면' },
        { src: '/images/dongnerunner/running-record-detail.png', alt: '러닝 기록 상세 화면' },
        { src: '/images/dongnerunner/community.png', alt: '커뮤니티 화면' },
        { src: '/images/dongnerunner/post-create.png', alt: '게시글 작성 화면' },
        { src: '/images/dongnerunner/post-detail.png', alt: '게시글 상세 화면 (러닝 경로 포함)' },
        { src: '/images/dongnerunner/running-route.png', alt: '러닝 경로 상세 화면' }
      ]
    },
    {
      id: 'foodilog',
      title: 'FoodiLog App',
      period: '2024.09 ~ 2024.10',
      description: '위치 기반 맛집 추천 + 개인 리뷰 일지 기록이 가능한 앱을 직접 설계/개발/출시했습니다. 기획부터 배포까지 전 과정을 단독으로 수행했습니다.',
      tech: ['Kotlin', 'RecyclerView', 'Custom Calendar', 'Google Maps API', 'Google Places API', 'Android SDK'],
      features: [
        'GPS + Google Places API → 근처 맛집 추천',
        '사진/별점/리뷰를 캘린더와 연동하여 기록',
        'RecyclerView + 커스텀 캘린더 UI',
        'Google Play Store 정식 배포'
      ],
      achievements: '기획 ~ 개발 ~ 출시까지 1개월 내 완성, Google Play Store 정식 배포',
      links: {
        playstore: 'https://play.google.com/store/apps/details?id=com.foodilogg',
        github: 'https://github.com/janghos/FoodiLog',
        video: 'https://youtube.com/shorts/FK9pHyaDr6k?feature=share'
      }
    }
  ];

  const handleMenuEatClick = () => {
    setIsMenuEatDrawerOpen(true);
    setSelectedMenuEatProject(null);
  };

  const handleMenuEatProjectClick = (project) => {
    setSelectedMenuEatProject(project);
  };

  const handleCloseDrawer = () => {
    setIsMenuEatDrawerOpen(false);
    setSelectedMenuEatProject(null);
  };

  const handleBackFromDetail = () => {
    setSelectedMenuEatProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <p className="projects-intro">
          확장 가능하고 반응형 웹 및 하이브리드 모바일 앱을 개발하고 배포했습니다.<br />
          직관적이고 동적인 인터랙션을 갖춘 고성능 애플리케이션에 집중합니다.<br />
          데이터 분석과 시각화에도 관심이 있습니다.
        </p>
        
        <div className="projects-grid">
          {/* 메뉴잇 통합 프로젝트 */}
          <div className="project-card menu-eat-card" onClick={handleMenuEatClick}>
            <div className="project-header">
              <div>
                <h3 className="project-title">메뉴잇</h3>
                <p className="project-period">2024.01 ~ 현재</p>
              </div>
              <div className="menu-eat-badge">
                <span>{menuEatProjects.length}개 프로젝트</span>
              </div>
            </div>
            <p className="project-description">
              식당/카페 테이블오더 앱 개발 회사에서 진행한 다양한 프로젝트들입니다. 
              POS 연동, 결제 시스템, UI/UX 개선 등 핵심 기능들을 개발했습니다.
            </p>
            <div className="project-tech">
              <span className="tech-tag">Kotlin</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">SQLite</span>
              <span className="tech-tag">Retrofit2</span>
              <span className="tech-tag">MVVM</span>
              <span className="tech-tag">Material Design</span>
            </div>
          </div>

          {/* 다른 프로젝트들 */}
          {otherProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.period && <p className="project-period">{project.period}</p>}
                </div>
                <button 
                  className="show-project-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(selectedProject === project.id ? null : project.id);
                  }}
                >
                  {selectedProject === project.id ? '숨기기' : '프로젝트 보기'}
                </button>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              {selectedProject === project.id && (
                <div className="project-details">
                  <h4>주요 기능</h4>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  {project.achievements && (
                    <div className="project-achievements">
                      <h4>성과</h4>
                      <p>{project.achievements}</p>
                    </div>
                  )}

                  {project.links && (
                    <div className="project-links">
                      <h4>링크</h4>
                      <div className="links-container">
                        {project.links.playstore && (
                          <a href={project.links.playstore} target="_blank" rel="noopener noreferrer" className="project-link">
                            Google Play Store
                          </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            GitHub
                          </a>
                        )}
                        {project.links.video && (
                          <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="project-link">
                            시연 영상
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {project.images && project.images.length > 0 && (
                    <div className="project-images">
                      <h4>스크린샷</h4>
                      <div className="images-grid">
                        {project.images.map((image, index) => (
                          <div key={index} className="image-wrapper">
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              className="project-image"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="image-placeholder" style={{ display: 'none' }}>
                              <p>{image.alt}</p>
                              <small>이미지를 추가하세요</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 메뉴잇 드로어 */}
      <div className={`drawer-overlay ${isMenuEatDrawerOpen ? 'open' : ''}`} onClick={handleCloseDrawer}></div>
      <div className={`drawer ${isMenuEatDrawerOpen ? 'open' : ''}`}>
        {!selectedMenuEatProject ? (
          <>
            <div className="drawer-header">
              <h2>메뉴잇 프로젝트</h2>
              <button className="drawer-close-btn" onClick={handleCloseDrawer}>✕</button>
            </div>
            <div className="drawer-content">
              <div className="menu-eat-projects-list">
                {menuEatProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="menu-eat-project-item"
                    onClick={() => handleMenuEatProjectClick(project)}
                  >
                    <h3>{project.title}</h3>
                    <p className="menu-eat-project-period">{project.period}</p>
                    <p className="menu-eat-project-desc">{project.description}</p>
                    <div className="menu-eat-project-tech">
                      {project.tech.slice(0, 4).map((tech, index) => (
                        <span key={index} className="tech-tag-small">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="drawer-detail">
            <div className="drawer-header">
              <button className="drawer-back-btn" onClick={handleBackFromDetail}>←</button>
              <h2>{selectedMenuEatProject.title}</h2>
              <button className="drawer-close-btn" onClick={handleCloseDrawer}>✕</button>
            </div>
            <div className="drawer-content">
              <div className="drawer-detail-content">
                <p className="drawer-detail-period">{selectedMenuEatProject.period}</p>
                <p className="drawer-detail-description">{selectedMenuEatProject.description}</p>
                
                <div className="drawer-detail-section">
                  <h4>기술 스택</h4>
                  <div className="project-tech">
                    {selectedMenuEatProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="drawer-detail-section">
                  <h4>주요 기능</h4>
                  <ul className="features-list">
                    {selectedMenuEatProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {selectedMenuEatProject.achievements && (
                  <div className="project-achievements">
                    <h4>성과</h4>
                    <p>{selectedMenuEatProject.achievements}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
