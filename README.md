# 영화 예매 시스템

Vercel + TMDB API + Docker + Nginx 기반의 영화 예매 웹 애플리케이션입니다.  
배포 주소: https://movie-booking-gobigm3lz-eunseokas-projects.vercel.app/

---

## 주요 기능

- 인기 영화 목록 표시 (TMDB API 연동)
- 영화/극장/상영 정보 등록 (관리자 페이지)
- 예매 및 예매 내역 확인

---

## 사용 기술

- Next.js 14 (App Router)
- TMDB API
- Vercel (서버리스 배포)
- Docker & Nginx

---

## 실행 방법

```bash
npm install
npm run dev
```

## Docker 실행

- Docker를 이용해 전체 애플리케이션을 컨테이너로 실행합니다.  

```bash
docker-compose up --build
```

## 프로젝트 특징
- Serverless 환경에서 Vercel로 배포
- 외부 API(TMDB) 연동으로 실시간 영화 정보 표시
- Docker + Nginx 구성으로 프록시 서버 운영
