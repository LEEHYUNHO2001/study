# Wine

- Code 타자 연습을 위한 웹 사이트
- 서비스 링크 : https://wine-theta.vercel.app/
- GitHub : https://github.com/LEEHYUNHO2001/wine
- Velog : https://velog.io/@leehyunho2001/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8

[샘플 API](https://sampleapis.com/) 에서 데이터를 받아 읽는 애플리케이션을 구현했습니다.
CRUD 기능을 수행하도록 설계했습니다.

<br>

## 시작하기

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

<br>

## 스택

- Front-End
  - React Hooks
  - Next.js
  - TypeScript
  - Styled-components
- Deploy
  - Vercel

<br>

## src 디렉터리 구조

```
  src
  ├─ components
  │   ├─ BeerCard.tsx
  │   ├─ Error.tsx
  │   ├─ index.tsx
  │   ├─ Loading.tsx
  │   ├─ WineCard.tsx
  │
  ├─ constants
  │   ├─ index.ts
  │
  ├─ hooks
  │   ├─ useBeerData.tsx
  │   ├─ useWineData.tsx
  │
  ├─ pages
  │   ├─ api
  │   │   ├─ hello.ts
  │   │
  │   ├─ beers
  │   │   ├─ ale.tsx
  │   │   ├─ index.tsx
  │   │   ├─ stouts.tsx
  │   │
  │   ├─ wines
  │   │   ├─ dessert.tsx
  │   │   ├─ index.tsx
  │   │   ├─ port.tsx
  │   │   ├─ reds.tsx
  │   │   ├─ rose.tsx
  │   │   ├─ sparkling.tsx
  │   │   ├─ whites.tsx
  │   │
  │   ├─ _app.tsx
  │   └─ index.tsx
  │
  ├─ types
  │   ├─ beer.ts
  │   ├─ wine.ts
  │
  └─  utils
        ├─ fetcher.ts

  index.html
```

프로젝트 추상화에 집중했습니다.

- components : 컴포넌트를 모아놓은 디렉터리
- constants : API 엔드포인트를 변수로 담기 위한 디렉터리
- hooks : 커스텀 훅 디렉터리
- pages : 폴더나 파일이 Route 역할을 하게 될 디렉터리
- types : 각종 타입 인터페이스를 가진 디렉터리
- utils : 모든 페이지에 적용할 함수 등을 가진 디렉터리

<br>

## 개발일정

- 기간 : 2021.12.19(목) ~ 2021.12.31(일)
  - 초기 환경 셋팅
  - 꾸준한 프로젝트 추상화
  - Sample APIs 데이터 읽기
  - CRUD 기능 구현
  - styled-components

## UI

## 메인 기능

## 추가 기능
