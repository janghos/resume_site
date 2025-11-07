# EmailJS 설정 가이드 (상세)

## 1단계: EmailJS 계정 생성 및 서비스 설정

1. **EmailJS 계정 생성**
   - https://www.emailjs.com 접속
   - 무료 계정 생성 (월 200통 무료)
   - 이메일 인증 완료

2. **Email Service 추가**
   - Dashboard → Email Services → Add New Service
   - Gmail 선택 (또는 원하는 이메일 서비스)
   - Gmail 계정 연결 (OAuth 인증)
   - Service ID 복사 (예: `service_xxxxx`)
   - ⚠️ 중요: Service ID를 복사해두세요!

## 2단계: Email Template 생성 (가장 중요!)

### 템플릿 생성 단계별 가이드

1. **템플릿 생성**
   - Dashboard → Email Templates → Create New Template 클릭
   - 또는 "Add New Template" 버튼 클릭

2. **템플릿 기본 설정**

   **Template Name (템플릿 이름)**
   - 예: `Portfolio Contact Form`

   **To Email (받는 사람 이메일)**
   ```
   seojh7816@gmail.com
   ```
   - ⚠️ 중요: 여기에 실제로 메일을 받을 이메일 주소를 입력하세요!

   **From Name (보내는 사람 이름)**
   ```
   {{from_name}}
   ```
   - 또는 고정값: `포트폴리오 사이트`

   **From Email (보내는 사람 이메일)**
   ```
   {{from_email}}
   ```
   - ⚠️ 중요: 템플릿에서 "Reply To" 설정도 확인하세요!

   **Subject (이메일 제목)**
   ```
   포트폴리오 사이트 문의: {{from_name}}
   ```
   - 또는:
   ```
   [포트폴리오] {{from_name}}님의 문의
   ```

3. **이메일 본문 작성**

   **Content (이메일 내용)**
   ```
   안녕하세요,
   
   포트폴리오 사이트를 통해 새로운 문의가 접수되었습니다.
   
   ────────────────────────
   이름: {{from_name}}
   이메일: {{from_email}}
   ────────────────────────
   
   메시지:
   {{message}}
   
   ────────────────────────
   
   이 메시지에 답장하시면 {{from_email}}로 전송됩니다.
   ```

   또는 더 간단한 버전:
   ```
   이름: {{from_name}}
   이메일: {{from_email}}
   
   메시지:
   {{message}}
   ```

4. **템플릿 변수 확인**
   - 템플릿에서 사용할 수 있는 변수:
     - `{{from_name}}` - 보낸 사람 이름
     - `{{from_email}}` - 보낸 사람 이메일
     - `{{message}}` - 메시지 내용
     - `{{to_email}}` - 받는 사람 이메일 (필요시)

5. **템플릿 저장**
   - "Save" 버튼 클릭
   - Template ID 복사 (예: `template_xxxxx`)
   - ⚠️ 중요: Template ID를 복사해두세요!

## 3단계: Public Key 확인

1. Dashboard → Account → API Keys
2. Public Key 복사 (예: `xxxxxxxxxxxxx`)
3. ⚠️ 중요: Public Key를 복사해두세요!

## 4단계: 환경변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 아래 내용을 입력하세요:

```bash
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

⚠️ 중요:
- `service_xxxxx` 부분을 실제 Service ID로 교체
- `template_xxxxx` 부분을 실제 Template ID로 교체
- `xxxxxxxxxxxxx` 부분을 실제 Public Key로 교체
- 따옴표 없이 입력하세요!

## 5단계: 코드 확인

`src/components/Contact.js` 파일에서 다음 변수들이 올바르게 전달되는지 확인:

```javascript
{
  from_name: formData.name,      // 템플릿의 {{from_name}}
  from_email: formData.email,    // 템플릿의 {{from_email}}
  message: formData.message,    // 템플릿의 {{message}}
  to_email: 'seojh7816@gmail.com'
}
```

## 6단계: 앱 재시작

환경변수를 추가한 후:
```bash
npm start
```

## 문제 해결 (이메일이 안 들어올 때)

### 1. 템플릿 변수 이름 확인
- 템플릿에서 사용한 변수 이름과 코드에서 보내는 변수 이름이 일치해야 합니다
- 예: 템플릿에 `{{user_name}}`을 사용했다면 코드도 `user_name`으로 보내야 함

### 2. Gmail 서비스 연결 확인
- Dashboard → Email Services에서 Gmail이 제대로 연결되어 있는지 확인
- 연결이 안 되어 있다면 다시 연결

### 3. 템플릿 ID 확인
- Dashboard → Email Templates에서 Template ID가 올바른지 확인
- `.env` 파일의 Template ID와 일치하는지 확인

### 4. 스팸함 확인
- Gmail의 스팸함도 확인해보세요

### 5. 브라우저 콘솔 확인
- 개발자 도구(F12) → Console 탭에서 에러 메시지 확인
- "이메일 전송 성공" 메시지가 나오는지 확인

### 6. EmailJS Dashboard에서 로그 확인
- Dashboard → Logs에서 전송 내역 확인
- 실패한 경우 에러 메시지 확인

## 템플릿 예시 (복사해서 사용 가능)

### 간단한 버전
```
이름: {{from_name}}
이메일: {{from_email}}

메시지:
{{message}}
```

### 상세한 버전
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
포트폴리오 사이트 문의
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

이름: {{from_name}}
이메일: {{from_email}}

메시지:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
이 메시지에 답장하시면 {{from_email}}로 전송됩니다.
```

## 주의사항

1. **템플릿 변수는 대소문자 구분**
   - `{{from_name}}` ≠ `{{From_Name}}`

2. **변수 이름은 정확히 일치해야 함**
   - 코드: `from_name`
   - 템플릿: `{{from_name}}`

3. **공백 주의**
   - `{{ from_name }}` (공백 있음) ❌
   - `{{from_name}}` (공백 없음) ✅

4. **환경변수는 앱 재시작 필요**
   - `.env` 파일 수정 후 반드시 `npm start` 재실행

5. **무료 플랜 제한**
   - 월 200통 제한
   - 초과 시 유료 플랜 필요
