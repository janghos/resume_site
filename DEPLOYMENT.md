# 배포 환경 EmailJS 설정 가이드

배포 환경에서도 EmailJS가 작동하도록 환경변수를 설정해야 합니다.

## 배포 플랫폼별 환경변수 설정 방법

### 1. Netlify 배포 시

1. **Netlify 대시보드 접속**
   - https://app.netlify.com 접속
   - 프로젝트 선택

2. **환경변수 설정**
   - Site settings → Build & deploy → Environment variables
   - "Add a variable" 클릭
   - 다음 변수들을 추가:
     ```
     REACT_APP_EMAILJS_SERVICE_ID = service_f55msqg
     REACT_APP_EMAILJS_TEMPLATE_ID = template_qjihlw6
     REACT_APP_EMAILJS_PUBLIC_KEY = SY7g1U_euAPqoM-Iq
     ```

3. **재배포**
   - Deploys 탭 → "Trigger deploy" → "Clear cache and deploy site"

### 2. Vercel 배포 시

1. **Vercel 대시보드 접속**
   - https://vercel.com 접속
   - 프로젝트 선택

2. **환경변수 설정**
   - Settings → Environment Variables
   - "Add New" 클릭
   - 다음 변수들을 추가:
     ```
     REACT_APP_EMAILJS_SERVICE_ID = service_f55msqg
     REACT_APP_EMAILJS_TEMPLATE_ID = template_qjihlw6
     REACT_APP_EMAILJS_PUBLIC_KEY = SY7g1U_euAPqoM-Iq
     ```
   - Environment: Production, Preview, Development 모두 선택

3. **재배포**
   - Deployments 탭 → 최신 배포의 "..." → "Redeploy"

### 3. GitHub Pages 배포 시

GitHub Pages는 환경변수를 직접 설정할 수 없으므로, 다른 방법을 사용해야 합니다:

**방법 1: 빌드 스크립트 수정 (권장)**
- GitHub Actions를 사용하여 환경변수를 설정

**방법 2: 코드에 직접 입력 (보안 위험)**
- Contact.js 파일에 직접 키 값 입력 (공개되므로 권장하지 않음)

### 4. 기타 플랫폼

대부분의 배포 플랫폼에서 환경변수 설정 방법은 유사합니다:
- 프로젝트 설정 → Environment Variables
- `REACT_APP_` 접두사가 붙은 변수 추가
- 재배포

## 중요 사항

⚠️ **주의사항**:
- `REACT_APP_` 접두사가 필수입니다 (React 앱에서만 인식)
- 환경변수 변경 후 반드시 재배포해야 합니다
- Public Key는 클라이언트에 노출되어도 안전하지만, Service ID와 Template ID는 보안상 숨기는 것이 좋습니다

## 확인 방법

배포 후 브라우저 개발자 도구(F12) → Console에서 확인:
- 환경변수가 제대로 로드되었는지 확인
- EmailJS 전송 시 에러 메시지 확인

## 대안: 코드에 직접 입력 (비권장)

만약 환경변수 설정이 어렵다면, Contact.js 파일에 직접 입력할 수 있지만 **보안상 권장하지 않습니다**:

```javascript
const EMAILJS_SERVICE_ID = 'service_f55msqg';
const EMAILJS_TEMPLATE_ID = 'template_qjihlw6';
const EMAILJS_PUBLIC_KEY = 'SY7g1U_euAPqoM-Iq';
```

이 경우 키 값이 공개되므로, EmailJS에서 도메인 제한을 설정하는 것을 권장합니다.

