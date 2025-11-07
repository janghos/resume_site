# 서장호 이력서 홈페이지

포트폴리오 및 이력서를 소개하는 개인 웹사이트입니다.

## 프로젝트 구조

```
src/
├── components/
│   ├── Hero.js          # 메인 히어로 섹션
│   ├── Expertise.js     # 전문 분야 섹션
│   ├── Projects.js      # 프로젝트 섹션
│   ├── Experience.js    # 경력 섹션
│   └── Contact.js       # 연락처 섹션
└── App.js               # 메인 앱 컴포넌트
```

## 이미지 추가하기

프로젝트 스크린샷을 추가하려면 `public/images/` 폴더에 다음 파일들을 추가하세요:

- `dongnerunner-1.png` - 스플래시 화면
- `dongnerunner-2.png` - 로그인 화면
- `dongnerunner-3.png` - 러닝 시작 화면
- `dongnerunner-4.png` - 러닝 기록 화면
- `dongnerunner-5.png` - 커뮤니티 화면
- `dongnerunner-6.png` - 러닝 경로 상세

이미지가 없으면 자동으로 placeholder가 표시됩니다.

## 실행하기

### 개발 모드
```bash
npm start
```
브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드
```bash
npm run build
```
빌드된 파일은 `build/` 폴더에 생성됩니다.

## 커스터마이징

각 섹션의 내용은 해당 컴포넌트 파일에서 수정할 수 있습니다:

- **Hero**: `src/components/Hero.js` - 이름과 타이틀
- **Expertise**: `src/components/Expertise.js` - 전문 분야 및 스킬
- **Projects**: `src/components/Projects.js` - 프로젝트 목록 및 설명
- **Experience**: `src/components/Experience.js` - 경력 사항
- **Contact**: `src/components/Contact.js` - 연락처 폼

스타일은 각 컴포넌트의 `.css` 파일에서 수정할 수 있습니다.

## 배포

빌드 후 `build/` 폴더의 내용을 정적 호스팅 서비스(Netlify, Vercel, GitHub Pages 등)에 업로드하세요.
# resume_site
# resume_site
