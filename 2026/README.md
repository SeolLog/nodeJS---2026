# Express 서버 실습

> Node.js + Express를 활용한 웹 서버 및 사용자 인증 실습 프로젝트

## 기술 스택

| 항목 | 버전 |
|------|------|
| Node.js | LTS |
| Express | ^5.3.0 |
| cookie-parser | ^1.4.7 |

## 프로젝트 구조

```
2026/
└── 1027/
    └── server/
        ├── public/
        │   ├── index.html    # 홈 페이지
        │   ├── login.html    # 로그인 페이지
        │   └── signup.html   # 회원가입 페이지
        └── package.json
```

## 시작하기

```bash
# 의존성 설치
cd 1027/server
npm install

# 서버 실행
node index.js
```

## 페이지 목록

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | index.html | 홈 페이지 |
| `/login` | login.html | 로그인 |
| `/signup` | signup.html | 회원가입 |

## 학습 목표

- Express.js 라우팅 이해
- 정적 파일 서빙 (`express.static`)
- 쿠키 기반 세션 관리 (`cookie-parser`)
- HTML 폼과 서버 연동
